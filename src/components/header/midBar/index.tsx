import { Logo, SearchInput, AddressLocation, MyAccount, Cart } from '@components';
import React, { FC } from 'react';
import 'antd/dist/antd.css';
export const MidBar: FC = () => {
  return (
    <div className="flex items-stretch">
      <Logo className="w-64 flex items-center" />
      <SearchInput />
      <div className="ml-4 flex items-center gap-3">
        <AddressLocation />
        <MyAccount />
        <Cart />
      </div>
    </div>
  );
};
