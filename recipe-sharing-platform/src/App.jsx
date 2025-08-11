import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-2xl shadow-lg border w-full max-w-xl">
        <h1 className="text-3xl font-bold text-blue-600">Recipe Sharing Platform</h1>
        <p className="mt-2 text-gray-600">
          Tailwind is working if this heading is blue 💙
        </p>
        <button className="mt-6 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}

export default App;