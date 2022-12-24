import React from 'react';

import { Button } from '@components';
import Head from 'next/head';
import { Html } from 'next/document';
import { useDispatch } from 'react-redux';
import { rawSetTheme } from '@redux/slices/product';
import SearchableDropdown from '@components/searchableDropdown';
import ImageSlider from '@components/antSlider';
import ContentItem from '@components/antSlider/contentItem';
import ProductItem from '@components/ProductCard';
import HButton from '@components/HButton';
import { Image } from 'antd';

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = React.useState(
    typeof window !== 'undefined' ? localStorage.getItem('site-theme') : 'light'
  );
  React.useEffect(() => {
    dispatch(rawSetTheme(theme));
  }, [theme]);
  return (
    <div className="flex-grow flex-shrink basis-auto">
      <ImageSlider>
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
      </ImageSlider>


      <div className='max-w-7xl mx-auto my-12 px-3 grid grid-cols-4 gap-4 items-start '>
        <ProductItem type='small' brand='Berkin' disabled={false} id={1} name="lorem ipsum" discount_percentage={24} image="https://productimages.hepsiburada.net/s/189/1100/110000155170656.jpg" price={22222} />
        <ProductItem type='small' brand='Berkin' disabled={false} id={1} name="lorem ipsum" discount_percentage={24} image="https://productimages.hepsiburada.net/s/189/1100/110000155170656.jpg" price={22222} />
        <ProductItem brand='Berkin' disabled={false} id={1} name="lorem ipsum" discount_percentage={24} image="https://productimages.hepsiburada.net/s/189/1100/110000155170656.jpg" price={22222} />
        <ProductItem brand='Berkin' disabled={false} id={1} name="lorem ipsum" discount_percentage={24} image="https://productimages.hepsiburada.net/s/189/1100/110000155170656.jpg" price={22222} />
        <ProductItem brand='Berkin' disabled={false} id={1} name="lorem ipsum" discount_percentage={24} image="https://productimages.hepsiburada.net/s/189/1100/110000155170656.jpg" price={22222} />
        <ProductItem brand='Berkin' disabled={false} id={1} name="lorem ipsum" discount_percentage={24} image="https://productimages.hepsiburada.net/s/189/1100/110000155170656.jpg" price={22222} />
        <ProductItem brand='Berkin' disabled={false} id={1} name="lorem ipsum" discount_percentage={24} image="https://productimages.hepsiburada.net/s/189/1100/110000155170656.jpg" price={22222} />
        <ProductItem brand='Berkin' disabled={false} id={1} name="lorem ipsum" discount_percentage={24} image="https://productimages.hepsiburada.net/s/189/1100/110000155170656.jpg" price={22222} />
        <ProductItem brand='Berkin' disabled={false} id={1} name="lorem ipsum" discount_percentage={24} image="https://productimages.hepsiburada.net/s/189/1100/110000155170656.jpg" price={22222} />

      </div>

    </div>
  );
};
