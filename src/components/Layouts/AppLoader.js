import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";

export const AppLoader = () => {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", NProgress.start);
    router.events.on("routeChangeError", NProgress.done);
    router.events.on("routeChangeComplete", NProgress.done);

    return () => {
      router.events.off("routeChangeStart", NProgress.start);
      router.events.off("routeChangeError", NProgress.done);
      router.events.off("routeChangeComplete", NProgress.done);
    };
  }, [router.events]);

  return null;
};
