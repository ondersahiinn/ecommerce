import { NextApiRequest } from "next";

export const Panel: React.FC = () => {

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

export async function getServerSideProps(req: NextApiRequest) {
    const user = req.session?.user;
    if (!!user && user.admin) {
        return {
            props: {
                user
            }
        }
    }

    else {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
            props: {},
        }
    }
}