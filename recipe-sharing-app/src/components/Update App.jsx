import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

...

<Route
  path="/"
  element={
    <>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </>
  }
/>
