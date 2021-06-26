import { SetItem } from "./SetItem";

export const AllSets = ({ sets }) => (
  <ol className="page-container grid grid-default">
    {sets.map((set) => (
      <li key={set.id}>
        <SetItem {...set} />
      </li>
    ))}

    <style jsx>{`
      ol {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }
    `}</style>
  </ol>
);
