import React from 'react';

import { Button } from '@components';
import Head from 'next/head';
import { Html } from 'next/document';
import { useDispatch } from 'react-redux';
import { rawSetTheme } from '@redux/slices/product';
import SearchableDropdown from '@components/searchableDropdown';
import ImageSlider from '@components/antSlider';

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
      <ImageSlider />
    </div>
  );
};
