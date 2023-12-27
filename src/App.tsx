import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Deno Deploy Sample</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <h2>change file</h2>
    </main>
  );
}

export default App;
