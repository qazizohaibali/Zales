import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import DiamondShop from "./Components/DiamondShop/DiamondShop";
import Category from './Components/Category/Category';
import Collection from "./Components/Collection/Collection";
import Experience from "./Components/Experience/Experience";
import Cta from "./Components/Cta/Cta";
import SubCta from "./Components/SubCta/SubCta";
// import OurWorks from './Components/OurWorks/OurWorks';
import './app.css'
function App() {
  return (
    <div className="App max-w-[1400px] py-3 app-bg rounded-3xl mx-auto">
      <Navbar/>
      <Home/>
      <DiamondShop/>
      <Category/>
      <Collection/>
      {/* <OurWorks/> */}
      <Experience/>
      <Cta/>
      <SubCta/>
    </div>
  );
}

export default App;
