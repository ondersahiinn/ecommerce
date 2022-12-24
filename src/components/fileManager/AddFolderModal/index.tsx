import HButton from '@components/HButton'
import { Form, Input, Modal } from 'antd'
import React, { Dispatch, SetStateAction } from 'react'

const AddFolderModal: React.FC<{ open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }> = ({ open, setOpen }) => {
    const [formFields, setFormFields] = React.useState<any>({});
    return (
        <Modal title="Dosya Ekle" centered className='rounded-md' open={open} onCancel={() => setOpen(false)} footer={[

            <div key={"addFileActions"} className="flex justify-end gap-2">
                <HButton theme='GhostDefault' size='Small' onClick={() => setOpen(false)}>Vazgeç</HButton>
                <HButton theme='Success' size='Small' disabled={!formFields["folderName"]} onClick={() => setOpen(false)}>Yükle</HButton>
            </div>

        ]}>
            <Form labelWrap layout="vertical" onFieldsChange={(changedFields, allFields) => {
                const fields: any = {};
                allFields.forEach((field) => {
                    fields[field.name.toString()] = field.value;
                })
                setFormFields(fields);
            }}>

                <Form.Item label="Klasör Adı" name="folderName" rules={[{ required: true, message: 'Klasör adı boş bırakılamaz!' }]}>
                    <Input placeholder="Örn: Kategori Resimleri" size='large' className='rounded-md' />
                </Form.Item>

            </Form>


        </Modal>
    )
}

export default AddFolderModal