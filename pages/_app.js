import "reset.css/reset.css";
import "nprogress/nprogress.css";
import "@algolia/autocomplete-theme-classic";

import "../styles/globals.css";

import { UserProvider } from "@auth0/nextjs-auth0";
import { useEffect } from "react";

function useServiceWorkerUpdates() {
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
          wb.messageSkipWaiting();

          window.location.reload();
        }
      };

      wb.addEventListener("waiting", promptNewVersionAvailable);
    }
  }, []);
}

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  useServiceWorkerUpdates();

  return (
    <UserProvider>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </UserProvider>
  );
}

export default MyApp;
