import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';
import '@styles/global.scss';
import { Provider } from 'react-redux';
import store from '@redux/store';
import PanelLayout from '@components/layout';
import { Header } from '@components/header';
import { Footer } from '@components/footer';

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
          <Header />
          <div className='flex-1'>
            <Component {...pageProps} />
          </div>

          <Footer />
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
  return hydration ? <div className='flex flex-col h-screen'>{children}</div> : <p>Loading..</p>

};
export default MyApp;
