import { Login } from "@components/index";
import { NextApiRequest } from "next";

const PanelLogin = () => {

    return (
        <>
            <div className="p-5 border-b-2 flex justify-between">
                <span>Yönetim Paneli</span>
                <span className="text-red-600">React Team</span>
            </div>
            <div className="flex justify-center items-center flex-row">
                <div className="w-4/12 mt-10">
                    <Login />
                </div>
            </div>

        </>
    )
}
export default PanelLogin;