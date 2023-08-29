import Collection from "./Components/Collection/Collection";
import DiamondShop from "./Components/DiamondShop/DiamondShop";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import './app.css'
function App() {
  return (
    <div className="App max-w-[1400px] py-3 app-bg rounded-3xl mx-auto">
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <DiamondShop/> */}
      <Collection/>
    </div>
  );
}

export default App;
