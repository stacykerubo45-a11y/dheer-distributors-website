
import "../styles/Categories.css";

const categories = [
  {
    title: "Power Tools",
    image: "/images/categories/power-tools.webp",
    description: "Drills, grinders, saws and other high-performance power tools.",
  },
  {
    title: "Hand Tools",
    image: "/images/categories/hand-tools.webp",
    description: "Hammers, wrenches, screwdrivers and durable hand tools.",
  },
  {
    title: "Fasteners",
    image: "/images/categories/fasteners.webp",
    description: "Bolts, nuts, screws and other reliable fastening solutions.",
  },
  {
    title: "Plumbing Materials",
    image: "/images/categories/plumbing.webp",
    description: "Pipes, fittings, valves and essential plumbing supplies.",
  },
  {
    title: "Gardening",
    image: "/images/categories/gardening.webp",
    description: "Pruners, spades, hoes and tools for gardening and landscaping.",
  },
  {
    title: "Electricals",
    image: "/images/categories/electricals.webp",
    description: "Cables, switches, sockets and essential electrical accessories.",
  },
  {
    title: "General Hardware",
    image: "/images/categories/general-hardware.webp",
    description: "Locks, hinges, brackets and everyday hardware essentials.",
  },
];

export default function Categories() {
  return (
    <section
      className="categories-section"
      aria-labelledby="categories-title"
    >
      <div className="categories-container">

        <header className="categories-header">
          <div className="section-divider"></div>

          <p className="categories-subtitle">
            SHOP BY CATEGORY
          </p>

          <h2 id="categories-title">
            Featured Categories
          </h2>

          <p className="categories-description">
            Explore our wide range of quality tools,
            hardware and industrial supplies.
          </p>
        </header>

        <div className="categories-grid">
          {categories.map((category) => (
            <article
              key={category.title}
              className="category-card"
            >
              <img
                src={category.image}
                alt={category.title}
                loading="lazy"
              />

              <div className="category-content">
                <h3>{category.title}</h3>

                <p>
                  {category.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

