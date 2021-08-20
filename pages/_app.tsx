import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CommentsProvider } from "../context/CommentsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CommentsProvider>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <Component {...pageProps} />
      </CommentsProvider>
    </>
  );
}

export default MyApp;
