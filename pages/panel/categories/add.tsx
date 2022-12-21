import CategoriesForm from "@components/panel/Forms/categoriesForm";
import PanelHeader from "@components/panel/panelHeader";
import { adminCheckAuth } from "@utils/session";
import dynamic from "next/dynamic";
import { useState } from "react";
import { InboxOutlined, } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload, Button, Modal, UploadFile } from 'antd';
import { useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import HButton from "@components/HButton";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '@utils/firebase';
import axios from "axios";

const { Dragger } = Upload;
var RinchTextEditor = dynamic(() => import("@components/rinchTextEditor"), {
    ssr: false, loading: () => <p>Loading ...</p>
})
var SeoVisualization = dynamic(() => import("@components/panel/seoVisualization"), {
    ssr: false, loading: () => <p>Loading ...</p>
})

const CategoryAdd: React.FC = () => {
    const [value, setValue] = useState('')
    const [fileList, setFileList] = useState<UploadFile[]>([])
    const data = useSelector((state: RootState) => state.categories.data)
    const content = useSelector((state: RootState) => state.categories.content)
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        maxCount: 3,
        listType: "picture-card",
        className: "upload-list-inline",
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
            setFileList(info.fileList)
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
        onRemove(file) {
            console.log(file)
        },
        onPreview(file) {
            handlePreview(file)
        },

    };
    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = file.thumbUrl
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };

    const onSaveCategory = async () => {
        const tempData = { ...data }
        tempData.description = content;
        const images: string[] = []
        fileList.forEach((file: UploadFile | File) => {
            const uniqueImageName = file.name.split('.')[0] + uuidv4().slice(0, 10)
            const imageRef = ref(storage, `${'categories'}/${uniqueImageName}`);
            const uploadImage = uploadBytesResumable(imageRef, file as Blob);
            uploadImage.on(
                'state_changed',
                (snapshot) => {
                    const progressPercent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                },
                (err) => {
                    message.error('Resim yüklenemedi')
                }, async () => {
                    await getDownloadURL(uploadImage.snapshot.ref)
                        .then((url) => {
                            try {
                                images.push(url)
                            } catch (err) {
                                message.error('Resim yüklenemedi')
                            }
                        })
                        .catch((err) => {
                            message.error('Resim yüklenemedi')
                        });
                });
        })
        tempData.seoKeyword = tempData.seoKeyword?.toString();
        tempData.images = images;
        console.log(tempData)
        debugger
        const res = await axios.post('/api/categories/add',tempData);
    }


    return (
        <>
            <PanelHeader title="Kategori Ekle" >
                <HButton theme="Secondary" onClick={onSaveCategory}>Kaydet</HButton>
            </PanelHeader>
            <div className="bg-white p-5">

                <CategoriesForm />
                <span className="pb-2">Açıklama</span>
                <RinchTextEditor type='categories' value={value} setValue={setValue} />
                <div className="mt-10">
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Tıkla yada sürükle bırak</p>
                        <p className="ant-upload-hint">
                            Buraya tıklayarak resim seçebilir yada sürükleyip bırakabilirsiniz
                        </p>
                    </Dragger>
                </div>

            </div>
            <div className="bg-white p-5 mt-10">
                <SeoVisualization />
            </div>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </>
    )
}
CategoryAdd.displayName = "PanelPage"
export default CategoryAdd;
export const getServerSideProps = adminCheckAuth({});