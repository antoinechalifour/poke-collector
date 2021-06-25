import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

import { PokeBall } from "./PokeBall";
import { UserProfile } from "./UserProfile";

export const NavBar = () => {
  const { user } = useUser();

  return (
    <nav>
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

          display: grid;
          align-items: center;
          grid-template-columns: auto 1fr auto;
          grid-gap: 2rem;
          padding: 2rem;

          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(5px);
        }

        p {
          font-weight: bold;
        }
      `}</style>
    </nav>
  );
};
