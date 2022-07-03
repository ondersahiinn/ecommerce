import { FC } from 'react';
import { TopBar, MidBar, Navbar, RainbowLine } from '@components';

export const Header: FC = () => {
  return (
    <div className="flex flex-col w-full z-50 bg-white">
      <div className="max-w-7xl w-full mx-auto pb-4">
        <TopBar />
        <MidBar />
      </div>
      {/* <RainbowLine /> */}
      <Navbar />
    </div>
  );
};
