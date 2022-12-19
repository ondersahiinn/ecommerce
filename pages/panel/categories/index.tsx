import HButton from "@components/HButton";
import CategoryTable from "@components/panel/categories/table";
import { adminCheckAuth } from "@utils/session";
import { Modal } from "antd";


const CategoriesPage: React.FC = () => {

    return (
        <>
            <CategoryTable />

            <div className="flex items-center justify-center">
                <HButton theme="Secondary" >Galeriden Seç</HButton>
                <Modal title="Basic Modal">
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        </>
    )
}
CategoriesPage.displayName = "PanelPage"
export default CategoriesPage;
export const getServerSideProps = adminCheckAuth({});