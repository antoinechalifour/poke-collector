import { Card } from "@/components/Card/Card";

export const CardGrid = ({ cards, getExtraProps }) => (
  <ol className="grid grid-default">
    {cards.map((card) => (
      <li key={card.id}>
        <Card {...card} {...getExtraProps(card)} />
      </li>
    ))}

    <style jsx>{`
      ol {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }
    `}</style>
  </ol>
);
