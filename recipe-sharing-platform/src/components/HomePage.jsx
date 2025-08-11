import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

function RecipeCard({ recipe }) {
  return (
    <li className="group rounded-2xl bg-white border shadow-sm overflow-hidden transition hover:shadow-xl hover:-translate-y-0.5">
      <Link to={`/recipe/${recipe.id}`} className="block focus:outline-none focus:ring-2 focus:ring-emerald-600">
        <div className="aspect-[16/10] w-full bg-gray-100 overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg md:text-xl font-semibold">{recipe.title}</h2>
          <p className="mt-1 text-sm md:text-base text-gray-600">{recipe.summary}</p>
          <span className="mt-3 inline-block text-emerald-700 font-medium group-hover:underline">
            View details →
          </span>
        </div>
      </Link>
    </li>
  );
}

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => setRecipes(data), []);
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-7xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Featured Recipes</h1>
          <p className="text-gray-600 mt-1">Browse simple, tasty dishes to try at home.</p>
        </header>

        {recipes.length === 0 ? (
          <p className="text-gray-500">No recipes found.</p>
        ) : (
          <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {recipes.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
