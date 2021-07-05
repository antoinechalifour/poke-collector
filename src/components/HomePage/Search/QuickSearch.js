import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { makeSearch } from "@/components/HomePage/Search/algolia";

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

  return (
    <div className="block-centered" ref={containerRef}>
      <style jsx>{`
        div {
          width: 100%;
          max-width: 860px;
          margin-top: 4rem;
          margin-bottom: 4rem;
        }
      `}</style>
    </div>
  );
};
