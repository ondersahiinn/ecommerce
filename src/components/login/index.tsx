import React from 'react'
import { Button, Checkbox, Form, Input, Tabs } from 'antd';
import axios from 'axios';
const { TabPane } = Tabs;
export const Login: React.FC = () => {

    const onFinish = (values: any) => {
        axios.post('/api/user/login', values).then(res => {
            console.log('Success:', res);
        })
            
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (key: string) => {
        console.log(key);
    };

    return (
        <Tabs defaultActiveKey="1" type='line' onChange={onChange}  >
            <TabPane tab="Giriş Yap" key="1"  >
                <Form
                    name="login"
                    wrapperCol={{ span: 6 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder="Email" className='p-3 rounded-lg text-md bg-[#eeeeee]' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" className='login-input-password p-3 rounded-lg text-md bg-[#eeeeee]' />
                    </Form.Item>

                    {/* <Form.Item name="remember" valuePropName="checked" >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}
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
                <Form
                    name="register"
                    wrapperCol={{ span: 6 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your fullname!' }]}
                    >
                        <Input placeholder="Fullname" className='p-3 rounded-lg text-md bg-[#eeeeee]' />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder="Email" className='p-3 rounded-lg text-md bg-[#eeeeee]' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" className='login-input-password p-3 rounded-lg text-md bg-[#eeeeee]' />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="Confirm Password" className='login-input-password p-3 rounded-lg text-md bg-[#eeeeee]' />
                    </Form.Item>
                    <Form.Item
                    // name="Login_Button"
                    // rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Button htmlType="submit" className='bg-primary-base text-white w-full flex justify-center  p-6  rounded-lg  text-md items-center'>
                            Kayıt Ol
                        </Button>
                    </Form.Item>
                </Form>
            </TabPane>
        </Tabs>
    )
}

