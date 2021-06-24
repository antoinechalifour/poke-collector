import { Card } from "./Card";

export const AllCards = ({ cards }) => (
  <ol>
    {cards.map((card) => (
      <li key={card.id}>
        <Card {...card} />
      </li>
    ))}

    <style jsx>{`
      ol {
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        padding: 2rem;
      }
    `}</style>
  </ol>
);
