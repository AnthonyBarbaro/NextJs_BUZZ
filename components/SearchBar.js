// components/SearchBar.js
const SearchBar = ({ value, onChange }) => (
    <input
        type="text"
        placeholder="Search for products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 rounded w-full mb-4"
    />
);

export default SearchBar;
