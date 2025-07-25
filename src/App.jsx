import "./App.css";
import Card from "./Components/Card/Card";
import YourCart from "./Components/YourCart/YourCart";
function App() {
  return (
    <div className="bg-pink-50  w-full min-h-screen p-6   flex flex-col  xs:flex xs:flex-row xs:justify-center md:p-12 xl:p-14  ">
      <div className="w-full mb-6 xs:w-3/5 xs:mb-0 md:w-7/12 md:mr-2.5 xl:w-1/2">
        <h1 className=" capitalize text-3xl font-bold mb-4">desserts</h1>
        <div className=" w-full  grid grid-cols-1 gap-y-6  xs:grid xs:grid-cols-2 xs:gap-3 xs:gap-y-3  lg:grid lg:grid-cols-3">
          <Card />
        </div>
      </div>
      <div className="bg-white w-full h-fit p-4.5 ml-0 xs:w-2/5 xs:ml-2.5  xs:p-2.5 md:p-3.5 md:w-1/3 lg:p-4.5 xl:w-[28%] rounded-lg ">
        <YourCart/>
      </div>
    </div>
  );
}

export default App;
