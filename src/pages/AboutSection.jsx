
import "../styles/AboutSection.css";

export default function AboutSection() {
  return (
    <section
      className="about-section"
      aria-labelledby="about-title"
    >
      <div className="about-container">

        <article className="about-content">
          <header>
            <p className="about-eyebrow">
              ABOUT DHEER DISTRIBUTORS
            </p>

            <h2 id="about-title">
              Welcome to Dheer Distributors Ltd
            </h2>
          </header>

          <p>
            We have set the standards for excellence in everything we do.
            Our aim is to provide the highest level of service with the
            utmost integrity and honesty to all our customers, no matter
            how big or small.
          </p>

          <p>
            With many years of experience in the wholesale and retail
            sector, we have the capacity to supply within Nairobi and
            countrywide at very competitive prices.
          </p>

          <p>
            We are one of Kenya's leading power tools and general hardware
            suppliers. We are stockists of reputable brands such as{" "}
            <strong>Ingco, Bosch, Makute, Tolsen and Total.</strong>{" "}
            We also stock related accessories to help you make the best
            of your power tools.
          </p>

          <a
            href="https://dheer-toolstore.co.ke/about-us"
            className="about-link"
          >
            Learn More
            <span aria-hidden="true"> →</span>
          </a>
        </article>

        <figure className="about-image">
          <img
            src={`${import.meta.env.BASE_URL}images/dheer-about.webp`}
            alt="Dheer Distributors power tools and general hardware products in Kenya"
            width="800"
            height="500"
            loading="lazy"
          />

          <figcaption>
            Quality power tools and hardware products from Dheer Distributors.
          </figcaption>
        </figure>

      </div>
    </section>
  );
}

