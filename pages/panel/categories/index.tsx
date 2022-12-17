import CategoryTable from "@components/panel/categories/table";
import { adminCheckAuth } from "@utils/session";


 const CategoriesPage: React.FC  = () => {

    return (
        <>
            <CategoryTable />
        </>
    )
}
CategoriesPage.displayName = "PanelPage"
export default CategoriesPage;
export const getServerSideProps = adminCheckAuth({});