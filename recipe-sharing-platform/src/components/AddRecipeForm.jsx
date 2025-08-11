import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredientsText, setIngredientsText] = useState("");
  const [stepsText, setStepsText] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    const titleOk = title.trim().length > 0;
    const ingredients = ingredientsText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
    const steps = stepsText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    if (!titleOk) e.title = "Title is required.";
    if (ingredients.length < 2) e.ingredients = "Add at least two ingredients.";
    if (steps.length < 1) e.steps = "Add at least one step.";

    setErrors(e);
    return { ok: Object.keys(e).length === 0, ingredients, steps };
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const { ok, ingredients, steps } = validate();
    if (!ok) return;

    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      summary: steps[0]?.slice(0, 120) || "User submitted recipe.",
      image: image.trim() || "https://via.placeholder.com/640x360?text=New+Recipe",
      ingredients,
      steps,
    };

    const KEY = "customRecipes";
    const existing = JSON.parse(localStorage.getItem(KEY) || "[]");
    localStorage.setItem(KEY, JSON.stringify([...existing, newRecipe]));

    navigate(`/recipe/${newRecipe.id}`);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-3xl px-4 py-8 md:py-12">
        <Link to="/" className="text-emerald-700 hover:underline">&larr; Back</Link>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold">Add a New Recipe</h1>
        <p className="mt-2 text-gray-600">Fields marked * are required. Put each ingredient/step on a new line.</p>

        <form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium">Title *</label>
            <input
              id="title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`mt-1 w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-emerald-600 ${errors.title ? "border-red-500" : "border-gray-300"}`}
              aria-invalid={!!errors.title}
              aria-describedby={errors.title ? "title-err" : undefined}
            />
            {errors.title && <p id="title-err" className="mt-1 text-sm text-red-600">{errors.title}</p>}
          </div>

          {/* Ingredients */}
          <div>
            <label htmlFor="ingredients" className="block text-sm font-medium">Ingredients * (one per line)</label>
            <textarea
              id="ingredients"
              required
              rows="5"
              value={ingredientsText}
              onChange={(e) => setIngredientsText(e.target.value)}
              className={`mt-1 w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-emerald-600 ${errors.ingredients ? "border-red-500" : "border-gray-300"}`}
              aria-invalid={!!errors.ingredients}
              aria-describedby={errors.ingredients ? "ingredients-err" : undefined}
              placeholder={"2 cups rice\n1 onion\n1 tsp salt"}
            />
            {errors.ingredients && <p id="ingredients-err" className="mt-1 text-sm text-red-600">{errors.ingredients}</p>}
          </div>

          {/* Steps */}
          <div>
            <label htmlFor="steps" className="block text-sm font-medium">Preparation steps * (one per line)</label>
            <textarea
              id="steps"
              required
              rows="6"
              value={stepsText}
              onChange={(e) => setStepsText(e.target.value)}
              className={`mt-1 w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-emerald-600 ${errors.steps ? "border-red-500" : "border-gray-300"}`}
              aria-invalid={!!errors.steps}
              aria-describedby={errors.steps ? "steps-err" : undefined}
              placeholder={"Chop onions\nHeat oil\nAdd onions and fry 3 min"}
            />
            {errors.steps && <p id="steps-err" className="mt-1 text-sm text-red-600">{errors.steps}</p>}
          </div>

          {/* Image (optional) */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium">Image URL (optional)</label>
            <input
              id="image"
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="mt-1 w-full rounded-xl border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-emerald-600"
              placeholder="https://…"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full md:w-auto px-5 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition"
            >
              Save Recipe
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
