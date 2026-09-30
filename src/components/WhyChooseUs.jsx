import { NavLink } from "react-router-dom";
import {
  FaStore,
  FaTags,
  FaTruck,
  FaToolbox,
} from "react-icons/fa";
import "../styles/WhyChooseUs.css";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaStore />,
      title: "Wholesale & Retail",
      text: "Buy a single item or stock up in bulk from one reliable supplier.",
    },
    {
      icon: <FaTags />,
      title: "Competitive Pricing",
      text: "Quality tools and hardware at affordable and competitive prices.",
    },
    {
      icon: <FaTruck />,
      title: "Fast & Efficient Delivery",
      text: "Quick delivery within Nairobi and across Kenya.",
    },
    {
      icon: <FaToolbox />,
      title: "Complete Product Range",
      text: "Power tools, hand tools, fasteners, plumbing supplies, safety products, castor wheels and more.",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="why-container">
        <div className="why-header">
          <span className="section-tag">WHY CHOOSE US</span>

          <h2>Trusted Hardware & Tool Supplier in Kenya</h2>

          <p>
            Dheer Distributors Ltd is a Nairobi-based wholesale and retail
            supplier of tools and hardware. With years of experience, we
            combine competitive pricing, trusted brands, and efficient
            delivery to help businesses, contractors, and homeowners get the
            products they need.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <div key={reason.title} className="why-card">
              <div className="why-icon">{reason.icon}</div>

              <h3>{reason.title}</h3>

              <p>{reason.text}</p>
            </div>
          ))}
        </div>

        <div className="why-action">
          <NavLink to="/about-dheer" className="learn-more-btn">
            Learn More About Us
          </NavLink>
        </div>
      </div>
    </section>
  );
}