import PanelLayout from "@components/layout";
import Categories from "@components/panel/categories";
import CategoryTable from "@components/panel/categories/table";


const CategoriesPage = () => {

    return(
        <>
            <PanelLayout>
                <CategoryTable />
            </PanelLayout>
        </>
    )
}

export default CategoriesPage;