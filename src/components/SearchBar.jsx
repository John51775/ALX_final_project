import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  // Trigger search if input is not empty
  const handleSearch = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery !== "") {
      onSearch(trimmedQuery);
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Enter dish name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown} // modern replacement for onKeyPress
        className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 md:w-96"
      />
      <button
        onClick={handleSearch}
        className="bg-indigo-500 text-white px-4 py-2 rounded-r-md hover:bg-indigo-600 transition-colors"
      >
        Search
      </button>
    </div>
  );
}