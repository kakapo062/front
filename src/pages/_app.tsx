import { Provider, createClient, cacheExchange, fetchExchange } from 'urql';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const client = createClient({
  url: 'http://localhost:3010/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
