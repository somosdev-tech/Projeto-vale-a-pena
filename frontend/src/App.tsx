import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Projeto Vale a Pena com React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Clique no botão de contagem {count}
        </button>

      </div>
      <p className="read-the-docs">
        Sejam Bem vindos, que todos possam adquirir bastante conhecimento!
      </p>
    </div>
  )
}

export default App
