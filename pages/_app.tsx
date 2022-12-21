import React, { useEffect, useState } from 'react';
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
          <Hydrated>
            <Component {...pageProps} />
          </Hydrated>
        </PanelLayout> :
        <Hydrated>
          <Component {...pageProps} />
        </Hydrated>
      }
    </Provider>

  );
}
const Hydrated = ({ children }: { children?: any }) => {
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHydration(true);
    }
  }, []);
  return hydration ? children : <p>Loading..</p>

};
export default MyApp;
