import { InboxOutlined } from '@ant-design/icons';
import HButton from '@components/HButton'
import { Form, Modal, Select, UploadProps, Upload, message } from 'antd'
import React, { Dispatch, SetStateAction, useState } from 'react'
const { Dragger } = Upload;
const AddImageModal: React.FC<{ open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }> = ({ open, setOpen }) => {
    const [formFields, setFormFields] = useState<any>({})

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        maxCount: 3,
        listType: "picture-card",
        className: "mb-3",
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
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return (
        <Modal title="Resim Yükle" centered className='rounded-md' open={open} onCancel={() => setOpen(false)} footer={[

            <div key={"addFileActions"} className="flex justify-end gap-2">
                <HButton theme='GhostDefault' size='Small' onClick={() => setOpen(false)}>Vazgeç</HButton>
                <HButton theme='Success' size='Small' disabled={formFields["deneme"]?.fileList?.length === 0} onClick={() => setOpen(false)}>Yükle</HButton>
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
                    console.log(fields);
                }}
            >
                <Form.Item name="deneme" valuePropName='images'>
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