import "./search-bar.css";

const SearchBar = ({ value, onChange }) => {
    return (
        <div className="search-bar">
            <span className="search-bar__icon">⌕</span>

            <input
                type="search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search products..."
                aria-label="Search products"
            />

            {value && (
                <button
                    type="button"
                    className="search-bar__clear"
                    onClick={() => onChange("")}
                    aria-label="Clear search"
                >
                    ×
                </button>
            )}
        </div>
    );
};

export default SearchBar;