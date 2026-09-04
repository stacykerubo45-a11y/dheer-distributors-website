
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutDheer from "./pages/AboutDheer";
import AboutSection from "./pages/AboutSection";
import Categories from "./components/Categories";
import BestSellingProducts from "./components/BestSellingProducts";
import TrustedBrands from "./components/TrustedBrands";

import "./App.css";

function Homepage() {
  return (
    <>
      <Home />
      <AboutSection />
      <Categories />
      <BestSellingProducts />
      <TrustedBrands />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-dheer" element={<AboutDheer />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

