import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import DiamondShop from "./Components/DiamondShop/DiamondShop";
import Category from './Components/Category/Category';
import Collection from "./Components/Collection/Collection";
// import OurWorks from './Components/OurWorks/OurWorks';
import Experience from "./Components/Experience/Experience";
import Cta from "./Components/Cta/Cta";
import SubCta from "./Components/SubCta/SubCta";
import './app.css'
import SwiperSlider from "./Components/SwiperSlider/SwiperSlider";
function App() {
  return (
    <div className="App max-w-[1400px] py-3 app-bg rounded-3xl mx-auto">

      <Navbar/>
      <Home/>
      <DiamondShop/>
      <Category/>
      {/* <OurWorks/> */}
      <Collection/>
      <Experience/>
      <Cta/>
      <SubCta/>
    </div>
  );
}

export default App;
