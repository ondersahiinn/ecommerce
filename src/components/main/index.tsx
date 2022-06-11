import React from 'react';

import { Button } from '@components';
import Head from 'next/head';
import { Html } from 'next/document';
import { useDispatch } from 'react-redux';
import { rawSetTheme } from '@redux/slices/product';

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
      <Head>
        <title>Main</title>
        <Html className="onder" />
      </Head>
      <div className="text-center font-light py-5 dark:text-white bg-gray-700">
        <div className="container mx-auto dark:bg-red-500">
          <h1 className="text-white text-8xl mb-2">Önder</h1>
          <p className="text-lg text-white mb-3 bg-primary-darken dark:bg-slate-400">
            The frontend boilerplate with superpowers!
          </p>

          <Button
            type="button"
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light');
              dispatch(rawSetTheme(theme === 'dark' ? 'light' : 'dark'));
            }}
          >
            tıkla
          </Button>
        </div>
      </div>
    </div>
  );
};
