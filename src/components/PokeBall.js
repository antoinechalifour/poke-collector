export const PokeBall = () => (
  <span>
    <style jsx>{`
      span {
        position: relative;

        display: block;
        width: 3rem;
        height: 3rem;
        border: 2px solid #111;
        border-radius: 50%;
        overflow: hidden;

        background: #d90707;

        cursor: pointer;
        transform: scale(1);
        transition: transform 0.25s ease;
      }

      span:hover {
        transform: scale(1.1);
      }

      span:before {
        content: "";
        position: absolute;
        bottom: 0;

        display: block;
        height: 50%;
        width: 100%;
        border-top: 2px solid #111;

        background: #fff;
      }

      span:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;

        display: block;
        width: 0.8rem;
        height: 0.8rem;
        border: 2px solid #111;
        border-radius: 50%;

        background: #fff;

        transform: translate(-50%, -50%);
      }
    `}</style>
  </span>
);
