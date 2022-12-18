import { ReactNode } from "react"



const PanelHeader = ({ title, children }: { title: string, children: ReactNode }) => {

    return (
        <>
            <div className="bg-slate-400 p-5 my-5 flex justify-between rounded-md">
                {title}
                {children}
            </div>
        </>
    )
}

export default PanelHeader