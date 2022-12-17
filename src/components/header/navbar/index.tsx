import React, { FC } from 'react';
import { Menu } from 'antd';
import Image from 'next/image';
import styles from './style.module.scss';

export const Navbar: FC = () => {

  const [bannerCount, setBannerCount] = React.useState(2);
  const onMouseEnter = (event: React.MouseEvent<HTMLLIElement>) => {
    if (event.currentTarget.lastElementChild?.classList.contains('nav-submenu')) {
      document.body.classList.add('modal-open')
    }
  }
  const onMouseLeave = (event: React.MouseEvent<HTMLLIElement>) => {
    if (!!event.currentTarget.lastElementChild?.classList.contains('nav-submenu')) {
      document.body.classList.remove('modal-open')
    }
  }
  return <div className='h-9 bg-white border-b border-secondary-extraLightGray/70 w-full block'>
    <nav className='max-w-7xl w-full h-full mx-auto block relative'>
      {/* <Menu items={menuItems} className="header-menu flex items-center h-full" /> */}

      <ul className={`${styles.headerMenu} flex items-center h-full`}>
        <li className='group' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <a href="#">Kadın</a>
          <div className='nav-submenu absolute w-full left-0 h-auto min-h-[18rem] bg-white shadow-[inset_0_0_1px_1px_#ebebeb] rounded-b-md overflow-hidden hidden group-hover:block'>
            <div className='p-6 w-full overflow-hidden'>
              <div className='flex justify-between overflow-hidden'>
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
                <div className={`submenu-banners ml-4 max-w-xl text-right grid ${bannerCount > 2 ? 'grid-cols-[repeat(auto-fit,_minmax(auto,_16rem))]' : 'grid-rows-[repeat(auto-fit,_minmax(auto,_1fr))]'} gap-3`}>
                  <a href="#/" className='submenu-banner w-64 h-[137px]'>
                    <Image src="https://cdn.dsmcdn.com/mnresize/500/247/ty349/campaign/banners/original/600127/549c783a0f_0_detay.jpg" alt='ss' width="256" height="137" className='mb-4 rounded-md'></Image>
                  </a>
                  <a href="#/" className='submenu-banner w-64 h-[137px]'>
                    <Image src="https://cdn.dsmcdn.com/mnresize/500/247/ty349/campaign/banners/original/600127/549c783a0f_0_detay.jpg" alt='sss' width="256" height="137" className='mb-4 rounded-md max-w-full w-full'></Image>
                  </a>
                  {/* <a href="#/" className='submenu-banner w-64 h-[137px]'>
                  <Image src="https://cdn.dsmcdn.com/mnresize/500/247/ty349/campaign/banners/original/600127/549c783a0f_0_detay.jpg" alt='ss' width="256" height="137" className='mb-4 rounded-md'></Image>
                </a>

                <a href="#/" className='submenu-banner w-64 h-[137px]'>
                  <Image src="https://cdn.dsmcdn.com/mnresize/500/247/ty349/campaign/banners/original/600127/549c783a0f_0_detay.jpg" alt='sss' width="256" height="137" className='mb-4 rounded-md max-w-full w-full'></Image>
                </a> */}

                </div>
              </div>
            </div>

          </div>
        </li>
        <li className='group' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <a href="#">Erkek</a>
          <div className='nav-submenu absolute w-full left-0 h-auto min-h-[18rem] bg-white shadow-[inset_0_0_1px_1px_#ebebeb] rounded-b-md overflow-hidden hidden group-hover:block'>
            <div className='p-6 w-full overflow-hidden'>
              <div className='flex justify-between overflow-hidden'>
                <div className='w-auto h-full pr-6 overflow-hidden'>
                  <a href="#/" className='text-sm text-secondary-darkGray font-semibold'>Erkek Ayakkabı</a>
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
                <div className={`submenu-banners ml-4 max-w-xl text-right grid ${bannerCount > 2 ? 'grid-cols-[repeat(auto-fit,_minmax(auto,_16rem))]' : 'grid-rows-[repeat(auto-fit,_minmax(auto,_1fr))]'} gap-3`}>
                  <a href="#/" className='submenu-banner w-64 h-[137px]'>
                    <Image src="https://cdn.dsmcdn.com/mnresize/500/247/ty349/campaign/banners/original/600127/549c783a0f_0_detay.jpg" alt='ss' width="256" height="137" className='mb-4 rounded-md'></Image>
                  </a>
                  <a href="#/" className='submenu-banner w-64 h-[137px]'>
                    <Image src="https://cdn.dsmcdn.com/mnresize/500/247/ty349/campaign/banners/original/600127/549c783a0f_0_detay.jpg" alt='sss' width="256" height="137" className='mb-4 rounded-md max-w-full w-full'></Image>
                  </a>
                  {/* <a href="#/" className='submenu-banner w-64 h-[137px]'>
                  <Image src="https://cdn.dsmcdn.com/mnresize/500/247/ty349/campaign/banners/original/600127/549c783a0f_0_detay.jpg" alt='ss' width="256" height="137" className='mb-4 rounded-md'></Image>
                </a>

                <a href="#/" className='submenu-banner w-64 h-[137px]'>
                  <Image src="https://cdn.dsmcdn.com/mnresize/500/247/ty349/campaign/banners/original/600127/549c783a0f_0_detay.jpg" alt='sss' width="256" height="137" className='mb-4 rounded-md max-w-full w-full'></Image>
                </a> */}

                </div>
              </div>
            </div>

          </div></li>
        <li className='group' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <a href="#">Çocuk</a>
        </li>
        <li><a href="#">Mobilya & Ev</a></li>
        <li><a href="#">Ayakkabı & Çanta</a></li>
        <li><a href="#">Kozmetik & Kişisel Bakım</a></li>
        <li><a href="#">Saat Aksesuar</a></li>
        <li><a href="#">Elektronik</a></li>
      </ul>
    </nav>
  </div >;
};
