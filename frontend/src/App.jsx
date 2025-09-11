import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
        <div className="flex gap-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="transition-transform hover:scale-110">
            <img src={viteLogo} className="h-20 w-20" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110">
            <img src={reactLogo} className="h-20 w-20" alt="React logo" />
          </a>
        </div>

        <h1 className="text-4xl font-bold mb-6">Vite + React</h1>

        <div className="card bg-white shadow-lg rounded-xl p-6 mb-6 flex flex-col items-center">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors mb-4"
          >
            count is {count}
          </button>
          <p className="text-gray-600">
            Edit <code className="bg-gray-200 px-1 rounded">src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <p className="text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
