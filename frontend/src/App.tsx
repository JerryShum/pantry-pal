import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="home">
      <h1>Welcome to my app</h1>
      <p>
        This is a simple application built with Vite and React. It's a great
        starting point for building your own applications.
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click me {count} times
        </button>
      </div>
    </div>
  );
}

export default App;
