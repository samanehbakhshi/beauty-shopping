// import { Virtual } from "swiper";
import "./App.css";
import Header from "./components/header/Header";
import Hero from './components/hero/Hero'
import Slider from "./components/slider/Slider";
import Virtual from './components/virtual/Virtual';
import Products from "./components/products/Products";
import Testimonial from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
