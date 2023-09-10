import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
// import DiamondShop from "./Components/DiamondShop/DiamondShop";
import Collection from "./Components/Collection/Collection";
import Experience from "./Components/Experience/Experience";
import SubCta from "./Components/SubCta/SubCta";
// import Cta from "./Components/Cta/Cta";
// import Category from './Components/Category/Category';
// import OurWorks from './Components/OurWorks/OurWorks';
import './app.css'
function App() {
  return (
    <div className="App max-w-[1400px] py-3 app-bg rounded-3xl mx-auto">
      <Navbar/>
      <Home/>
      {/* <DiamondShop/> */}
      <Collection/>
      {/* <OurWorks/> */}
      <Experience/>
      <SubCta/>
      {/* <Cta/> */}
      {/* <Category/> */}
    </div>
  );
}

export default App;
