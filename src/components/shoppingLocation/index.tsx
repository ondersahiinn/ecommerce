import React, { useState } from 'react';
import { EnvironmentOutlined, DownOutlined } from '@ant-design/icons';
import { AddressRadioGroup, AddressSelect } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { changeSelectedLocation } from '@redux/slices/user';

export const ShoppingLocation: React.FC = () => {
  const dispatch = useDispatch();

  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const selectedLocation = useSelector(
    (state: RootState) => state.SelectedLocation.isSelectedLocation
  );
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
          {(!isLogin || selectedLocation) && <AddressSelect />}
          {selectedLocation === true && isLogin ? (
            <React.Fragment>
              <div className="flex items-center basis-full text-xs text-secondary-lightDarkGray before:content-[''] before:grow before:h-px before:bg-secondary-extraLightGray before:mx-2 after:content-[''] after:grow after:h-px after:bg-secondary-extraLightGray after:mx-2 ">
                ya da adreslerimden seç
              </div>
              <button
                className="primary-button bg-white hover:bg-white text-secondary-darkGray hover:text-primary-base border-2 border-secondary-extraLightGray "
                onClick={() =>
                  dispatch(changeSelectedLocation(!selectedLocation))
                }
              >
                Adres Seç
              </button>
            </React.Fragment>
          ) : (
            <React.Fragment></React.Fragment>
          )}

          {isLogin && !selectedLocation && <AddressRadioGroup />}
        </div>
      </div>
    </details>
  );
};
