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
          margin-top: 8rem;
          margin-bottom: 8rem;
          width: 100%;
          max-width: 860px;
        }
      `}</style>
    </div>
  );
};
