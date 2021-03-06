import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Thick } from '..';

const { Option } = Select;

export const AddressSelect: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <Form name="control-hooks" onFinish={onFinish}>
      <Form.Item name="il" rules={[{ required: true }]}>
        <Select
          className="searchSelect"
          showSearch
          placeholder="İl seçiniz"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option!.children as unknown as string).includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA!.children as unknown as string)
              .toLowerCase()
              .localeCompare(
                (optionB!.children as unknown as string).toLowerCase()
              )
          }
        >
          <Option value="1">Not Identified</Option>
          <Option value="2">Closed</Option>
          <Option value="3">Communicated</Option>
          <Option value="4">Identified</Option>
          <Option value="5">Resolved</Option>
          <Option value="6">Cancelled</Option>
        </Select>
      </Form.Item>
      <Form.Item name="ilce" rules={[{ required: true }]}>
        <Select
          className="searchSelect"
          showSearch
          placeholder="İlçe seçiniz"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option!.children as unknown as string).includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA!.children as unknown as string)
              .toLowerCase()
              .localeCompare(
                (optionB!.children as unknown as string).toLowerCase()
              )
          }
        >
          <Option value="1">Not Identified</Option>
          <Option value="2">Closed</Option>
          <Option value="3">Communicated</Option>
          <Option value="4">Identified</Option>
          <Option value="5">Resolved</Option>
          <Option value="6">Cancelled</Option>
        </Select>
      </Form.Item>
      <Form.Item name="mahalle" rules={[{ required: true }]}>
        <Select
          className="searchSelect"
          showSearch
          placeholder="Mahalle seçiniz"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option!.children as unknown as string).includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA!.children as unknown as string)
              .toLowerCase()
              .localeCompare(
                (optionB!.children as unknown as string).toLowerCase()
              )
          }
        >
          <Option value="1">Not Identified</Option>
          <Option value="2">Closed</Option>
          <Option value="3">Communicated</Option>
          <Option value="4">Identified</Option>
          <Option value="5">Resolved</Option>
          <Option value="6">Cancelled</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="primary-button">
          Kaydet
        </Button>
      </Form.Item>
    </Form>
  );
};
