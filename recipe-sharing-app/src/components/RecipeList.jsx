import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = (id) => favorites.includes(id);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          {isFavorite(recipe.id) ? (
            <button onClick={() => removeFavorite(recipe.id)}>💔 Remove Favorite</button>
          ) : (
            <button onClick={() => addFavorite(recipe.id)}>❤️ Add to Favorites</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
