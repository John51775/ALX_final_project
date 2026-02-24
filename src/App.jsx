import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";
import Footer from "./components/footer";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Handle search from SearchBar
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Fetch recipes whenever searchQuery changes
  useEffect(() => {
    if (!searchQuery) return;

    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
        );
        const data = await response.json();

        if (data.meals) {
          setRecipes(data.meals);
        } else {
          setRecipes([]);
        }
      } catch (err) {
        setError("Failed to fetch recipes. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [searchQuery]);

  // When a card is clicked, show modal
  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex-grow">
      <SearchBar onSearch={handleSearch} />

      {/* Loading / Error / No Results */}
      {loading && <p className="text-center mt-4">Loading recipes...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}
      {!loading && !error && searchQuery && recipes.length === 0 && (
        <p className="text-center mt-4 text-gray-600">
          No recipes found for <span className="font-bold">{searchQuery}</span>
        </p>
      )}

      {/* Recipe Grid */}
      {!loading && !error && recipes.length > 0 && (
        <div className="px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              onClick={handleCardClick}
            />
          ))}
        </div>
      )}

      {/* Recipe Details Modal */}
      {selectedRecipe && (
        <RecipeDetails recipe={selectedRecipe} onClose={handleCloseModal} />
      )}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
