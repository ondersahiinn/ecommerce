import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';

export const Login:React.FC = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            wrapperCol={{ span: 6}}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                
            >
                <Input placeholder="Username" className='p-3 rounded-lg text-md' />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password placeholder="Password" className='p-3 rounded-lg text-md'  />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                // name="Login_Button"
                // rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Button htmlType="submit"  className='bg-primary-base text-white w-full flex justify-center  p-6  rounded-lg  text-md items-center'>
                    Giriş Yap
                </Button>
            </Form.Item>
           
        </Form>
    )
}

