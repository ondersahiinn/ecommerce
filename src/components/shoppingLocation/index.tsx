import React from 'react';
import { EnvironmentOutlined, DownOutlined } from '@ant-design/icons';
import { AddressRadioGroup } from '..';
export const ShoppingLocation: React.FC = () => {
  return (
    <details className="relative group w-full h-full max-w-xs">
      <summary className="py-1 px-4 h-full flex items-center group-open:bg-secondary-lightestGray list-none rounded-md cursor-pointer">
        <EnvironmentOutlined className="!text-primary-base text-2xl" />
        <div className="ml-3 flex flex-col items-start flex-1">
          <div className="text-sm text-secondary-darkGray font-semibold">
            Konum
          </div>
          <div className="text-xs text-primary-base">Evim</div>
        </div>
        <DownOutlined className="ml-8 text-xs !text-primary-base" />
      </summary>
      <div className="p-4 mt-2 bg-white absolute left-auto right-0 w-64 rounded-lg shadow-md border border-gray-200 ">
        <div className="flex flex-col max-h-[440px] gap-3">
          <div className="text-sm font-semibold text-secondary-darkGray">
            Konumunuzu Belirleyin
          </div>
          <div className="text-secondary-lightDarkGray text-xs w-full">
            Adresinizi veya konum bilgilerinizi seçerek özel hizmetleri
            görebilirsiniz.
          </div>
          <button className="bg-primary-base hover:bg-primary-darken font-semibold text-sm p-2 text-white outline-0 h-10 rounded-lg transform transition-colors">
            Yeni Konum Seç
          </button>
          <div className="flex items-center basis-full text-xs text-secondary-lightDarkGray before:content-[''] before:grow before:h-px before:bg-secondary-extraLightGray before:mx-2 after:content-[''] after:grow after:h-px after:bg-secondary-extraLightGray after:mx-2 ">
            ya da adreslerimden seç
          </div>
          <AddressRadioGroup />
        </div>
      </div>
    </details>
  );
};
