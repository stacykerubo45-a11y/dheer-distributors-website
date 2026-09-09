
import { ShoppingCart, Star } from "lucide-react";
import "../styles/BestSellingProducts.css";

const products = [
  {
    id: 1,
    name: "Angle Grinder 900W 4.5 inch",
    brand: "Dewalt",
   
    discount: "-25%",
    badge: "BESTSELLER",
    rating: 4.8,
    reviews: 54,
    image: "images/products/dewalt-grinder.webp",
  },
  {
    id: 2,
    name: "Impact Drill 20V Brushless Kit",
    brand: "TOTAL",
   
    discount: "-25%",
    badge: "BESTSELLER",
    rating: 4.7,
    reviews: 31,
    image: "images/products/total-drill.webp",
  },
  {
    id: 3,
    name: "Claw Hammer 16oz Fiberglass Handle",
    brand: "DELI",
    
    discount: null,
    badge: "BESTSELLER",
    rating: 4.8,
    reviews: 20,
    image: "images/products/claw-hammer.webp",
  },
  {
    id: 4,
    name: "Copper Twin & Earth Cable 2.5mm - 100m",
    brand: "VOLTEX",
    
    discount: "-15%",
    badge: "BESTSELLER",
    rating: 4.9,
    reviews: 28,
    image: "images/products/copper-cable.webp",
  },
  {
    id: 5,
    name: "PVC Pipe 20mm - 4m Length",
    brand: "MAKITA",
    
    discount: null,
    badge: "BESTSELLER",
    rating: 4.5,
    reviews: 18,
    image: "images/products/pvc-pipe.webp",
  },
  {
    id: 6,
    name: "Ryobi P620 cordless paint sprayer",
    brand: "RYOBI",
    
    discount: "-15%",
    badge: "BESTSELLER",
    rating: 4.7,
    reviews: 35,
    image: "images/products/paint.webp",
  },
  {
    id: 7,
    name: "Portland Cement 50kg Bag",
    brand: "ROCKSOLID",
    
    discount: null,
    badge: "BESTSELLER",
    rating: 4.8,
    reviews: 42,
    image: "images/products/cement.webp",
  },
  {
    id: 8,
    name: "Corrugated Roofing Sheet 2.5m",
    brand: "ROOFGUARD",
   
    discount: "-14%",
    badge: "BESTSELLER",
    rating: 4.7,
    reviews: 34,
    image: "images/products/roofing-sheet.webp",
  },
];

export default function BestSellingProducts() {
  return (
    <section className="best-selling-section">
      <div className="best-selling-container">

        {/* SECTION HEADER */}
        <div className="best-selling-header">
          <div>
            <span className="section-label">
              CONTRACTOR FAVOURITES
            </span>

          

            <p>
              Essential supplies trusted by professional tradespeople
            </p>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="products-grid">
          {products.map((product) => (
            <article
              className="product-card"
              key={product.id}
            >
              {/* PRODUCT IMAGE */}
              <div className="product-image-container">

                {product.discount && (
                  <span className="discount-badge">
                    {product.discount}
                  </span>
                )}

                {product.badge && (
                  <span className="bestseller-badge">
                    {product.badge}
                  </span>
                )}

                <img
                  src={`${import.meta.env.BASE_URL}${product.image}`}
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                />
              </div>

              {/* PRODUCT INFORMATION */}
              <div className="product-info">

                <span className="product-brand">
                  {product.brand}
                </span>

                <h3 className="product-name">
                  {product.name}
                </h3>

                {/* RATING */}
                <div className="product-rating">
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={11}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <span className="review-count">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

              
                 

                {/* STOCK */}
                <span className="stock-status">
                  In stock
                </span>

                {/* CART BUTTON */}
                <button className="add-cart-button">
                  <ShoppingCart size={12} />
                  <span>Add to cart</span>
                </button>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
