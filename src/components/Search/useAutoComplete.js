import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { makeSearch } from "@/components/Search/algolia";

export const useAutoComplete = () => {
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
