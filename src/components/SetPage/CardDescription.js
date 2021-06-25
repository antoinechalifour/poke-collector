export const CardDescription = ({ type, children }) => (
  <>
    <blockquote className={type ? `${type}-background` : "default-background"}>
      {children || "No description available"}
    </blockquote>

    <style jsx>{`
      blockquote {
        display: flex;
        align-items: center;
        height: 12rem;
        padding: 2rem;
        margin: 0 -2rem;
        border-radius: 1rem;
      }

      blockquote.default-background {
        background: rgb(255 255 255 / 5%);
      }
    `}</style>
  </>
);
