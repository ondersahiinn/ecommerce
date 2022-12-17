import React from 'react';
import { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';
import '@styles/global.scss';
import { Provider } from 'react-redux';
import store from '@redux/store';
import PanelLayout from '@components/layout';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <Provider store={store}>
        {Component.displayName === 'PanelPage' ?
            <PanelLayout>
              <Component {...pageProps} />
            </PanelLayout> :
              <Component {...pageProps} />
          }
      </Provider>

  );
}

export default MyApp;
