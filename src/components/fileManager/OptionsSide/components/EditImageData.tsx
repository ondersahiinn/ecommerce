import HButton from '@components/HButton';
import { Button, Col, Form, Input, InputNumber, Row, Select, Switch } from 'antd'
import React from 'react'
const { Option } = Select
const EditImageData = () => {
    const selectBefore = (
        <Form.Item name="protocol" noStyle>
            <Select defaultValue="http://">
                <Option value="http://">http://</Option>
                <Option value="https://">https://</Option>
            </Select>
        </Form.Item>

    );
    return (
        <Form
            layout="vertical"
            labelWrap
            onFinish={(values: any) => console.log(values)}
        >


            <Form.Item label="Resim Kaynağı" name="url">
                <Input placeholder='Örn: www.example.com' size='large' />
            </Form.Item>
            <Form.Item label="Başlık (Alt Etiketi)" name="alt">
                <Input placeholder='Örn: Doğa Resmi' size='large' />
            </Form.Item>

            <Input.Group>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="Genişlik" name={"genislik"}>
                            <InputNumber size='large' className="w-full" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Yükseklik" name={"yukseklik"}>
                            <InputNumber size='large' className="w-full" />
                        </Form.Item>
                    </Col>
                </Row>
            </Input.Group>
            <Form.Item label="Bağlantı Linki" name="yonlendirme">
                <Input addonBefore={selectBefore} placeholder='Örn: www.example.com' size='large' />
            </Form.Item>

            <Form.Item label="Yeni Sekmede Aç" name={"yeniSekme"} valuePropName="checked" colon={false} className="deneme">
                <Switch className='bg-[#ff6000]' />
            </Form.Item>

            <Form.Item>
                <HButton type='submit' theme='Primary' className="w-full"> Ekle</HButton>
            </Form.Item>
        </Form>
    )
}

export default EditImageData