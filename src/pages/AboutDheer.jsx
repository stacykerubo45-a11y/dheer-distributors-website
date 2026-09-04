import "../styles/AboutDheer.css";

import {
  FaMapMarkerAlt,
  FaDownload,
  FaTools,
  FaIndustry,
} from "react-icons/fa";

import companyProfile from "../assets/Dheer Company Profile .pdf";

export default function AboutDheer() {
  return (
    <>
      <section className="dheer-about-page">
        <div className="about-hero">
          <div className="overlay">
            <h1>About Dheer Distributors Ltd</h1>
            <p>
              Delivering quality tools, hardware, fasteners and industrial
              solutions across Kenya.
            </p>
          </div>
        </div>

        <div className="company-story">
          <div className="story-text">
            <h2>Who We Are</h2>

            <p>
             At Dheer Distributors Ltd, we have set the standards for
            excellence in everything we do. With years of experience in
            wholesale and retail, we offer competitive prices and efficient
            delivery in Nairobi and countrywide. Our aim is to provide the
            highest level of service in the shortest time.
            Partner with us and let us support your success!
            </p>

            <p>
              We are committed to providing quality products at competitive
              prices while ensuring efficient deliveries and exceptional
              customer service.
            </p>
          </div>

          <div className="story-images">
           <img
                  src={`${import.meta.env.BASE_URL}images/about/about-ingco.webp`}
                  alt="About Ingco photo"
                  loading="lazy"
                />

            <img
              src={`${import.meta.env.BASE_URL}images/about/about-total.webp`}
              alt="Warehouse"
              loading="lazy"
            />
          </div>
        </div>

        <section className="mission-vision">
          <div className="card">
            <h3>Mission</h3>
            <p>
              To deliver quality tools and hardware at competitive prices while
              building lasting relationships through value, service and
              commitment.
            </p>
          </div>

          <div className="card">
            <h3>Vision</h3>
            <p>
              To lead in customer service by strengthening our brands and
              providing exceptional service that exceeds customer expectations.
            </p>
          </div>
        </section>

        <section className="categories-section">
          <h2>Our Product Categories</h2>

          <div className="categories-grid">
            <div className="category-card">
              <FaTools />
              <h4>Power Tools</h4>
            </div>

            <div className="category-card">
              <FaIndustry />
              <h4>Fasteners</h4>
            </div>

            <div className="category-card">
              <FaTools />
              <h4>Hand Tools</h4>
            </div>

            <div className="category-card">
              <FaIndustry />
              <h4>Safety Equipment</h4>
            </div>

            <div className="category-card">
              <FaTools />
              <h4>Plumbing Tools</h4>
            </div>

            <div className="category-card">
              <FaIndustry />
              <h4>Garden Tools</h4>
            </div>
          </div>
        </section>

        <section className="pdf-section">
          <h2>Company Profile</h2>

          <p>
            View or download our complete company profile to learn more about
            our products and services.
          </p>

          <a
            href={companyProfile}
            download
            className="download-btn"
          >
            <FaDownload />
            Download Profile
          </a>

          <div className="pdf-viewer">
            <iframe
              src={companyProfile}
              title="Dheer Company Profile"
            />
          </div>
        </section>

        <section className="location-section">
          <h2>Visit Us</h2>

          <div className="location-card">
            <FaMapMarkerAlt className="location-icon" />

            <div>
              <h3>Our Location</h3>

              <p>
                Nairobi Park Road, Opposite Blue Hut Hotel
              </p>

              <p>+254 705 731 829</p>
            </div>
          </div>

          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Park%20Road%20Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          />
        </section>
      </section>

      <footer className="about-footer">
        <div>
          <h3>Dheer Distributors Ltd</h3>

          <p>
            Your trusted partner for tools, hardware, industrial supplies and
            construction solutions.
          </p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>+254 705 731 829</p>
          <p>Nairobi, Kenya</p>
        </div>
      </footer>
    </>
  );
}