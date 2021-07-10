import { useRouter } from "next/router";
import { useEffect } from "react";

export const useCleanHashOnScroll = () => {
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      const hasHash = !!window.location.hash;
      const [pathWithoutHash] = router.asPath.split("#");

      if (hasHash)
        router.replace(pathWithoutHash, pathWithoutHash, { shallow: true });
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [router, router.asPath]);
};
