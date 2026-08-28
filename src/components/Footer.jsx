
import "../styles/Footer.css";
import {
  MapPin,
  Phone,
  Mail,
  
  
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-column footer-about">
          <h2 className="footer-logo">
            DHEER <span>DISTRIBUTORS</span>
          </h2>

          <p>
            Your trusted supplier of quality power tools, hand tools,
            hardware, plumbing materials and accessories in Kenya.
          </p>

          <p>
            We supply genuine products from reputable brands at
            competitive prices, serving both wholesale and retail customers.
          </p>

          <div className="footer-socials">
          

          
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/brands">Our Brands</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-column">
          <h3>Categories</h3>

          <ul>
            <li>
              <a href="/category/power-tools">Power Tools</a>
            </li>

            <li>
              <a href="/category/hand-tools">Hand Tools</a>
            </li>

            <li>
              <a href="/category/fasteners">Fasteners</a>
            </li>

            <li>
              <a href="/category/plumbing-materials">
                Plumbing Materials
              </a>
            </li>

            <li>
              <a href="/category/hardware">General Hardware</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <MapPin size={19} />
            <span>
              Park Road, Ngara
              <br />
              Nairobi, Kenya
            </span>
          </div>

          <div className="contact-item">
            <Phone size={19} />
            <a href="tel:+254705731829">
              +254 705 731 829
            </a>
          </div>

          <div className="contact-item">
            <Mail size={19} />
            <a href="mailto:dheerdistributorsltd@gmail.com">
              dheerdistributorsltd@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="footer-brands">
        <p>Trusted Brands</p>

        <div className="brand-names">
          <span>INGCO</span>
          <span>BOSCH</span>
          <span>MAKUTE</span>
          <span>TOLSEN</span>
          <span>TOTAL</span>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Dheer Distributors Ltd.
          All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>

        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}

