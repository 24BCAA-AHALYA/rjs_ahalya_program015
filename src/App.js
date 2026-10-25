import useToggle from "./useToggle";
import "./App.css";

function App() {
  const [isOn, toggle] = useToggle(false);

  return (
    <main className="app">
      <h1>Custom Toggle Hook</h1>

      <div className="toggle-card">
        <h2>Status: {isOn ? "ON" : "OFF"}</h2>

        <button onClick={toggle}>Toggle</button>
      </div>
    </main>
  );
}

export default App;
