export default function RecipeDetails({ recipe, onClose }) {
  if (!recipe) return null;

  // Extract ingredients and measures dynamically
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 z-50 overflow-auto">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-lg"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4">{recipe.strMeal}</h2>
        <p className="text-sm text-gray-500 mb-4">
          Category: <span className="font-medium">{recipe.strCategory}</span> | Cuisine: <span className="font-medium">{recipe.strArea}</span>
        </p>

        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-64 object-cover rounded mb-4"
        />

        <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside mb-4">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
        <p className="mb-4 whitespace-pre-line">{recipe.strInstructions}</p>

        {recipe.strYoutube && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Video:</h3>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`}
              title={recipe.strMeal}
              frameBorder="0"
              allowFullScreen
              className="rounded"
            ></iframe>
          </div>
        )}

        {recipe.strSource && (
          <a
            href={recipe.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:underline"
          >
            View full recipe source
          </a>
        )}
      </div>
    </div>
  );
}