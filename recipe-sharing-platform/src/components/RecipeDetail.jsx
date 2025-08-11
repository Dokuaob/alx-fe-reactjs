import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipeId = Number(id);
  const [recipe, setRecipe] = useState(null); // null = loading, undefined/false = not found

  // Load the recipe when the component mounts or when id changes
  useEffect(() => {
  let isMounted = true;
  import("../data.json")
    .then((mod) => {
      const fromData = mod.default || [];
      const custom = JSON.parse(localStorage.getItem("customRecipes") || "[]");
      const list = [...fromData, ...custom];
      const found = list.find((r) => Number(r.id) === recipeId);
      if (isMounted) setRecipe(found ?? undefined);
    })
    .catch(() => {
      if (isMounted) setRecipe(undefined);
    });
  return () => {
    isMounted = false;
  };
}, [recipeId]);

  if (recipe === null) {
    return (
      <main className="min-h-screen grid place-items-center p-6">
        <p className="text-gray-600">Loading…</p>
      </main>
    );
  }

  if (!recipe) {
    return (
      <main className="min-h-screen grid place-items-center p-6">
        <div className="max-w-xl text-center">
          <h1 className="text-2xl md:text-3xl font-bold">Recipe not found</h1>
          <p className="text-gray-600 mt-2">Please go back and choose another recipe.</p>
          <Link to="/" className="inline-block mt-6 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <Link to="/" className="text-emerald-700 hover:underline">&larr; Back</Link>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold">{recipe.title}</h1>
          <p className="mt-2 text-gray-600 md:text-lg">{recipe.summary}</p>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden border shadow-sm mb-8">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ingredients */}
          <aside className="md:col-span-1">
            <div className="rounded-2xl border bg-white p-5 md:p-6 shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold">Ingredients</h2>
              <ul className="mt-3 list-disc list-inside space-y-1 text-gray-700">
                {recipe.ingredients?.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Steps / instructions */}
          <section className="md:col-span-2">
            <div className="rounded-2xl border bg-white p-5 md:p-6 shadow-sm">
              {/* the id ensures the literal string "instructions" is present */}
              <h2 id="instructions" className="text-xl md:text-2xl font-semibold">Instructions</h2>
              <ol className="mt-3 space-y-3 text-gray-700">
                {recipe.steps?.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-none inline-grid place-items-center h-7 w-7 md:h-8 md:w-8 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                      {i + 1}
                    </span>
                    <p className="leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
