import CategoryTable from "@components/panel/categories/table";
import CategoriesForm from "@components/panel/Forms/categoriesForm";
import PanelHeader from "@components/panel/panelHeader";
import { adminCheckAuth } from "@utils/session";
import { Button, Modal } from "antd";
import dynamic from "next/dynamic";
import { useState } from "react";

import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import HButton from "@components/HButton";

const { Dragger } = Upload;
var RinchTextEditor = dynamic(() => import("@components/rinchTextEditor"), {
    ssr: false, loading: () => <p>Loading ...</p>
})
var SeoVisualization = dynamic(() => import("@components/panel/seoVisualization"), {
    ssr: false, loading: () => <p>Loading ...</p>
})

const CategoryAdd: React.FC = () => {
    const [value, setValue] = useState('')
    const data = useSelector((state: RootState) => state.categories.data)

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            debugger
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return (
        <>
            <PanelHeader title="Kategori Ekle" >
                <Button>Kaydet</Button>
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
                <span className="my-3 flex items-center justify-center text-sm  text-gray-300 before:content-[''] before:mr-2 before:flex-grow before:h-1 before:w-full before:bg-slate-300  after:content-[''] after:h-1 after:w-full after:bg-gray-300  after:flex-grow after:ml-3">
                    veya
                </span>
                <div className="flex items-center justify-center">
                    <HButton theme="Secondary" >Galeriden Seç</HButton>
                    <Modal title="Basic Modal" open={true}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </div>
            </div>
            <div className="bg-white p-5 mt-10">
                <SeoVisualization />
            </div>
        </>
    )
}
CategoryAdd.displayName = "PanelPage"
export default CategoryAdd;
export const getServerSideProps = adminCheckAuth({});