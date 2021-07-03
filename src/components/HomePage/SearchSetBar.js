import { SearchBar } from "@/components/SearchBar";

export const SearchSetBar = ({ onChange }) => (
  <SearchBar
    id="search-set"
    label="Search a set"
    placeholder="Ex: Ultra Prism"
    onChange={onChange}
  />
);
