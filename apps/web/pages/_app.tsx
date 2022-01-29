import { AppProps } from 'next/app';
import { useEffect } from 'react';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    // Note, a button is required to switch the themes and it will also need to call classList.add.
    if (localStorage.theme) {
      document.documentElement.classList.add(localStorage.theme);
    }
  }, []);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
