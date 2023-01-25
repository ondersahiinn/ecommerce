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
import PanelHeader from "@components/panel/panelHeader";
import { useRouter } from "next/router";


const CategoriesPage: React.FC = () => {
    const [openFileManager, setOpenFileManager] = useState(false)
    const status = useSelector((state: RootState) => state.categories.status)
    const dispatch = useDispatch()
    const { push } = useRouter();



    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories())
        }
    }, [status, dispatch])

    const handleAddImage = () => {
        console.log('asd')
    }

    return (
        <>
            <PanelHeader title="Yeni Kategori Ekle" >
                <HButton theme="Secondary" onClick={() => push('/panel/categories/add')}>Yeni Kategori Ekle</HButton>
            </PanelHeader>
            <CategoryTable />
            <div className="flex items-center justify-center">
                <HButton theme="Secondary" onClick={() => setOpenFileManager(true)}>Galeriden Seç</HButton>
                <FileManager handleAddImage={handleAddImage} />
            </div>
        </>
    )
}
CategoriesPage.displayName = "PanelPage"
export default CategoriesPage;
export const getServerSideProps = adminCheckAuth({});