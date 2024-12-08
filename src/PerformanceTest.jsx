// src/components/PerformanceTest.jsx
function ExpensiveComponent({ data }) {
  // Expensive calculation
  const processedData = data.map((item) => item * 2);

  return (
    <div>
      {processedData.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
}

export default ExpensiveComponent;
