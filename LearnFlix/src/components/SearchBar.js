function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      className="search"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
