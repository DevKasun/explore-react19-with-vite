import FormActionExample from "./components/FormActionExample";
import FormActionSeverSide from "./components/FormActionServerSide";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-12 place-items-center bg-yellow-50 p-8">
      <h1 className="text-3xl">Form Actions in action 😉</h1>
      <FormActionExample />
      <FormActionSeverSide />
    </div>
  );
}

export default App;
