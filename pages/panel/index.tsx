import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Login } from '@components';
import { items } from 'contants';
import PanelLayout from '@components/layout';

export const Panel: React.FC = () => {
    const { Content, Footer, Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = (collapsed: any) => {
        setCollapsed(collapsed);
    };

    return (
        <>
            <PanelLayout>
                <Login />
            </PanelLayout>

        </>
    )
}

export default Panel;