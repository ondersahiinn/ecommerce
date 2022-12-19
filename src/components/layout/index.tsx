import { Layout, Menu } from 'antd';
import { ReactNode, useState } from 'react';
import { Login } from '@components';
import { items } from 'contants';
import Link from 'next/link';

interface IProps {
    children: ReactNode;
}

export const PanelLayout: React.FC<IProps> = (props: IProps) => {
    const { Content, Footer, Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = (collapsed: any) => {
        setCollapsed(collapsed);
    };

    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={onCollapse}
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'sticky',
                        left: 0,
                        top: 0,
                        bottom: 0,
                    }}
                >
               {  /*   <div className="flex items-center justify-center py-3">
                        <Link href='/panel'>
                            <img src={'https://ondersahin¨.com.tr//images/onderlogo.png?auto=format&fit=max&w=256'} alt="" className="max-w-full max-h-12" />
                        </Link>
                    </div>*/}
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        items={items}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Content style={{ margin: '0 16px', }}>
                        <div className="site-layout-background p-[24px] min-h-[360px]">
                            {props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', }}>
                        Ecommerce @React Team
                    </Footer>
                </Layout>
            </Layout>
        </>
    )
}

export default PanelLayout;