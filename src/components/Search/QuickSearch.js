import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { makeSearch } from "./algolia";

export const QuickSearch = () => {
  const router = useRouter();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = makeSearch(containerRef.current, router);

    return () => {
      search.destroy();
    };
  }, [router]);

  return <div ref={containerRef} />;
};
