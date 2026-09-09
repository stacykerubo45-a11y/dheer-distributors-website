
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

import { FaTiktok } from "react-icons/fa";

import "../styles/Navbar.css";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);

  const categories = [
    {
      name: "Power Tools",
      description: "Drills, Grinders, Cutters",
    },
    {
      name: "Hand Tools",
      description: "Hammers, Wrenches, Pliers",
    },
    {
      name: "Fasteners",
      description: "Bolts, Nuts, Screws",
    },
    {
      name: "Plumbing Materials",
      description: "Pipes, Fittings, Valves",
    },
    {
      name: "Gardening",
      description: "Hoses, Pruners, Rakes",
    },
    {
      name: "Electricals",
      description: "Cables, Switches, Sockets",
    },
    {
      name: "General Hardware",
      description: "Locks, Adhesives, Safety Gear",
    },
  ];

  const brands = [
    "Total",
    "Bosch",
    "Ingco",
    "Tolsen",
    "Deli",
    "Uyustools",
    "Stanley",
    "Wadfow",
    "Prescott",
    "Proskit",
    "Makita",
    "Makute",
    "Tanquin",
    "Fixtec",
    "Worksite",
    "Black and Decker",
    "CAT",
    "Ryobi",
  ];

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

          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok size={18} />
          </a>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="main-nav">
        {/* Logo */}
        <div className="logo-container">
        
  <img  src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Dheer Distributors"
  
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
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= NAV LINKS ================= */}
     <nav className={`navigation ${mobileMenu ? "mobile-open" : ""}`}>
  <NavLink
    to="/"
    className={({ isActive }) => (isActive ? "active" : "")}
    onClick={() => setMobileMenu(false)}   // close menu
  >
    HOME
  </NavLink>

  <NavLink
    to="/about-dheer"
    className={({ isActive }) => (isActive ? "active" : "")}
    onClick={() => setMobileMenu(false)}   // close menu
  >
    ABOUT US
  </NavLink>

  <a href="/shop" onClick={() => setMobileMenu(false)}>
    SHOP
  </a>

  {/* Categories */}
  <div className="category-wrapper">
    <button
      className="category-button"
      onClick={() => setCategoriesOpen(!categoriesOpen)}
    >
      CATEGORIES
      <ChevronDown size={16} className={categoriesOpen ? "arrow-up" : ""} />
    </button>
    {categoriesOpen && (
      <div className="category-menu">
        {categories.map((category) => (
          <a
            href={`/category/${category.name.toLowerCase().replaceAll(" ", "-")}`}
            key={category.name}
            className="category-item"
            onClick={() => setMobileMenu(false)}   // close menu
          >
            <div className="category-item-content">
              <span>{category.name}</span>
              <p className="category-description">{category.description}</p>
            </div>
          </a>
        ))}
      </div>
    )}
  </div>

  {/* Brands */}
  <div className="category-wrapper">
    <button
      className="category-button"
      onClick={() => setBrandsOpen(!brandsOpen)}
    >
      BRANDS
      <ChevronDown size={16} className={brandsOpen ? "arrow-up" : ""} />
    </button>
    {brandsOpen && (
      <div className="brands-menu">
        {brands.map((brand) => (
          <a
            key={brand}
            href={`/brand/${brand.toLowerCase().replaceAll(" ", "-")}`}
            className="brand-item"
            onClick={() => setMobileMenu(false)}   // close menu
          >
            {brand}
          </a>
        ))}
      </div>
    )}
  </div>

  <a href="/contact" onClick={() => setMobileMenu(false)}>
    CONTACT US
  </a>
</nav>

    </header>
  );
}

