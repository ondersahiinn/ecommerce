import React, { useState } from 'react';
import { ArrowIcon, UserIcon } from '../icons'
import { Button, Popover } from 'antd';
export const MyAccount: React.FC = () => {

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return <div>
    <Popover content={content} trigger="hover" placement='bottom' getPopupContainer={() => document.body} zIndex={999}>
      <Button className='my-account z-50'>
        <UserIcon className="w-5 h-5 fill-secondary-buttonGray" />
        <div className='flex flex-col flex-start'>
          <div className='text-secondary-darkGray font-bold text-sm leading-none'>Hesabım</div>
          <div className='text-[10px] text-secondary-darkGray w-16 line-clamp-1'>Berkin Oktay</div>
        </div>
        <ArrowIcon className="w-4 h-2 fill-secondary-buttonGray" />
      </Button>
      <div className='bgcover'></div>

    </Popover>
    {/* <details className='group h-full w-40 relative'>
      <summary className='flex items-center gap-3 border-2 border-secondary-buttonGray bg-white px-3 py-2 rounded-md cursor-pointer z-50'>
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
      <div className='bgcover'></div>
    </details> */}

  </div>
};
