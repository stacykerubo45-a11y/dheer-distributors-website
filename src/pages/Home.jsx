import { useEffect, useState } from "react";
import "../styles/Home.css";



const backgrounds = [
  "images/ingco-background-image.webp",
  "images/bosch-background.webp",
  "images/makita-background.webp",
  "images/makute-background.webp",
  "images/total-background.webp",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main
        className="home"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}${backgrounds[currentImage]})`,
        }}
      >
        <div className="home-overlay"></div>

        <div className="home-content">
          <p className="home-subtitle">
            DHEER DISTRIBUTORS
          </p>

          <h1>
           Everything Your Project Needs
            <br />
            <span>Under One Roof.</span>
          </h1>

          <p className="home-description">
            From power tools to plumbing fittings, we 
            supply the trade and the public with quality products 
            from trusted brands.
          </p>

          <div className="home-buttons">
            <button className="home-btn primary-btn">
              Browse Products
            </button>

            <button className="home-btn secondary-btn">
              Request a Quote
            </button>
          </div>
        </div>

        <div className="slider-dots">
          {backgrounds.map((_, index) => (
            <span
              key={index}
              className={
                index === currentImage
                  ? "dot active"
                  : "dot"
              }
            ></span>
          ))}
        </div>
      </main>

  
    </>
  );
}