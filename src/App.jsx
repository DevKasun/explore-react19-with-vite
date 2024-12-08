// src/App.jsx
import { useState } from "react";
import ExpensiveComponent from "./components/PerformanceTest";
import FormExample from "./components/FormExample";
import FormActionExample from "./components/FormActionExample";

function App() {
  const [count, setCount] = useState(0);
  const [data] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="w-full grid grid-cols-2 bg-yellow-50">
      <div className="p-8 flex flex-col gap-4 items-center">
        <h3 className="text-2xl">Performance Test</h3>
        <button
          className="bg-blue-600 text-white p-2 rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Count: {count}
        </button>
        <ExpensiveComponent data={data} />
      </div>
      <div className="p-8 flex flex-col gap-4 items-center">
        <h3 className="text-2xl">Form and input ref</h3>
        <FormExample />
      </div>
      <div className="p-8 flex flex-col gap-4 items-center">
        <h3 className="text-2xl">Form Action</h3>
        <FormActionExample />
      </div>
    </div>
  );
}

export default App;
