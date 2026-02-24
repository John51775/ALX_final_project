export default function RecipeCard({ recipe, onClick }) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
      onClick={() => onClick(recipe)}
    >
      {/* Recipe image */}
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />

      {/* Recipe info */}
      <div className="p-4">
        <h2 className="text-lg md:text-xl font-semibold mb-1">{recipe.strMeal}</h2>
        <p className="text-sm text-gray-500">
          Category: <span className="font-medium">{recipe.strCategory}</span>
        </p>
        <p className="text-sm text-gray-500">
          Cuisine: <span className="font-medium">{recipe.strArea}</span>
        </p>
      </div>
    </div>
  );
}