import { FC } from 'react';
import { TopBar, MidBar, Menu, RainbowLine } from '@components';

export const Header: FC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="max-w-7xl w-full mx-auto pb-4">
        <TopBar />
        <MidBar />
      </div>
      <RainbowLine />
      <Menu />
    </div>
  );
};
