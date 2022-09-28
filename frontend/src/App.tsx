import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
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
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Sejam Todos bem vindos ao projeto Vale-a-Pena!!!</p>
      </header>
>>>>>>> ee796b8c297be2869148b326ab2ab49b507177e7
    </div>
  );
}

export default App;
