import { HiLogout } from "react-icons/hi";

export const UserProfile = ({ user }) => (
  <div className="grid grid-default grid-center-x">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={user.picture} alt="" />
    <p>{user.given_name}</p>
    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
    <a href="/api/auth/logout" title="Logout">
      <HiLogout size="2rem" />
    </a>

    <style jsx>{`
      div {
        grid-template-columns: 30px auto auto;
      }

      img {
        display: block;
        width: 100%;
        border-radius: 50%;
      }

      div :global(svg) {
        position: relative;
        top: -1px;
        vertical-align: middle;
      }
    `}</style>
  </div>
);
