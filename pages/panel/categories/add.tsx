import CategoryTable from "@components/panel/categories/table";
import RinchTextEditor from "@components/rinchTextEditor";
import { adminCheckAuth } from "@utils/session";
import dynamic from "next/dynamic";
import { useState } from "react";


const CategoryAdd: React.FC = () => {
    const [value, setValue] = useState('')

    var RinchTextEditor = dynamic(() => import("@components/rinchTextEditor"), {
        ssr: false, loading: () => <p>Loading ...</p>
    })
    return (
        <>
            <RinchTextEditor type='categories' value={value} setValue={setValue}/>
        </>
    )
}
CategoryAdd.displayName = "PanelPage"
export default CategoryAdd;
export const getServerSideProps = adminCheckAuth({});