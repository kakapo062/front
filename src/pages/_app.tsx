import { Provider, createClient, cacheExchange, fetchExchange } from "urql";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const client = createClient({
  url: "http://localhost:3010/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </Provider>
  );
}

export default App;
