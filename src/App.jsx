import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (!searchQuery) return; // Don't fetch if query is empty

    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
        );
        const data = await response.json();

        if (data.meals) {
          setRecipes(data.meals); // API returns meals array
        } else {
          setRecipes([]); // No results found
        }
      } catch (err) {
        setError("Failed to fetch recipes. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <SearchBar onSearch={handleSearch} />

      {/* Show loading, error, or recipe count */}
      {loading && <p className="text-center mt-4">Loading recipes...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}
      {!loading && !error && searchQuery && recipes.length === 0 && (
        <p className="text-center mt-4 text-gray-600">
          No recipes found for <span className="font-bold">{searchQuery}</span>
        </p>
      )}

      {/* Recipe list will go here */}
      {!loading && !error && recipes.length > 0 && (
        <p className="text-center mt-4 text-gray-600">
          Showing {recipes.length} results for{" "}
          <span className="font-bold">{searchQuery}</span>
        </p>
      )}
    </div>
  );
}

export default App;
