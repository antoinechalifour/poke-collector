import { HiOutlineInformationCircle } from "react-icons/hi";
import format from "date-fns/format";
import dynamic from "next/dynamic";

const ReactTooltip = dynamic(() => import("react-tooltip"), { ssr: false });

export const CardPrice = ({ cardId, price, timestamp }) => {
  const id = `${cardId}-${price}`;

  return (
    <>
      {price ? (
        <>
          ${price}
          <span data-tip data-for={id}>
            <HiOutlineInformationCircle size="2rem" />
          </span>
          <ReactTooltip id={id} place="top" type="dark" effect="float">
            Price of ${price} as of {format(new Date(timestamp), "PPp")}
          </ReactTooltip>
        </>
      ) : (
        "N/A"
      )}
      <style jsx>{`
        span {
          display: inline-block;
          color: var(--color-text-reverse);
          margin-left: 0.5rem;
          cursor: help;
        }

        span :global(svg) {
          vertical-align: middle;
          position: relative;
          top: -1px;
        }
      `}</style>
    </>
  );
};
