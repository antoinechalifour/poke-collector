import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

import { PokeBall } from "./PokeBall";
import { UserProfile } from "./UserProfile";

export const NavBar = () => {
  const { user } = useUser();

  return (
    <nav className="grid grid-default grid-center-x card-content">
      <Link href="/">
        <a aria-label="Go back to home page">
          <PokeBall />
        </a>
      </Link>

      <p>Poké Collector</p>

      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      {!user && <a href="/api/auth/login">Login</a>}
      {user && <UserProfile user={user} />}

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
      `}</style>
    </nav>
  );
};
