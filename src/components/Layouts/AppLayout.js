import { useRouter } from "next/router";
import NProgress from "nprogress";

import { NavBar } from "../NavBar";
import { useEffect } from "react";

const AppLoader = () => {
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
  }, []);

  return null;
};

export const AppLayout = ({ children }) => (
  <div>
    <NavBar />
    <AppLoader />
    <main>{children}</main>
  </div>
);

export const applyAppLayout = (page) => <AppLayout>{page}</AppLayout>;
