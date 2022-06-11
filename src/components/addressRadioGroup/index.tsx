import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Space } from 'antd';
export const AddressRadioGroup: React.FC = () => {
  const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
  };
  return (
    <Radio.Group onChange={onChange} defaultValue="a" className="addressRadio">
      <Space direction="vertical" className="w-full">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Space>
    </Radio.Group>
  );
};
