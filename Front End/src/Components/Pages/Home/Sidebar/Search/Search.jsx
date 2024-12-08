
const Search = ({ searchValue, setSearchValue }) => {

    return (
        <div className="flex justify-center items-center py-8 px-2">
            <div className="relative w-full max-w-md">
                <input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-4.35-4.35M10 16a6 6 0 1112 0 6 6 0 01-12 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Search;
