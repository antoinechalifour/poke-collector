import { Search } from "./Search/Search";
import { AuthenticationStatus } from "./AuthenticationStatus";
import { NavBarTitle } from "./NavBarTitle";

export const NavBar = ({ subtitle }) => (
  <nav>
    <div className="page-container grid grid-default grid-center-x grid-center-x">
      <NavBarTitle subtitle={subtitle} />

      <AuthenticationStatus />

      <Search />
    </div>

    <style jsx>{`
      nav {
        position: sticky;
        top: 0;
        z-index: 10;

        background: rgb(8 8 27 / 75%);
        backdrop-filter: blur(5px);
      }

      div {
        grid-template-columns: 1fr auto 2rem;
        padding: 1rem 2rem;
        min-height: 84px;
      }

      @media (min-width: 860px) {
        div {
          grid-template-columns: 1fr auto 30rem;
        }
      }
    `}</style>
  </nav>
);
