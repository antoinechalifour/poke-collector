import Link from "next/link";
import { PokeBall } from "@/components/PokeBall";

export const NavBarTitle = ({ subtitle }) => (
  <div className="grid grid-default grid-center-x">
    <Link href="/">
      <a aria-label="Go back to home page">
        <PokeBall />
      </a>
    </Link>

    <p>Poké Collector {subtitle && <span>/ {subtitle}</span>}</p>

    <style jsx>{`
      div {
        grid-template-columns: 3rem auto;
      }

      p {
        display: block;
        font-weight: bold;
      }

      span {
        opacity: 0.75;
        white-space: nowrap;
      }
    `}</style>
  </div>
);
