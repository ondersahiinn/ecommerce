import { FC } from 'react';
import { TopBar, MidBar, Menu } from '@components';

export const Header: FC = () => {
  return (
    <div className="flex flex-col max-w-7xl w-full mx-auto">
      <TopBar />
      <MidBar />
      <Menu />
    </div>
  );
};
