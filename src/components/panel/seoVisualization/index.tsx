import { Col, Row } from "antd";

import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from "react";

const { TextArea } = Input;

const SeoVisualization = () => {
    const [values, setValues] = useState<any>({ slug: '', title: '', description: 'a' });

    const router: any = typeof window !== 'undefined' ? window.location : {}

    const onFinish = (changedFields: any, allFields: any) => {
        setValues(allFields)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    if (typeof window !== 'undefined')
        return (
            <>
                <h2 className="text-xl mb-5">Arama Motoru Optimizasyonu (SEO)</h2>
                <Row>
                    <Col span={12}>

                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            // onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            onValuesChange={onFinish}
                            layout='vertical'
                        >
                            <Form.Item
                                label="Slug"
                                name="slug"
                                rules={[{ required: false, message: 'Please input your username!' }]}
                            >
                                <Input addonBefore="/" showCount />
                            </Form.Item>

                            <Form.Item
                                label="Sayfa Başlığı"
                                name="title"

                                rules={[{ required: false, message: 'Please input your password!' }]}
                            >
                                <Input showCount />
                            </Form.Item>
                            <Form.Item
                                label="Açıklama"
                                name="description"
                                rules={[{ required: false, message: 'Please input your password!' }]}
                            >
                                <TextArea showCount style={{ resize: 'none' }}
                                    rows={3} placeholder="En fazla 220 karakter girebilirsin" maxLength={220} />
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={12} className='px-5'>
                        <label className="">Arama Önizlemesi</label>

                        <div className="border-[1px] p-5 mt-2">

                            <span>{!!router && !!values && (router?.origin + ' / '+ values?.slug)}</span>
                            <h2 className="text-[#1A0DAB] text-2xl">{values?.title}</h2>
                            <p className="text-gray-400">{values?.description}</p>
                        </div>
                    </Col>

                </Row>

            </>
        )
    else {
        return(
            <>Loading</>
        )
    }
}

export default SeoVisualization;