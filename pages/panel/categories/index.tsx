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
import { RootState } from "@redux/reducers"
import { fetchCategories } from "@redux/slices/categories"
import { addProduct } from "@redux/slices/product"
import { useDispatch, useSelector } from "react-redux"

const CategoriesPage: React.FC = () => {
    const [openFileManager, setOpenFileManager] = useState(false)
    const status = useSelector((state: RootState) => state.categories.status)
    const dispatch = useDispatch()


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories())
        }
    }, [status, dispatch])
    return (
        <>
            <CategoryTable />

            <div className="flex items-center justify-center">
                <HButton theme="Secondary" onClick={() => setOpenFileManager(true)}>Galeriden Seç</HButton>
                <FileManager open={openFileManager} setOpen={setOpenFileManager} />
            </div>
        </>
    )
}
CategoriesPage.displayName = "PanelPage"
export default CategoriesPage;
export const getServerSideProps = adminCheckAuth({});