import React, { useEffect, useState } from 'react'
import { Modal, Pagination } from "antd";
import {
    FolderAddFilled,
    FileImageFilled
} from '@ant-design/icons';

import HButton from '@components/HButton';

import FilesSide from './FilesSide';
import OptionsSide from './OptionsSide';
import axios from 'axios';
interface FileManagerProps {
    open: boolean,
    setOpen: any
}
const FileManager: React.FC<FileManagerProps> = ({ open, setOpen }) => {
    const [imageArray, setImageArray] = useState([])

    const perPageItems = 50;
    const [currentPage, setCurrentPage] = useState(1);
    const [minShow, setMinShow] = useState(0);
    const [maxShow, setMaxShow] = useState(perPageItems);

    const paginationChange = (page: number, pageSize?: number) => {
        setCurrentPage(page);
        setMinShow((page - 1) * pageSize!);
        setMaxShow(page * pageSize!);
    }

    useEffect(() => {
        axios.get("https://picsum.photos/v2/list?page=2&limit=100").then(res => {
            const justLinks = res.data.map((item: any) => item.download_url)
            setImageArray(justLinks)
        })
    }, [])
    return (
        <>
            <Modal title="Dosya Yöneticisi" className='rounded-md' bodyStyle={{
                borderTop: "1px solid #e8e8e8",
                borderBottom: "1px solid #e8e8e8",
                paddingTop: "0px",
                paddingBottom: "0px"
            }} width={1200} open={open} onCancel={() => setOpen(false)} footer={null} >
                <div className="flex items-center gap-2 py-2 border-b border-gray-[#e8e8e8]">
                    <HButton theme="BorderedDefault" size="Tiny" icon={<FolderAddFilled style={{ fontSize: "18px" }} />} iconPosition="left">Yeni Klasör</HButton>
                    <HButton theme="BorderedDefault" size="Tiny" icon={<FileImageFilled style={{ fontSize: "18px" }} />} iconPosition="left">Resim Yükle</HButton>
                </div>
                <div className="flex items-stretch">
                    <div className="flex-1 py-2 border-r border-gray-[#e8e8e8]">
                        <FilesSide imageList={imageArray} minShow={minShow} maxShow={maxShow} />
                        <Pagination className="mt-4" defaultCurrent={1} total={imageArray.length} pageSize={perPageItems} onChange={paginationChange} showSizeChanger={false} />
                    </div>
                    <div className="w-72 p-2">
                        <OptionsSide />
                    </div>

                </div>
            </Modal>
        </>

    )
}

export default FileManager