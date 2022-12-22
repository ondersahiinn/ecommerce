import React, { useEffect, useState } from 'react'
import { Button, Modal, Pagination, Upload, UploadProps, message, Select, Form, Input } from "antd";
import {
    FolderAddFilled,
    FileImageFilled,
    UploadOutlined,
    InboxOutlined
} from '@ant-design/icons';

import HButton from '@components/HButton';

import FilesSide from './FilesSide';
import OptionsSide from './OptionsSide';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { useDispatch } from 'react-redux';
import { fetchFiles } from '@redux/slices/fileManager';
const { Dragger } = Upload;
interface FileManagerProps {
    open: boolean,
    setOpen: any
}
const FileManager: React.FC<FileManagerProps> = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const filesStatus = useSelector((state: RootState) => state.fileManager.status)
    const files = useSelector((state: RootState) => state.fileManager.files)

    const perPageItems = 50;
    const [showNewFileModal, setShowNewFileModal] = useState(false);
    const [showNewFolderModal, setShowNewFolderModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [minShow, setMinShow] = useState(0);
    const [maxShow, setMaxShow] = useState(perPageItems);

    const paginationChange = (page: number, pageSize?: number) => {
        setCurrentPage(page);
        setMinShow((page - 1) * pageSize!);
        setMaxShow(page * pageSize!);
    }

    useEffect(() => {
        if (filesStatus === "idle") {
            dispatch(fetchFiles())
        }
    }, [dispatch, filesStatus])
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
        <>
            <Modal title="Dosya Yöneticisi" className='rounded-md' bodyStyle={{
                borderTop: "1px solid #e8e8e8",
                borderBottom: "1px solid #e8e8e8",
                paddingTop: "0px",
                paddingBottom: "0px"
            }} width={1200} open={open} onCancel={() => setOpen(false)} footer={null} >
                <div className="flex items-center gap-2 py-2 border-b border-gray-[#e8e8e8]">
                    <HButton theme="BorderedDefault" size="Tiny" icon={<FolderAddFilled style={{ fontSize: "18px" }} />} iconPosition="left" onClick={() => setShowNewFolderModal(true)}>Yeni Klasör</HButton>
                    <HButton theme="BorderedDefault" size="Tiny" icon={<FileImageFilled style={{ fontSize: "18px" }} />} iconPosition="left" onClick={() => setShowNewFileModal(true)}>Resim Yükle</HButton>
                </div>
                <div className="flex items-stretch">
                    <div className="flex-1 py-2 border-r border-gray-[#e8e8e8]">
                        <FilesSide minShow={minShow} maxShow={maxShow} />
                        <Pagination className="mt-4 peer/li:bg-red-300" defaultCurrent={1} total={files.length} pageSize={perPageItems} onChange={paginationChange} showSizeChanger={false} />
                    </div>
                    <div className="w-72 p-2">
                        <OptionsSide />
                    </div>

                </div>
            </Modal>
            <Modal title="Resim Yükle" centered className='rounded-md' open={showNewFileModal} onCancel={() => setShowNewFileModal(false)} footer={[

                <div key={"addFileActions"} className="flex justify-end gap-2">
                    <HButton theme='Danger' size='Small' onClick={() => setShowNewFileModal(false)}>İptal</HButton>
                    <HButton theme='Success' size='Small' disabled onClick={() => setShowNewFileModal(false)}>Yükle</HButton>
                </div>

            ]}>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Tıkla yada sürükle bırak</p>
                    <p className="ant-upload-hint">
                        Buraya tıklayarak resim seçebilir yada sürükleyip bırakabilirsiniz
                    </p>
                </Dragger>

            </Modal>
            <Modal title="Dosya Ekle" centered className='rounded-md' open={showNewFolderModal} onCancel={() => setShowNewFolderModal(false)} footer={[

                <div key={"addFileActions"} className="flex justify-end gap-2">
                    <HButton theme='Danger' size='Small' onClick={() => setShowNewFolderModal(false)}>İptal</HButton>
                    <HButton theme='Success' size='Small' disabled onClick={() => setShowNewFolderModal(false)}>Yükle</HButton>
                </div>

            ]}>
                <Form labelWrap layout="vertical">
                    <Form.Item label="Klasör Yeri" name="folderLocation" rules={[{ required: true, message: 'Klasör yeri boş bırakılamaz!' }]}>
                        <Select
                            defaultValue={"/"}
                            showSearch
                            size='large'
                            className='w-full'
                            placeholder="Eklemek İstediğin Dizini Seç"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={[
                                {
                                    value: '/',
                                    label: 'Ana Dizin',
                                },
                                {
                                    value: '2',
                                    label: 'Resimlerim',
                                },
                                {
                                    value: '3',
                                    label: 'Ürünlerim',
                                },
                                {
                                    value: '4',
                                    label: 'Identified',
                                },
                                {
                                    value: '5',
                                    label: 'Resolved',
                                },
                                {
                                    value: '6',
                                    label: 'Cancelled',
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Klasör Adı" name="folderName" rules={[{ required: true, message: 'Klasör adı boş bırakılamaz!' }]}>
                        <Input placeholder="Klasör Adı" size='large' className='rounded-md' />
                    </Form.Item>

                </Form>


            </Modal>
        </>

    )
}

export default FileManager