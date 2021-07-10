/* eslint-disable @next/next/no-html-link-for-pages */

import { useUser } from "@auth0/nextjs-auth0";

export const AuthenticationStatus = () => {
  const { user, isLoading } = useUser();

  if (isLoading) return <div />;
  if (!user) return <a href="/api/auth/login">Login</a>;

  return (
    <a href="/api/auth/logout" title="Logout">
      Logout
    </a>
  );
};
