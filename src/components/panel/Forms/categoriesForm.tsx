
import React from 'react';
import { Col, Empty, Form, Input, Row, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { changeCategoriesData } from '@redux/slices/categories';

const { Option } = Select;
const CategoriesForm = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = (values: any) => {
        dispatch(changeCategoriesData(values))
        console.log(values);
    };

    return (
        <Form wrapperCol={{ span: 20 }} layout="vertical" form={form} name="control-hooks" onValuesChange={onFinish}>
            <Row>
                <Col span={12}>
                    <Form.Item name="name" label="Kategori Adı" rules={[{ required: true }]}>
                        <Input placeholder='e.g. Aksesuar, Giyim ...' />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="children" label="Ebeveyn Kategori" rules={[{ required: false }]}>
                        <Select
                            notFoundContent={<Empty description="Veri yok"></Empty>}
                            value=''
                            placeholder='Üst Kategorisi'
                            options={[]}
                        />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}

export default CategoriesForm