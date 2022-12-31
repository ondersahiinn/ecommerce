import { InfoCircleOutlined } from '@ant-design/icons';
import HButton from '@components/HButton'
import { RootState } from '@redux/reducers';
import { storage } from '@utils/firebase';
import { fetchFileManagerData } from '@utils/functions/fetchFileManagerData';
import { Form, Input, Modal } from 'antd'
import { ref, uploadString } from 'firebase/storage';
import React, { Dispatch, SetStateAction } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const AddFolderModal: React.FC<{ open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }> = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const breadcrumbList = useSelector((state: RootState) => state.fileManager.breadCrumbs);
    const [formFields, setFormFields] = React.useState<any>({});

    const handleAddFolder = async () => {
        const folderBreadcrumb = breadcrumbList.length === 0 ? '' : breadcrumbList.join('/') + '/';

        const newFolder = ref(storage, `${folderBreadcrumb}${formFields?.folderName}/`);
        const ghostFile = ref(newFolder, '.ghostFile');
        await uploadString(ghostFile, '')
        fetchFileManagerData(dispatch, breadcrumbList)

        setOpen(false);

    }
    return (
        <Modal title="Dosya Ekle" centered className='rounded-md' open={open} onCancel={() => setOpen(false)} footer={[

            <div key={"addFileActions"} className="flex justify-end gap-2">
                <HButton theme='GhostDefault' size='Small' onClick={() => setOpen(false)}>Vazgeç</HButton>
                <HButton theme='Success' size='Small' disabled={!formFields["folderName"]} onClick={handleAddFolder}>Yükle</HButton>
            </div>

        ]}>
            <Form labelWrap layout="vertical" onFieldsChange={(changedFields, allFields) => {
                const fields: any = {};
                allFields.forEach((field) => {
                    fields[field.name.toString()] = field.value;
                })
                setFormFields(fields);
            }}>

                <Form.Item label="Klasör Adı" name="folderName" rules={[{ required: true, message: 'Klasör adı boş bırakılamaz!' }]}
                    tooltip={{ title: 'Bulunduğun dizine belirlediğin isimle yeni bir dosya oluşturur.', icon: <InfoCircleOutlined /> }}
                >
                    <Input placeholder="Örn: Kategori Resimleri" size='large' className='rounded-md' />
                </Form.Item>

            </Form>


        </Modal>
    )
}

export default AddFolderModal