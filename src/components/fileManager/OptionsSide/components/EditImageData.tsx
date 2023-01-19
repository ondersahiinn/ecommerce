import HButton from '@components/HButton';
import { RootState } from '@redux/reducers';
import { Col, Form, Input, InputNumber, Row, Switch } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


interface IProps {
    handleAddImage: () => void
}

const EditImageData = ({ handleAddImage }: IProps) => {
    const [form] = Form.useForm()
    const [showAnchorForm, setShowAnchorForm] = useState(false)
    const selectedImage = useSelector((state: RootState) => state.fileManager.selectedImage)

    console.log('selectedImage', selectedImage)


    useEffect(() => {
        form.setFieldsValue({
            imageURL: selectedImage?.url
        })
    }, [selectedImage])

    return (<>
        <Form
            form={form}
            layout="vertical"
            labelWrap
            onFinish={(values: any) => console.log(values)}
            initialValues={{
                link: 'https://',
                newTab: false,
            }}
        >
            <Form.Item label="Resim Kaynağı" name="imageURL" rules={[
                { type: 'url', message: 'Geçerli bir URL giriniz.' },
            ]}>
                <Input placeholder='Örn: www.example.com' size='large' className='rounded-md' />
            </Form.Item>
            <Form.Item label="Başlık (Alt Etiketi)" name="alt">
                <Input placeholder='Örn: Doğa Resmi' size='large' className='rounded-md' />
            </Form.Item>

            <Input.Group>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="Genişlik" name={"width"}>
                            <InputNumber size='large' className="w-full rounded-md" controls={false} type="number" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Yükseklik" name={"height"}>
                            <InputNumber size='large' className="w-full rounded-md" controls={false} type="number" />
                        </Form.Item>
                    </Col>
                </Row>
            </Input.Group>
            <Form.Item label="Bağlantı Ekle" valuePropName='checked'>
                <Switch className='bg-[#ffbf99] aria-checked:bg-[#ff6000]' checked={showAnchorForm} onChange={(checked: boolean) => setShowAnchorForm(checked)} />
            </Form.Item>
            {showAnchorForm && <>
                <Form.Item label="Bağlantı Linki" name="link" >
                    <Input placeholder='Örn: www.example.com' size='large' />
                </Form.Item>

                <Form.Item label="Yeni Sekmede Aç" name={"newTab"} valuePropName="checked">
                    <Switch className='bg-[#ffbf99] aria-checked:bg-[#ff6000]' />
                </Form.Item>
            </>}


            <Form.Item>
                <HButton type='submit' onClick={handleAddImage} theme='Success' className="w-full">Resmi Ekle</HButton>
            </Form.Item>
        </Form>


    </>
    )
}

export default EditImageData