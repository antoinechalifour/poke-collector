import { SearchBar } from "@/components/SearchBar";

export const SearchSetBar = ({ onChange }) => (
  <div>
    <SearchBar
      id="search-set"
      label="Search a set"
      placeholder="Ex: Ultra Prism"
      onChange={onChange}
    />
    <style jsx>{`
      div {
        width: 100%;
        max-width: 400px;
      }
    `}</style>
  </div>
);
