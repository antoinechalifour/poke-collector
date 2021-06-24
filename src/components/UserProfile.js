export const UserProfile = ({ user }) => (
  <div>
    <p>Welcome {user.given_name}</p>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={user.picture} alt="" />
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
