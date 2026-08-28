import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutSection from "./pages/AboutSection";
import Categories from "./components/Categories";
import BestSellingProducts from "./components/BestSellingProducts";
import TrustedBrands from "./components/TrustedBrands";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <AboutSection />
        <Categories />
        <BestSellingProducts />
        <TrustedBrands />
        <Footer />
      </main>
    </>
  );
}

export default App;