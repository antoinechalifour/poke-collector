import { SearchBar } from "../SearchBar";

export const SearchCardBar = ({ onChange }) => (
  <div>
    <SearchBar
      id="search-card"
      label="Search (by name or rarity)"
      placeholder={`Ex: Blaziken, ="Rare Holo V"`}
      onChange={onChange}
    />

    <style jsx>{`
      div {
        max-width: 400px;
      }
    `}</style>
  </div>
);
