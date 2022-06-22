import React, { FC } from 'react';
import { Menu } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

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
    <div className='max-w-7xl w-full h-full mx-auto block'>
      <nav className='h-full'>
        <Menu items={menuItems} className="header-menu flex items-center h-full" />

      </nav>
    </div>
  </div>;
};
