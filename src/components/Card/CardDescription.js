export const CardDescription = ({ type = "default", children }) => (
  <>
    <blockquote className={`place-center-x card-content ${type}-background`}>
      {children || "No description available"}
    </blockquote>

    <style jsx>{`
      blockquote {
        height: 12rem;
        margin: 0 -2rem;
        border-radius: var(--size-corner);
        font-size: var(--size-text-md);
      }

      blockquote.default-background {
        background: rgb(255 255 255 / 5%);
      }
    `}</style>
  </>
);
