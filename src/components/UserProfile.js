export const UserProfile = ({ user }) => (
  <div className="grid grid-default grid-center-x">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={user.picture} alt="" />
    <p>{user.given_name}</p>
    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
    <a href="/api/auth/logout">Logout</a>

    <style jsx>{`
      div {
        grid-template-columns: 30px auto auto;
      }

      img {
        display: block;
        width: 100%;
        border-radius: 50%;
      }
    `}</style>
  </div>
);
