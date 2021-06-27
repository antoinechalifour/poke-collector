import { NavBar } from "../NavBar";
import { AppLoader } from "@/components/Layouts/AppLoader";

export const AppLayout = ({ children }) => (
  <div>
    <NavBar />
    <AppLoader />
    <main>{children}</main>
  </div>
);

export const applyAppLayout = (page) => <AppLayout>{page}</AppLayout>;
