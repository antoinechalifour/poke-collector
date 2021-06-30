import "reset.css/reset.css";
import "nprogress/nprogress.css";

import "../styles/globals.css";

import { UserProvider } from "@auth0/nextjs-auth0";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.workbox !== undefined
    ) {
      const wb = window.workbox;
      const promptNewVersionAvailable = () => {
        if (
          confirm(
            "A new version of Poké Collector has been released, reload to update?"
          )
        ) {
          window.location.reload();
        }
      };

      wb.addEventListener("waiting", promptNewVersionAvailable);
    }
  }, []);

  return <UserProvider>{getLayout(<Component {...pageProps} />)}</UserProvider>;
}

export default MyApp;
