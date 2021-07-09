import "reset.css/reset.css";
import "nprogress/nprogress.css";
import "@algolia/autocomplete-theme-classic";

import "../styles/globals.css";

import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <UserProvider>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </UserProvider>
  );
}

export default MyApp;
