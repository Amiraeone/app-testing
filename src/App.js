import Counter from "./Counter";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo/>
        <hr />
        <Counter />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
