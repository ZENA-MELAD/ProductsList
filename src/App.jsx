import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  return (
    <div className="bg-pink-50  w-full min-h-screen p-14">
      <h1 className=" capitalize text-3xl font-bold mb-4">desserts</h1>
      <div className="w-4/5 grid grid-cols-3 gap-4">
      <Card/>
      </div>
    </div>
  )
}

export default App;
