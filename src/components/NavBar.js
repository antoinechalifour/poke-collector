import { useUser } from "@auth0/nextjs-auth0";

export const NavBar = () => {
  const { user } = useUser();

  return (
    <nav>
      {!user && <a href="/api/auth/login">Login</a>}
      {user && <a href="/api/auth/logout">Logout</a>}

      <style jsx>{`
        nav {
          position: sticky;
          top: 0;
          z-index: 10;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(5px);
        }
      `}</style>
    </nav>
  );
};
