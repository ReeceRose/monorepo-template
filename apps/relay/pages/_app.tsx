import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';

import { createEnvironment } from 'environment';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    // Note, a button is required to switch the themes and it will also need to call classList.add.
    if (localStorage.theme) {
      document.documentElement.classList.add(localStorage.theme);
    }
  }, []);

  const [env] = useState(() => {
    if (typeof window === 'undefined') {
      return createEnvironment().environment;
    }

    const recordsEl = document.getElementById('relay--records');

    const records =
      recordsEl && recordsEl.innerText && JSON.parse(recordsEl.innerText);

    return createEnvironment({ records }).environment;
  });

  return (
    <RelayEnvironmentProvider environment={env}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
