import React, { useEffect, useState } from 'react'
import { Modal, Pagination, Upload, Form, Input } from "antd";
import {
    FolderAddFilled,
    FileImageFilled,
} from '@ant-design/icons';

import HButton from '@components/HButton';

import FilesSide from './FilesSide';
import OptionsSide from './OptionsSide';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { useDispatch } from 'react-redux';
import { fetchFiles } from '@redux/slices/fileManager';
import AddImageModal from './AddImageModal';
import AddFolderModal from './AddFolderModal';
interface FileManagerProps {
    open: boolean,
    setOpen: any
}
const FileManager: React.FC<FileManagerProps> = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const filesStatus = useSelector((state: RootState) => state.fileManager.status)
    const files = useSelector((state: RootState) => state.fileManager.files)

    const perPageItems = 50;
    const [showNewFolderModal, setShowNewFolderModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [minShow, setMinShow] = useState(0);
    const [maxShow, setMaxShow] = useState(perPageItems);
    const [showNewFileModal, setShowNewFileModal] = useState(false);

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
            <AddImageModal open={showNewFileModal} setOpen={setShowNewFileModal} />
            <AddFolderModal open={showNewFolderModal} setOpen={setShowNewFolderModal} />
        </>

    )
}

export default FileManager