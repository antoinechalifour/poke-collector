import { NavBar } from "./NavBar";

export const AppLayout = ({ children }) => (
  <div>
    <NavBar />
    <main>{children}</main>
  </div>
);

export const applyAppLayout = (page) => <AppLayout>{page}</AppLayout>;
