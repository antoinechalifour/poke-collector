import Link from "next/link";

import { PokeBall } from "./PokeBall";
import { AuthenticationStatus } from "./AuthenticationStatus";

export const NavBar = ({ subtitle }) => {
  return (
    <nav className="grid grid-default grid-center-x card-content">
      <Link href="/">
        <a aria-label="Go back to home page">
          <PokeBall />
        </a>
      </Link>

      <p>Poké Collector {subtitle && <span>/ {subtitle}</span>}</p>

      <AuthenticationStatus />

      <style jsx>{`
        nav {
          position: sticky;
          top: 0;
          z-index: 10;

          grid-template-columns: auto 1fr auto;

          background: rgb(8 8 27 / 75%);
          backdrop-filter: blur(5px);
        }

        p {
          font-weight: bold;
        }

        span {
          opacity: 0.75;
        }
      `}</style>
    </nav>
  );
};
