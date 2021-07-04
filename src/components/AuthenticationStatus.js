import { useUser } from "@auth0/nextjs-auth0";
import { UserProfile } from "@/components/UserProfile";

export const AuthenticationStatus = () => {
  const { user, isLoading } = useUser();

  if (isLoading) return null;
  /* eslint-disable-next-line @next/next/no-html-link-for-pages */
  if (!user) return <a href="/api/auth/login">Login</a>;

  return <UserProfile user={user} />;
};
