import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { makeSearch } from "./algolia";

const useResetDetachedModeOnRouteChange = () => {
  const router = useRouter();

  useEffect(() => {
    const resetDetachedMode = () => {
      console.log("resetDetachedMode");
      if (document.body.classList.contains("aa-detached"))
        document.body.classList.remove("aa-detached");
    };

    router.events.on("routeChangeComplete", resetDetachedMode);

    return () => router.events.off("routeChangeComplete", resetDetachedMode);
  }, [router, router.events]);
};

const useAutoComplete = () => {
  const router = useRouter();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = makeSearch(containerRef.current, router);

    return () => search.destroy();
  }, [router]);

  return { containerRef };
};

export const QuickSearch = () => {
  useResetDetachedModeOnRouteChange();
  const { containerRef } = useAutoComplete();

  return <div ref={containerRef} />;
};
