import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

export const SearchInput: React.FC = () => {
  const onSearch = (value: any) => {
    console.log(value);
  };
  return (
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
  );
};
