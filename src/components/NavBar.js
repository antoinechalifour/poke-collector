import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

import { PokeBall } from "@/components/PokeBall";

const UserProfile = ({ user }) => (
  <div>
    <p>Welcome {user.given_name}</p>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={user.picture} />
    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
    <a href="/api/auth/logout">Logout</a>

    <style jsx>{`
      div {
        display: grid;
        grid-template-columns: auto 30px auto;
        align-items: center;
        grid-gap: 2rem;
      }

      img {
        display: block;
        width: 100%;
        border-radius: 50%;
      }
    `}</style>
  </div>
);

export const NavBar = () => {
  const { user } = useUser();

  return (
    <nav>
      <Link href="/">
        <a aria-label="Go back to home page">
          <PokeBall />
        </a>
      </Link>

      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      {!user && <a href="/api/auth/login">Login</a>}
      {user && <UserProfile user={user} />}

      <style jsx>{`
        nav {
          position: sticky;
          top: 0;
          z-index: 10;

          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem;

          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(5px);
        }
      `}</style>
    </nav>
  );
};
