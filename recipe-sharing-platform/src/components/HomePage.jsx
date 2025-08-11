import { useEffect, useState } from "react";
import data from "../data.json"; // Vite supports JSON imports

function RecipeCard({ recipe }) {
  return (
    <li className="group rounded-2xl bg-white border shadow-sm overflow-hidden transition hover:shadow-xl hover:-translate-y-0.5">
      <div className="aspect-[16/10] w-full bg-gray-100 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{recipe.title}</h2>
        <p className="mt-1 text-sm text-gray-600">{recipe.summary}</p>
        {/* Placeholder link for now; will point to /recipes/:id when routing is added */}
        <a
          href="#"
          className="mt-3 inline-block text-emerald-700 font-medium hover:underline"
          aria-disabled="true"
        >
          View details
        </a>
      </div>
    </li>
  );
}

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load data "on mount"
  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-7xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Featured Recipes</h1>
          <p className="text-gray-600 mt-1">
            Browse simple, tasty dishes to try at home.
          </p>
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
