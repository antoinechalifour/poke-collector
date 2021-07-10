import { useRouter } from "next/router";
import { useEffect } from "react";

export const useResetDetachedModeOnRouteChange = () => {
  const router = useRouter();

  useEffect(() => {
    /*
          Algolia's autocomplete cannot remove the aa-Detached class from the body
          when the user **clicks** a link and performs a navigation in the suggestions.
          So we have to remove the class manually when the URL changes
           */
    const resetDetachedMode = () => {
      if (document.body.classList.contains("aa-Detached"))
        document.body.classList.remove("aa-Detached");
    };

    router.events.on("routeChangeComplete", resetDetachedMode);
    router.events.on("hashChangeComplete", resetDetachedMode);

    return () => {
      router.events.off("routeChangeComplete", resetDetachedMode);
      router.events.off("hashChangeComplete", resetDetachedMode);
    };
  }, [router, router.events]);
};
