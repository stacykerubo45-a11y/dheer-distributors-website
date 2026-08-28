import "../styles/TrustedBrands.css";

const brands = [
  {
    name: "Total",
    logo: "/images/brands/total.webp",
  },
  {
    name: "Bosch",
    logo: "/images/brands/bosch.webp",
  },
  {
    name: "Ingco",
    logo: "/images/brands/ingco.webp",
  },
  {
    name: "Tolsen",
    logo: "/images/brands/tolsen.webp",
  },
  {
    name: "Deli",
    logo: "/images/brands/deli.webp",
  },
  {
    name: "Uyustools",
    logo: "/images/brands/uyustools.webp",
  },
  {
    name: "Stanley",
    logo: "/images/brands/stanley.webp",
  },
  {
    name: "Wadfow",
    logo: "/images/brands/wadfow.webp",
  },
  {
    name: "Prescott",
    logo: "/images/brands/prescott.webp",
  },
  {
    name: "Proskit",
    logo: "/images/brands/proskit.webp",
  },
  {
    name: "Makita",
    logo: "/images/brands/makita.webp",
  },
  {
    name: "Makute",
    logo: "/images/brands/makute.webp",
  },
  {
    name: "Tanquin",
    logo: "/images/brands/tanquin.webp",
  },
  {
    name: "Fixtec",
    logo: "/images/brands/fixtec.webp",
  },
  {
    name: "Worksite",
    logo: "/images/brands/worksite.webp",
  },
  {
    name: "Black & Decker",
    logo: "/images/brands/black-decker.webp",
  },
  {
    name: "CAT",
    logo: "/images/brands/cat.webp",
  },
  {
    name: "Ryobi",
    logo: "/images/brands/ryobi.webp",
  },
];

export default function TrustedBrands() {
  /*
    Duplicate the brands so the animation can loop
    continuously without an empty space.
  */
  const scrollingBrands = [...brands, ...brands];

  return (
    <section className="trusted-brands">
      <div className="trusted-brands-container">

        <div className="trusted-brands-heading">
          <span>OUR PARTNERS</span>
          <h2>Trusted Brands</h2>
          <p>
            Quality products from brands trusted by professionals.
          </p>
        </div>

        <div className="brands-slider">
          <div className="brands-track">
            {scrollingBrands.map((brand, index) => (
              <a
                href={`/brand/${brand.name
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("&", "and")}`}
                className="trusted-brand"
                key={`${brand.name}-${index}`}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}