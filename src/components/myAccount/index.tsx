import React from 'react';
import { UserIcon } from './UserIcon';

export const MyAccount: React.FC = () => {
  return <div className='flex items-center gap-3 w-40 border-2 border-secondary-buttonGray bg-white px-3 py-2 rounded-md cursor-pointer'>
    <UserIcon />
    <div className='flex flex-col flex-start'>
      <div className='text-secondary-darkGray font-bold text-sm leading-none'>Hesabım</div>
      <div className='text-[10px] text-secondary-darkGray w-16 line-clamp-1'>Berkin Oktay</div>
    </div>
  </div>;
};
