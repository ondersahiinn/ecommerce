import React, { useState } from 'react';
import { ArrowIcon, UserIcon } from '../icons'
import { Button, Dropdown, Menu } from 'antd';
export const MyAccount: React.FC = () => {
  const hoverButton = (e: Boolean) => {
    if (e) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
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
          key: '5',
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
      <Button className='my-account z-50'>
        <UserIcon className="w-5 h-5 fill-secondary-buttonGray" />
        <div className='flex flex-col flex-start'>
          <div className='text-secondary-darkGray font-bold text-sm leading-none'>Hesabım</div>
          <div className='text-[10px] text-secondary-darkGray w-16 line-clamp-1'>Berkin Oktay</div>
        </div>
        <ArrowIcon className="w-4 h-2 fill-secondary-buttonGray" />
      </Button>
    </Dropdown>

    {/* <details className='group h-full w-40 relative' onClick={() => document.body.classList.add('modal-open')}>
      <summary className='my-account flex items-center gap-3 border-2 border-secondary-buttonGray bg-white px-3 py-2 rounded-md cursor-pointer z-50' onMouseLeave={() => console.log("s3x on the beach")}>
        <UserIcon className="w-5 h-5 fill-secondary-buttonGray" />
        <div className='flex flex-col flex-start'>
          <div className='text-secondary-darkGray font-bold text-sm leading-none'>Hesabım</div>
          <div className='text-[10px] text-secondary-darkGray w-16 line-clamp-1'>Berkin Oktay</div>
        </div>
        <ArrowIcon className="w-4 h-2 fill-secondary-buttonGray" />
      </summary>

      <div className="p-4 mt-2 bg-white absolute left-auto right-0 w-64 rounded-lg shadow-md border border-gray-200" >
        <div className="deneme flex flex-col max-h-[440px] gap-3">
          <div className="text-sm font-semibold text-secondary-darkGray">
            Konumunuzu Belirleyin
          </div>
          <div className="text-secondary-lightDarkGray text-xs w-full">
            Adresinizi veya konum bilgilerinizi seçerek özel hizmetleri
            görebilirsiniz.
          </div>
        </div>
      </div>
    </details> */}

  </div>
};
