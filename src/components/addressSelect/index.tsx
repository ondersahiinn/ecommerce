import { Button, Form, Input, Select } from 'antd';
import React from 'react';

const { Option } = Select;
export const AddressSelect = () => {
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
        <Button
          htmlType="submit"
          className="w-full !bg-primary-base !hover:bg-primary-darken !font-semibold  !text-sm  !p-2 !text-white !outline-0 !h-10 !rounded-lg !transform !transition-colors"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
