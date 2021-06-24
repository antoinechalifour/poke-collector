import { SetItem } from "./SetItem";

export const AllSets = ({ sets }) => (
  <ol>
    {sets.map((set) => (
      <li key={set.id}>
        <SetItem {...set} />
      </li>
    ))}

    <style jsx>{`
      ol {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 2rem;
        max-width: 960px;
        margin: auto;
      }
    `}</style>
  </ol>
);
