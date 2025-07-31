import "./App.css";
import Card from "./Components/Card/Card";
import YourCart from "./Components/YourCart/YourCart";
import config from "./Constants/environment";
import useGet from "./Custom Hooks/useGet";
function App() {
  const [products, loading] = useGet(config.desserts);
  return (
    <div className="bg-pink-50 w-full min-h-screen p-6 sm:flex sm:flex-row sm:justify-center sm:items-start sm:space-x-1.5 lg:p-12">
      {loading ? (
        <div className="w-full  flex flex-col justify-center items-center py-20">
          <div className="w-10 h-10 rounded-full border-4 border-pink-300 border-t-transparent animate-spin"></div>
          <p className=" capitalize text-2xl font-medium">loading products</p>
        </div>
      ) : (
        <>
          <div className="w-full mb-6  xs:mb-0 sm:mr-3 md:w-1/2 lg:w-2/3">
            <h1 className=" capitalize text-4xl font-bold mb-4 ">desserts</h1>
            <div className="grid grid-cols-1 gap-y-6  xs:grid xs:grid-cols-3 xs:gap-3 xs:gap-y-5 sm:grid sm:grid-cols-2  lg:grid lg:grid-cols-3">
              <Card allProducts={products} />
            </div>
          </div>
          <div className="bg-white w-full h-fit p-4.5 ml-0 xs:w-2/3 xs:mt-8   sm:mt-0 sm:sticky sm:top-6 md:w-2/5 lg:w-1/3 lg:p-4.5 rounded-lg ">
            <YourCart />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
