import { SearchBar } from "@/components/SearchBar";

export const SearchCardBar = ({ onChange }) => (
  <SearchBar
    id="search-card"
    label="Search (by name or rarity)"
    placeholder={`Ex: Blaziken, ="Rare Holo V"`}
    onChange={onChange}
  />
);
