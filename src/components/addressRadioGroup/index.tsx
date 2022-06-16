import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Space } from 'antd';
import Image from 'next/image';
import { Thick } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { changeSelectedLocation } from '@redux/slices/user';

export const AddressRadioGroup: React.FC = () => {
  const dispatch = useDispatch();
  const selectedLocation = useSelector(
    (state: RootState) => state.SelectedLocation.isSelectedLocation
  );
  const adressList = [
    {
      id: 1,
      baslik: 'Evim',
      adres: 'Fatih Mahallesi, 4. Cumalı sokak, No:66, D:1 Beşyol',
      il: 'Bursa',
      ilce: 'Osmangazi',
    },
    {
      id: 2,
      baslik: 'Evim',
      adres: 'Fatih Mahallesi, 4. Cumalı sokak, No:66, D:1 Beşyol',
      il: 'Bursa',
      ilce: 'Osmangazi',
    },
    {
      id: 3,
      baslik: 'Evim',
      adres: 'Fatih Mahallesi, 4. Cumalı sokak, No:66, D:1 Beşyol',
      il: 'Bursa',
      ilce: 'Osmangazi',
    },
    {
      id: 4,
      baslik: 'Evim',
      adres: 'Fatih Mahallesi, 4. Cumalı sokak, No:66, D:1 Beşyol',
      il: 'Bursa',
      ilce: 'Osmangazi',
    },
  ];
  const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
  };
  return (
    <>
      <button
        className="primary-button"
        onClick={() => dispatch(changeSelectedLocation(!selectedLocation))}
      >
        Yeni Konum Seç
      </button>
      <div className="flex items-center basis-full text-xs text-secondary-lightDarkGray before:content-[''] before:grow before:h-px before:bg-secondary-extraLightGray before:mx-2 after:content-[''] after:grow after:h-px after:bg-secondary-extraLightGray after:mx-2 ">
        ya da adreslerimden seç
      </div>
      <Radio.Group
        onChange={onChange}
        defaultValue={1}
        className="addressRadio overflow-auto max-h-64"
      >
        <Space direction="vertical" className="w-full">
          {adressList.map((adres) => (
            <Radio.Button
              key={adres.id}
              value={adres.id}
              className="overflow-hidden !transition-none"
            >
              <div className="thick p-2 bg-primary-blue inline-block absolute top-0 left-0 rounded-br-lg">
                <Thick />
              </div>
              <div className="mb-1 text-base font-semibold line-clamp-1">
                {adres.baslik}
              </div>
              <div className="text-xs line-clamp-2">{adres.adres}</div>
              <div className="text-xs mt-2">{`${adres.ilce.toLocaleUpperCase()} / ${
                adres.il
              }`}</div>
            </Radio.Button>
          ))}
        </Space>
      </Radio.Group>
    </>
  );
};
