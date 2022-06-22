import React, { FC } from 'react';
import { Menu } from 'antd';
import Image from 'next/image';

export const Navbar: FC = () => {

  const menuItems = [
    {
      label: (<a href="#/" target="_blank" rel="noopener noreferrer">
        Kadın</a>), key: 'kadın'
    },
    {
      label: (<a href="#/" target="_blank" rel="noopener noreferrer">
        Erkek</a>), key: 'erkek'
    },
    {
      label: (<a href="#/" target="_blank" rel="noopener noreferrer">
        Çocuk</a>), key: 'çocuk'
    },
    {
      label: (<a href="#/" target="_blank" rel="noopener noreferrer">
        Mobilya & Ev</a>), key: 'mobilya-ev'
    },
    {
      label: (<a href="#/" target="_blank" rel="noopener noreferrer">
        Ayakkabı & Çanta</a>), key: 'ayakkabı-canta'
    },
    {
      label: (<a href="#/" target="_blank" rel="noopener noreferrer">
        Kozmetik & Kişisel Bakım</a>), key: 'kozmetik-kişisel-bakım'
    },
    {
      label: (<a href="#/" target="_blank" rel="noopener noreferrer">
        Saat & Aksesuar</a>), key: 'saat-aksesuar'
    },
    {
      label: (<a href="#/" target="_blank" rel="noopener noreferrer">
        Elektronik</a>), key: 'elektronik'
    },
  ];
  return <div className='h-9 bg-white border-b border-secondary-extraLightGray/70 w-full block'>
    <nav className='max-w-7xl w-full h-full mx-auto block relative'>
      {/* <Menu items={menuItems} className="header-menu flex items-center h-full" /> */}

      <ul className='header-menu flex items-center h-full'>
        <li><a href="#">Kadın</a> <div className='nav-submenu block absolute w-full left-0 h-80  bg-white shadow-[inset_0_0_1px_1px_#ebebeb] rounded-b-md overflow-hidden'>
          <div className='p-6 w-full overflow-hidden'>
            <div className='flex justify-between h-72 overflow-hidden'>
              <div className='w-auto h-full pr-6 overflow-hidden'>
                <a href="#/" className='text-sm text-secondary-darkGray font-semibold'>Kadın Ayakkabı</a>
                <ul className='mt-1'>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                </ul>
              </div>
              <div className='w-auto h-full pr-6 overflow-hidden'>
                <a href="#/" className='text-sm text-secondary-darkGray font-semibold'>Kadın Ayakkabı</a>
                <ul className='mt-1'>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                </ul>
              </div>
              <div className='w-auto h-full pr-6 overflow-hidden'>
                <a href="#/" className='text-sm text-secondary-darkGray font-semibold'>Kadın Ayakkabı</a>
                <ul className='mt-1'>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                </ul>
              </div>
              <div className='w-auto h-full pr-6 overflow-hidden'>
                <a href="#/" className='text-sm text-secondary-darkGray font-semibold'>Kadın Ayakkabı</a>
                <ul className='mt-1'>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                </ul>
              </div>
              <div className='w-auto h-full pr-6 overflow-hidden'>
                <a href="#/" className='text-sm text-secondary-darkGray font-semibold'>Kadın Ayakkabı</a>
                <ul className='mt-1'>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                  <li className='pb-1'>
                    <a href="#/" className='text-xs text-secondary-lightDarkGray'>Elbise</a>
                  </li>
                </ul>
              </div>
              <div className='submenu-banners flex justify-center'>
                <div className='ml-4 w-64 text-right h-72'>
                  <a href="#/">
                    <Image src="https://cdn.dsmcdn.com/mnresize/500/247/ty349/campaign/banners/original/600127/549c783a0f_0_detay.jpg" alt='ss' width="265" height="137" className='mb-4 rounded-md'></Image>
                    <Image src="https://cdn.dsmcdn.com/mnresize/500/247/ty349/campaign/banners/original/600127/549c783a0f_0_detay.jpg" alt='sss' width="265" height="137" className='mb-4 rounded-md'></Image>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div></li>
        <li><a href="#">Erkek</a></li>
        <li><a href="#">Çocuk</a></li>
        <li><a href="#">Mobilya & Ev</a></li>
        <li><a href="#">Ayakkabı & Çanta</a></li>
        <li><a href="#">Kozmetik & Kişisel Bakım</a></li>
        <li><a href="#">Saat Aksesuar</a></li>
        <li><a href="#">Elektronik</a></li>
      </ul>
    </nav>
  </div>;
};
