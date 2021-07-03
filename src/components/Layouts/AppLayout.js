import { NavBar } from "../NavBar";
import { AppLoader } from "./AppLoader";

export const AppLayout = ({ children, subtitle }) => (
  <div>
    <NavBar subtitle={subtitle} />
    <AppLoader />
    <main>{children}</main>
  </div>
);

export const applyAppLayout = (page, props) => (
  <AppLayout subtitle={props.subtitle}>{page}</AppLayout>
);
