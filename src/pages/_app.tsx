import { Provider, createClient, cacheExchange, fetchExchange } from "urql";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

const client = createClient({
  url: "http://localhost:3010/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
