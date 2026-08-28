
import { useState } from "react";

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
          <img
            src="/images/logo (2).png"
            alt="Dheer Distributors Limited"
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
        <a href="/" className="active">
          HOME
        </a>

        <a href="/about">
          ABOUT US
        </a>

        <a href="/shop">
          SHOP
        </a>

        {/* ================= CATEGORIES ================= */}
        <div className="category-wrapper">
          <button
            className="category-button"
            onClick={() => setCategoriesOpen(!categoriesOpen)}
          >
            CATEGORIES
            <ChevronDown
              size={16}
              className={categoriesOpen ? "arrow-up" : ""}
            />
          </button>

          {categoriesOpen && (
            <div className="category-menu">
              {categories.map((category) => (
                <a
                  href={`/category/${category.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  key={category.name}
                  className="category-item"
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
          )}
        </div>

        {/* ================= BRANDS ================= */}
        <div className="category-wrapper">
          <button
            className="category-button"
            onClick={() => setBrandsOpen(!brandsOpen)}
          >
            BRANDS
            <ChevronDown
              size={16}
              className={brandsOpen ? "arrow-up" : ""}
            />
          </button>

          {brandsOpen && (
            <div className="brands-menu">
              {brands.map((brand) => (
                <a
                  key={brand}
                  href={`/brand/${brand.toLowerCase().replaceAll(" ", "-")}`}
                  className="brand-item"
                >
                  {brand}
                </a>
              ))}
            </div>
          )}
        </div>

        <a href="/contact">
          CONTACT US
        </a>
      </nav>
    </header>
  );
}

