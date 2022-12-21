import HButton from "@components/HButton";
import CategoryTable from "@components/panel/categories/table";
import { adminCheckAuth } from "@utils/session";
import { Image, Modal, Segmented } from "antd";
import { useEffect, useState } from "react";
import {
    FolderAddFilled,
    FileImageFilled
} from '@ant-design/icons';
import classNames from "classnames";
import axios from "axios";
import FileManager from "@components/fileManager";

const CategoriesPage: React.FC = () => {

    return (
        <>
            <CategoryTable />

            <div className="flex items-center justify-center">
                <FileManager />
            </div>
        </>
    )
}
CategoriesPage.displayName = "PanelPage"
export default CategoriesPage;
export const getServerSideProps = adminCheckAuth({});