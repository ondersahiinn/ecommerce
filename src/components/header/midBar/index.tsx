import { Logo, SearchInput } from '@components';
import React, { FC } from 'react';
import 'antd/dist/antd.css';
export const MidBar: FC = () => {
  return (
    <div className="flex items-center">
      <Logo className="w-auto h-auto mr-10" />
      <SearchInput />
    </div>
  );
};
