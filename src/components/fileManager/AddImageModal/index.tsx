import { InboxOutlined } from '@ant-design/icons';
import HButton from '@components/HButton'
import { RootState } from '@redux/reducers';
import { storage } from '@utils/firebase';
import { fetchFileManagerData } from '@utils/functions/fetchFileManagerData';
import { Form, Modal, Select, UploadProps, Upload, message } from 'antd'
import { ref, uploadBytes } from 'firebase/storage';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const { Dragger } = Upload;
const AddImageModal: React.FC<{ open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }> = ({ open, setOpen }) => {
    const dispatch = useDispatch()
    const breadcrumbList = useSelector((state: RootState) => state.fileManager.breadCrumbs)
    const [formFields, setFormFields] = useState<any>({})

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        maxCount: 3,
        listType: "picture-card",
        className: "mb-3",

        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const handleFirebaseUpload = () => {
        console.log(formFields["images"])

        const folderBreadcrumb = breadcrumbList.length === 0 ? '' : breadcrumbList.join('/') + '/';
        formFields["images"].fileList.forEach((file: any) => {
            const storageRef = ref(storage, `${folderBreadcrumb}${file.name}`)

            uploadBytes(storageRef, file.originFileObj).then((snapshot) => {
                message.success(`${file.name} isimli dosya başarıyla yüklendi.`);
                fetchFileManagerData(dispatch, breadcrumbList)
                setOpen(false)
            }).catch((error) => {
                message.error(`${file.name} isimli dosya yüklenirken bir sorun oluştu!`);
            })
        })
    }
    return (
        <Modal title="Resim Yükle" centered className='rounded-md' open={open} onCancel={() => setOpen(false)} footer={[

            <div key={"addFileActions"} className="flex justify-end gap-2">
                <HButton theme='GhostDefault' size='Small' onClick={() => setOpen(false)}>Vazgeç</HButton>
                <HButton type='submit' theme='Success' size='Small' disabled={formFields["images"]?.fileList?.length === 0} onClick={handleFirebaseUpload}>Yükle</HButton>
            </div>]}>
            <Form
                labelWrap
                layout="vertical"
                initialValues={{
                    folderLocation: '/',
                }}

                onFieldsChange={(changedFields, allFields) => {
                    const fields: any = {};
                    allFields.forEach((field) => {
                        fields[field.name.toString()] = field.value;
                    })
                    setFormFields(fields);

                }}
            >
                <Form.Item name="images" valuePropName='images'>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Tıkla yada sürükle bırak</p>
                        <p className="ant-upload-hint">
                            Buraya tıklayarak <b>bulunduğun dizine</b> resim seçebilir yada sürükleyip bırakabilirsiniz
                        </p>
                    </Dragger>
                </Form.Item>
            </Form>


        </Modal>
    )
}

export default AddImageModal