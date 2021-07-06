/* eslint-disable @next/next/no-html-link-for-pages */

import { useUser } from "@auth0/nextjs-auth0";
import { HiLogout } from "react-icons/hi";

export const AuthenticationStatus = () => {
  const { user, isLoading } = useUser();

  if (isLoading) return null;
  if (!user) return <a href="/api/auth/login">Login</a>;

  return (
    <a href="/api/auth/logout" title="Logout">
      <HiLogout size="2rem" />

      <style jsx>{`
        a :global(svg) {
          position: relative;
          top: 1px;
        }
      `}</style>
    </a>
  );
};
