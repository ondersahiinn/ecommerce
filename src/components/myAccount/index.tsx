import React, { useState } from 'react';
import { ArrowIcon, UserIcon } from '../icons'
import { Button, Dropdown, Menu } from 'antd';
export const MyAccount: React.FC = () => {
  const [active, setActive] = useState(false);
  const hoverButton = (e: Boolean) => {
    if (e) {
      setActive(true);
    } else {
      setActive(false);
    }
  }
  const menu = (
    <Menu className='my-account-list px-0 pt-4 pb-6 bg-white rounded w-52'
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              Giriş Yap
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com" className='border-b border-[#e5e5e5] mb-4'>
              Üye Ol
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Siparişlerim
            </a>
          ),
        },
        {
          key: '4',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Sana Özel
            </a>
          ),
        },
        {
          key: '5',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Hepsipay Cüzdanım
            </a>
          ),
        },
        {
          key: '6',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Kullanıcı Bilgilerim
            </a>
          ),
        },
        {
          key: '7',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com" className='border-b border-[#e5e5e5] mb-4'>
              Değerlendirmelerim
            </a>
          ),
        },
        {
          key: '8',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Beğendiklerim
            </a>
          ),
        },
        {
          key: '9',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com" className='border-b border-[#e5e5e5] mb-4'>
              Tüm Listelerim
            </a>
          ),
        },
        {
          key: '10',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com" className='border-b border-[#e5e5e5] mb-4'>
              Kuponlarım
            </a>
          ),
        },
        {
          key: '11',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Destek Taleplerim
            </a>
          ),
        },
      ]}
    />
  );
  return <div>

    <Dropdown overlay={menu} placement="bottom" arrow onVisibleChange={hoverButton}>
      <Button className='my-account z-30'>
        <UserIcon className="w-5 h-5 fill-secondary-buttonGray" />
        <div className='flex flex-col flex-start'>
          <div className='text-secondary-darkGray font-bold text-sm leading-none'>Hesabım</div>
          <div className='text-[10px] text-secondary-darkGray w-16 line-clamp-1'>Berkin Oktay</div>
        </div>
        <ArrowIcon className="w-4 h-2 fill-secondary-buttonGray" />
      </Button>
    </Dropdown>
    <div className={`overlay fixed inset-0 z-20 w-full h-full bg-black opacity-40 ${active ? 'visible' : 'invisible'}`}></div>

  </div>
};
