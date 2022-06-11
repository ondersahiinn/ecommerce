import React from 'react'
import { Button, Checkbox, Form, Input, Tabs } from 'antd';

const { TabPane } = Tabs;
export const Login: React.FC = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (key: string) => {
        console.log(key);
    };

    return (
            <Tabs defaultActiveKey="1" type='line'  onChange={onChange}  >
                <TabPane tab="Giriş Yap" key="1"  >
                <Form
                name="basic"
                wrapperCol={{ span: 6 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder="Username" className='p-3 rounded-lg text-md bg-[#eeeeee]' />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder="Password" className='login-input-password p-3 rounded-lg text-md bg-[#eeeeee]' />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item
                // name="Login_Button"
                // rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Button htmlType="submit" className='bg-primary-base text-white w-full flex justify-center  p-6  rounded-lg  text-md items-center'>
                        Giriş Yap
                    </Button>
                </Form.Item>
            </Form>
                </TabPane>
                <TabPane tab="Kayıt Ol" key="2">
                    Content of Tab Pane 2
                </TabPane>
            </Tabs>
    )
}

