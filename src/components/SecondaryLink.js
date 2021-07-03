import Link from "next/link";
import dynamic from "next/dynamic";

const ReactTooltip = dynamic(() => import("react-tooltip"), { ssr: false });

export const SecondaryLink = ({ id, href, children, label }) => (
  <>
    <Link href={href}>
      <a data-tip data-for={id} title={label || children}>
        {children}
      </a>
    </Link>

    {label && <ReactTooltip id={id}>{label}</ReactTooltip>}

    <style jsx>{`
      a {
        text-decoration: underline dotted;
        color: var(--color-text-secondary);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        max-width: 100%;
      }
    `}</style>
  </>
);
