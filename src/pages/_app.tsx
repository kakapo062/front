import { Provider, createClient, cacheExchange, fetchExchange } from "urql";
import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const client = createClient({
  url: "http://localhost:3010/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default App;
