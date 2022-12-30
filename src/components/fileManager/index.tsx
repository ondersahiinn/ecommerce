import React, { useEffect, useState } from 'react'
import { Modal, Pagination, Upload, Form, Input, Breadcrumb } from "antd";
import {
    FolderAddFilled,
    FileImageFilled,
    HomeOutlined,
    UserOutlined,
} from '@ant-design/icons';

import HButton from '@components/HButton';

import FilesSide from './FilesSide';
import OptionsSide from './OptionsSide';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { useDispatch } from 'react-redux';
import { clearAllData, fetchFiles, setBreadcrumb } from '@redux/slices/fileManager';
import AddImageModal from './AddImageModal';
import AddFolderModal from './AddFolderModal';
import classNames from 'classnames';

interface FileManagerProps {
    open: boolean,
    setOpen: any
}
const FileManager: React.FC<FileManagerProps> = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const filesStatus = useSelector((state: RootState) => state.fileManager.status)
    const breadCrumbList = useSelector((state: RootState) => state.fileManager.breadCrumbs)
    // const files = useSelector((state: RootState) => state.fileManager.files)

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

    const handleBreadCrumbClick = (folderName: string) => {
        const index = breadCrumbList.indexOf(folderName)
        dispatch(setBreadcrumb(breadCrumbList.slice(0, index + 1)))
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
            }} width={1200} open={open} onCancel={() => setOpen(false)} footer={null}>
                <div className="flex flex-col gap-2 py-2 border-b border-gray-[#e8e8e8]">


                    <div className='flex items-center gap-2'>
                        <HButton theme="BorderedDefault" size="Tiny" icon={<FolderAddFilled style={{ fontSize: "18px" }} />} iconPosition="left" onClick={() => setShowNewFolderModal(true)}>Yeni Klasör</HButton>
                        <HButton theme="BorderedDefault" size="Tiny" icon={<FileImageFilled style={{ fontSize: "18px" }} />} iconPosition="left" onClick={() => setShowNewFileModal(true)}>Resim Yükle</HButton>
                    </div>

                </div>
                <div className="flex items-stretch gap-4">

                    <div className="flex-1 py-2 ">
                        <Breadcrumb className='mb-2'>
                            <Breadcrumb.Item className='cursor-pointer hover:text-[#6c84fa] transition-all' onClick={() => dispatch(setBreadcrumb([]))}>
                                <HomeOutlined className='text-lg' />
                                {breadCrumbList.length === 0 && <span className="ant-breadcrumb-separator mx-2">/</span>}

                            </Breadcrumb.Item>

                            {breadCrumbList.map((item, index) => <Breadcrumb.Item
                                key={item}
                                className={classNames({
                                    "leading-7 capitalize text-sm": true,
                                    "cursor-pointer hover:text-[#6c84fa] transition-all": index !== breadCrumbList.length - 1,
                                    "font-semibold": index === breadCrumbList.length - 1
                                })}
                                onClick={() => handleBreadCrumbClick(item)}>
                                <span>{item}</span>
                            </Breadcrumb.Item>)}

                        </Breadcrumb>
                        <FilesSide minShow={minShow} maxShow={maxShow} />
                        {/* <Pagination className="mt-4 peer/li:bg-red-300" defaultCurrent={1} total={files.length} pageSize={perPageItems} onChange={paginationChange} showSizeChanger={false} /> */}
                    </div>
                    <div className="w-72 p-2 border-l border-gray-[#e8e8e8]">
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