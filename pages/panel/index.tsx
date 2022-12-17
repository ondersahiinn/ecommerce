import { adminCheckAuth } from "@utils/session";

export const Panel: React.FC = (props:any) => {
    console.log('props',props)
    return (
        <>
            <div>
                Panel
            </div>
        </>
    )
}
Panel.displayName = 'PanelPage'
export default Panel;
export const getServerSideProps = adminCheckAuth({});