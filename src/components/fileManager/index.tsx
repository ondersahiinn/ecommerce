import React from 'react'
import { Modal } from "antd";
import {
    FolderAddFilled,
    FileImageFilled
} from '@ant-design/icons';

import HButton from '@components/HButton';

import FilesSide from './FilesSide';
import OptionsSide from './OptionsSide';
interface FileManagerProps {
    open: boolean,
    onCancel: () => void
}
const FileManager: React.FC<FileManagerProps> = ({ open, onCancel }) => {
    return (
        <>
            <Modal title="Dosya Yöneticisi" bodyStyle={{
                borderTop: "1px solid #e8e8e8",
                borderBottom: "1px solid #e8e8e8",
            }} width={1200} open={open} onCancel={onCancel} footer={null} >
                <div className="flex items-center gap-2 py-2 border-b border-gray-[#e8e8e8]">
                    <HButton theme="BorderedDefault" size="Tiny" icon={<FolderAddFilled style={{ fontSize: "18px" }} />} iconPosition="left">Yeni Klasör</HButton>
                    <HButton theme="BorderedDefault" size="Tiny" icon={<FileImageFilled style={{ fontSize: "18px" }} />} iconPosition="left">Resim Yükle</HButton>
                </div>
                <div className="flex items-stretch">
                    <div className="flex-1 py-2 border-r border-gray-[#e8e8e8]">
                        <FilesSide />

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