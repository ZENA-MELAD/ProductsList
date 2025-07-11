import "./App.css";
import Card from "./Components/Card/Card";
function App() {
  return (
    <div className="bg-pink-50  w-full min-h-screen p-6 xs:p-10 md:p-12 lg:p-20">
      <h1 className=" capitalize text-3xl font-bold mb-4">desserts</h1>
      <div className=" w-full  grid grid-cols-1 gap-y-6 xs:w-2/3 xs:grid xs:grid-cols-2 xs:gap-4 xs:gap-y-6  lg:grid lg:grid-cols-3 lg:gap-4 lg:gap-y-6">
        <Card />
      </div>
    </div>
  );
}

export default App;
