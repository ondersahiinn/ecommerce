import 'antd/dist/antd.css';
import { Layout,  Breadcrumb } from 'antd';
import { useState } from 'react';

const Panel = () => {
    const { Content, Footer, Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = (collapsed : any) => {
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
                    <div className="flex items-center justify-center py-3">
                        <img src={'https://ondersahin.com.tr//images/onderlogo.png?auto=format&fit=max&w=256'} alt="" className="max-w-full max-h-12" />
                    </div>
                    {/* <Menu
                        theme="dark"
                        defaultSelectedKeys={['/panel']}
                        selectedKeys={[window.location.pathname]}
                        mode="inline"
                        items={items}
                    /> */}
                </Sider>
                <Layout className="site-layout">
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <Breadcrumb
                            style={{
                                margin: '16px 0',
                            }}
                        >
                            <Breadcrumb.Item>Panel</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                minHeight: 360,
                            }}
                        >
                            
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Ecommerce @React Team
                    </Footer>
                </Layout>
            </Layout>
        </>
    )
}

export default Panel;