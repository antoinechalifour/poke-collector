import Link from "next/link";

export const SecondaryLink = ({ href, children }) => (
  <>
    <Link href={href}>
      <a title={children}>{children}</a>
    </Link>

    <style jsx>{`
      a {
        text-decoration: underline dotted;
        color: var(--color-text-secondary);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        width: 100%;
      }
    `}</style>
  </>
);
