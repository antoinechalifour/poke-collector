import throttle from "lodash.throttle";

export const SearchBar = ({ id, label, placeholder, onChange }) => {
  const handleChange = throttle((e) => onChange(e.target.value), 150, {
    leading: false,
  });

  return (
    <form
      role="search"
      className="grid grid-sm card card-content"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="label" htmlFor={id}>
        {label}
      </label>

      <input
        className="input"
        type="text"
        id={id}
        name={id}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </form>
  );
};