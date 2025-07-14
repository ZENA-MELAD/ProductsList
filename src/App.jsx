import "./App.css";
import Card from "./Components/Card/Card";
import YourCart from "./Components/YourCart/YourCart";
function App() {
  return (
    <div className="bg-pink-50  w-full min-h-screen p-6   flex flex-col  xs:flex xs:flex-row md:p-12  ">
      <div className="w-full mb-6 xs:w-3/5 xs:mb-0 lg:w-2/3 lg:mr-2.5">
        <h1 className=" capitalize text-3xl font-bold mb-4">desserts</h1>
        <div className=" w-full  grid grid-cols-1 gap-y-6  xs:grid xs:grid-cols-2 xs:gap-3 xs:gap-y-3  lg:grid lg:grid-cols-3 lg:gap-4  ">
          <Card />
        </div>
      </div>
      <div className="bg-white w-full h-48 xs:w-2/5  xs:h-44 xs: ml-2.5 lg:w-1/3  rounded-lg p-4 ">
        <YourCart/>
      </div>
    </div>
  );
}

export default App;
