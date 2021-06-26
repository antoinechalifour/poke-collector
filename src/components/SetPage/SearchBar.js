export const SearchBar = ({ onChange }) => (
  <form role="search" className="grid grid-sm card card-content">
    <label className="label" htmlFor="search-card">
      Search (by name or rarity)
    </label>

    <input
      className="input"
      type="text"
      onChange={onChange}
      placeholder={`Ex: Blaziken, ="Rare Holo V"`}
    />
  </form>
);
