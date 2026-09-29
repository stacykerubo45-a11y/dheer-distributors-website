import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Mail,
  Phone,
  Search,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);

  const categories = [
    {
      name: "Power Tools & Accessories",
      description: "Drills, grinders, cutters and accessories",
    },
    {
      name: "General Hardware & Hand Tools",
      description: "Hammers, wrenches, pliers and more",
    },
    {
      name: "Fasteners",
      description: "Bolts, nuts, screws and fixing solutions",
    },
    {
      name: "Sealants & Adhesives",
      description: "Adhesives, sealants and bonding products",
    },
    {
      name: "Plumbing & Galvanised Fittings",
      description: "Pipes, valves and GI fittings",
    },
    {
      name: "Agriculture & Gardening Tools",
      description: "Hoses, pruners, rakes and garden tools",
    },
    {
      name: "Castor Roller Wheels",
      description: "Wheels and castors for various applications",
    },
    {
      name: "PVC Hose Pipes",
      description: "Durable hoses for different applications",
    },
    {
      name: "Safety Products",
      description: "Protective equipment and safety essentials",
    },
  ];

  const brands = [
    "Bosch",
    "Ryobi",
    "Tolsen",
    "Ingco",
    "Total",
    "Makute",
    "Uyustools",
  ];

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  const toggleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
    setBrandsOpen(false);
  };

  const toggleBrands = () => {
    setBrandsOpen(!brandsOpen);
    setCategoriesOpen(false);
  };

  return (
    <header className="navbar">

      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <div className="top-left">

          <div className="contact-item">
            <Mail size={20} />
            <span>dheerdistributorsltd@gmail.com</span>
          </div>

          <div className="contact-item">
            <Phone size={20} />
            <span>+254 705 731 829</span>
          </div>

        </div>

        <div className="social-section">
          <span>Follow us:</span>

          <div className="social-divider"></div>

  <div className="social-icons">
    <a
      href="https://wa.me/254705731829"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </a>

    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>

    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok"
    >
      <FaTiktok />
    </a>

    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <FaFacebookF />
    </a>
  </div>
</div>
        </div>
     
      {/* ================= MAIN NAV ================= */}
      <div className="main-nav">

        {/* Logo */}
        <div className="logo-container">
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="Dheer Distributors"
            className="logo"
          />
        </div>

        {/* Search */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for products..."
          />

          <button className="search-button">
            <Search size={27} />
          </button>
        </div>

        {/* Cart */}
        <button className="cart-button">
          <ShoppingCart size={25} />
          <span>CART</span>
          <span className="cart-count">0</span>
        </button>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* ================= NAV LINKS ================= */}
      <nav
        className={`navigation ${mobileMenu ? "mobile-open" : ""}`}
      >

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMobileMenu}
        >
          HOME
        </NavLink>

        <NavLink
          to="/about-dheer"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMobileMenu}
        >
          ABOUT US
        </NavLink>

        <a href="/shop" onClick={closeMobileMenu}>
          SHOP
        </a>

        {/* ================= CATEGORIES ================= */}
     {/* ================= CATEGORIES ================= */}
<div className={`category-wrapper ${categoriesOpen ? "open" : ""}`}>
  <button
    className="category-button"
    onClick={() => {
      setCategoriesOpen((prev) => !prev);
      setBrandsOpen(false);
    }}
  >
    <span>CATEGORIES</span>
    <ChevronDown
      size={18}
      className={categoriesOpen ? "arrow-up" : ""}
    />
  </button>

  <div className="category-menu">
    <div className="dropdown-title">PRODUCT CATEGORIES</div>

    {categories.map((category) => (
      <a
        href={`/category/${category.name
          .toLowerCase()
          .replaceAll(" ", "-")
          .replaceAll("&", "and")}`}
        key={category.name}
        className="category-item"
        onClick={() => {
          setCategoriesOpen(false);
          setMobileMenu(false);
        }}
      >
        <div className="category-item-content">
          <span>{category.name}</span>
          <p className="category-description">
            {category.description}
          </p>
        </div>
      </a>
    ))}
  </div>
</div>

{/* ================= BRANDS ================= */}
<div className={`category-wrapper ${brandsOpen ? "open" : ""}`}>
  <button
    className="category-button"
    onClick={() => {
      setBrandsOpen((prev) => !prev);
      setCategoriesOpen(false);
    }}
  >
    <span>BRANDS</span>
    <ChevronDown
      size={16}
      className={brandsOpen ? "arrow-up" : ""}
    />
  </button>

  <div className="brands-menu">
    <div className="dropdown-heading">
      <span>BRANDS WE STOCK</span>
      <small>Quality brands available</small>
    </div>

    <div className="brand-items">
      {brands.map((brand) => (
        <a
          key={brand}
          href={`/brand/${brand
            .toLowerCase()
            .replaceAll(" ", "-")}`}
          className="brand-item"
          onClick={() => {
            setBrandsOpen(false);
            setMobileMenu(false);
          }}
        >
          <span>{brand}</span>
        </a>
      ))}
    </div>
  </div>
</div>

        <a href="/contact" onClick={closeMobileMenu}>
          CONTACT US
        </a>

      </nav>
<a
  href="https://wa.me/254705731829?text=Hello%20Dheer%20Distributors,%20I%20would%20like%20to%20place%20an%20order."
  className="whatsapp-order-button"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Order on WhatsApp"
>
  <FaWhatsapp />
  <span>Order on WhatsApp</span>
</a>
    </header>
  );
}