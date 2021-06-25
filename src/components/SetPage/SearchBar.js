export const SearchBar = ({ onChange }) => (
  <form role="search">
    <label htmlFor="search-card">Search (by name or rarity)</label>
    <input
      type="text"
      onChange={onChange}
      placeholder={`Ex: Blaziken, ="Rare Holo V"`}
    />

    <style jsx>{`
      form {
        display: grid;
        grid-gap: 1rem;
        border-radius: 1rem;
        padding: 2rem;

        background: #171717;
      }

      label {
        font-size: 1.2rem;
        font-weight: 600;
        display: block;
      }

      input {
        padding: 2rem;
        border-radius: 3rem;
        background: #444;
        font-family: inherit;
        font-size: inherit;
        color: #fff;
        outline: none;
        border: 2px solid rgba(255, 255, 255, 0.15);
        font-weight: 600;
        transition: border-color 0.2s ease;
      }

      input:focus {
        border-color: rgba(255, 215, 0, 0.5);
      }
    `}</style>
  </form>
);
