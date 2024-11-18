import { useState } from "react";

function SearchBar({ onSearch }) {
    const [value, setValue] = useState("");

    const handleSearch = () => {
        onSearch(value); // Pass the search value to the parent component
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        onSearch(e.target.value); // Automatically search as user types
    };

    return (
        <div className="m-6 ">
            <div className="flex space-x-2">
                <input
                    type="text"
                    placeholder="Search books..."
                    value={value}
                    onChange={handleChange}
                    className="w-52  px-4 border border-[#E2703A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8225] transition"
                />
                <button
                    type="button"
                    onClick={handleSearch}
                    className=" px-4 bg-[#E2703A] text-white rounded-lg hover:bg-[#EEB76B] transition"
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
