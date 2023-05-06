import { Provider, createClient, cacheExchange, fetchExchange } from "urql";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { SessionProvider } from 'next-auth/react'

const client = createClient({
  url: "http://localhost:3010/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider value={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </Provider>
    </SessionProvider>
  );
}
