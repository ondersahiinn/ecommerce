import React, { useEffect, useState } from 'react'
import { Modal, Pagination, Upload, Form, Input, Breadcrumb, Spin } from "antd";
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
import { setBreadcrumb } from '@redux/slices/fileManager';
import AddImageModal from './AddImageModal';
import AddFolderModal from './AddFolderModal';
import classNames from 'classnames';
import { formatBytes } from '@utils/functions/imageFormatSize';

interface FileManagerProps {
    open: boolean,
    setOpen: any
}
const FileManager: React.FC<FileManagerProps> = ({ open, setOpen }) => {
    const dispatch = useDispatch();

    const breadCrumbList = useSelector((state: RootState) => state.fileManager.breadCrumbs)
    const filesList = useSelector((state: RootState) => state.fileManager.filesList)

    const [showNewFolderModal, setShowNewFolderModal] = useState(false);
    const [showNewFileModal, setShowNewFileModal] = useState(false);

    const totalFilesSize = filesList.reduce((acc, item) => {
        return acc + item.size
    }
        , 0)

    const handleBreadCrumbClick = (folderName: string) => {
        const index = breadCrumbList.indexOf(folderName)
        dispatch(setBreadcrumb(breadCrumbList.slice(0, index + 1)))
    }


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
                        <FilesSide />
                        {/* <Pagination className="mt-4 peer/li:bg-red-300" defaultCurrent={1} total={files.length} pageSize={perPageItems} onChange={paginationChange} showSizeChanger={false} /> */}
                    </div>
                    <div className="w-72 p-2 border-l border-gray-[#e8e8e8]">
                        <OptionsSide />
                    </div>

                </div>
                <div className='py-2 flex items-center border-t border-gray-[#e8e8e8]'>
                    {!!totalFilesSize && <span>Boyut: {formatBytes(totalFilesSize)}</span>}
                </div>
            </Modal>
            <AddImageModal open={showNewFileModal} setOpen={setShowNewFileModal} />
            <AddFolderModal open={showNewFolderModal} setOpen={setShowNewFolderModal} />
        </>

    )
}

export default FileManager