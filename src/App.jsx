// src/App.jsx
import { useState } from "react";
import ExpensiveComponent from "./PerformanceTest";

function App() {
  const [count, setCount] = useState(0);
  const [data] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ExpensiveComponent data={data} />
    </div>
  );
}

export default App;
