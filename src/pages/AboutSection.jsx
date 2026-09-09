
import { Link } from "react-router-dom";
import "../styles/AboutSection.css";

export default function AboutSection() {
  const galleryItems = [
    {
      image: "fasteners.webp",
      alt: "Fasteners",
      caption: "Fasteners",
    },
    {
      image: "power-tools.webp",
      alt: "Power Tools",
      caption: "Power Tools",
    },
    {
      image: "electrical.webp",
      alt: "Electrical Supplies",
      caption: "Electricals",
    },
    {
      image: "plumbing.webp",
      alt: "Plumbing Materials",
      caption: "Plumbing",
    },
    {
      image: "safety.webp",
      alt: "Safety Equipment",
      caption: "Safety Equipment",
    },
    {
      image: "hand-tools.webp",
      alt: "Hand Tools",
      caption: "Hand Tools",
    },
    {
      image: "compressors-pneumatic.webp",
      alt: "Compressors and Pneumatics",
      caption: "Compressors & Pneumatics",
    },
    {
      image: "accessories.webp",
      alt: "Tool Accessories",
      caption: "Accessories",
    },
    {
      image: "general-hardware.webp",
      alt: "General Hardware",
      caption: "General Hardware",
    },
    {
      image: "gardening.webp",
      alt: "Gardening Supplies",
      caption: "Gardening",
    },
    {
      image: "water-pump-side.webp",
      alt: "Water Pumps",
      caption: "Water Pumps",
    },
  ];

  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="about-container">

        {/* TEXT CONTENT */}
        <article className="about-content">

          <p className="about-eyebrow">
            About Dheer Distributors
          </p>

          <h2 className="about-title">
            About Us
          </h2>

          <div className="about-accent"></div>

          <p>
            At Dheer Distributors Ltd, we have set the standards for
            excellence in everything we do. With years of experience in
            wholesale and retail, we offer competitive prices and efficient
            delivery in Nairobi and countrywide. Our aim is to provide the
            highest level of service in the shortest time.
            Partner with us and let us support your success!
          </p>

          <h2 className="about-title">
            Mission
          </h2>

          <p>
            At Dheer Distributors Ltd, our mission revolves around three core
            principles: Value, Service, and Commitment.
            These pillars drive our efforts to cultivate enduring
            relationships with our Customers and Suppliers.
          </p>

          <h2 className="about-title">
            Vision
          </h2>

          <p>Dheer Distributors is committed to being a one-stop 
            solution for quality tools and hardware, offering a comprehensive
             range at highly competitive prices. Our extensive catalogue spans
              power tools, pneumatic equipment, air compressors, and the essential
               accessories that support them  allowing our customers to source everything
                they need from a single, reliable supplier.
What distinguishes Dheer Distributors, however, is our unwavering focus on customer 
service. This commitment to service excellence, combined with a carefully curated selection of quality products, has established us as one of Kenya's leading suppliers of tools and hardware.


          </p>

          <Link
            to="/about-dheer"
            className="about-link"
          >
            <span>Learn More</span>

            <span
              className="about-link-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </Link>

        </article>

        {/* IMAGE GALLERY */}
        <figure className="about-gallery">

          <div className="gallery-heading">
            <span>What We Supply</span>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div
                className={`gallery-card ${
                  index === galleryItems.length - 1
                    ? "gallery-card-large"
                    : ""
                }`}
                key={item.image}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/about/${item.image}`}
                  alt={item.alt}
                  loading="lazy"
                />

                <div className="gallery-overlay"></div>

                <div className="gallery-caption">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>

          <figcaption className="gallery-main-caption">
            Quality tools, hardware and building supplies — delivered
            across Kenya.
          </figcaption>

        </figure>

      </div>
    </section>
  );
}
