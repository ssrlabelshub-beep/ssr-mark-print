
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getProductBySlug,
  products,
} from "../data/products";
import { getProductDetailsContent } from "../data/productDetailsContent";
import "./ProductDetails.css";

const PHONE_NUMBER = "917483023426";

function ProductDetails() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  useEffect(() => {
    if (!product) {
      document.title = "Product Not Found | SSR Mark & Print";
      return;
    }

    document.title = `${product.name} | SSR Mark & Print`;

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content =
      `${product.name} from SSR Mark & Print. Explore product details, ` +
      `features, applications and available options. Enquire for pricing.`;
  }, [product]);

  if (!product) {
    return (
      <main className="pd-not-found">
        <span className="pd-not-found-icon">🔎</span>
        <h1>Product Not Found</h1>
        <p>
          This product may have been moved or is no longer available.
        </p>
        <Link to="/products" className="pd-primary-btn">
          Browse All Products
        </Link>
      </main>
    );
  }

  const details = getProductDetailsContent(product);

  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== product.id &&
        item.subcategory === product.subcategory
    )
    .slice(0, 4);

  const finalRelatedProducts =
    relatedProducts.length > 0
      ? relatedProducts
      : products
          .filter(
            (item) =>
              item.id !== product.id &&
              item.category === product.category
          )
          .slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hello SSR Mark & Print, I am interested in ${product.name}. Please share the price, specifications and availability.`
  );

  const whatsappLink =
    `https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`;

  const specifications = [
    ["Product Name", product.name],
    ["Category", product.category],
    ["Product Type", product.subcategory],
    ["Size / Model", product.size || "Contact us for details"],
    [
      "Product Application",
      details.uses.slice(0, 2).join(", "),
    ],
    [
      "Availability",
      "Please enquire for current availability",
    ],
  ];

  return (
    <main className="product-details-page">
      {/* BREADCRUMB */}
      <div className="pd-container">
        <nav className="pd-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <span className="pd-current">{product.name}</span>
        </nav>

        {/* PRODUCT OVERVIEW */}
        <section className="pd-overview">
          <div className="pd-image-panel">
            {product.badge && (
              <span className="pd-product-badge">
                {product.badge}
              </span>
            )}

            {product.image ? (
              <img
                src={product.image}
                alt={`${product.name} - SSR Mark & Print`}
                className="pd-main-image"
              />
            ) : (
              <div className="pd-image-placeholder">
                <span>🏷️</span>
                <p>Product Image</p>
              </div>
            )}
          </div>

          <div className="pd-summary">
            <span className="pd-category-label">
              {product.subcategory}
            </span>

            <h1>{product.name}</h1>

            <p className="pd-short-description">
              {product.description}
            </p>

            <div className="pd-size-box">
              <span>Size / Model</span>
              <strong>
                {product.size || "Contact us for details"}
              </strong>
            </div>

            <div className="pd-highlights">
              <div>
                <span className="pd-check">✓</span>
                Business and bulk enquiries
              </div>
              <div>
                <span className="pd-check">✓</span>
                Product guidance and support
              </div>
              <div>
                <span className="pd-check">✓</span>
                Multiple product options
              </div>
            </div>

            <div className="pd-action-buttons">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="pd-primary-btn"
              >
                <span>💬</span> Enquire on WhatsApp
              </a>

              <Link to="/contact" className="pd-secondary-btn">
                Contact Us
              </Link>
            </div>

            <p className="pd-enquiry-note">
              Contact our team for pricing, bulk quantities and
              product compatibility.
            </p>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="pd-trust-strip">
          <div>
            <span>✓</span>
            <p>
              <strong>Quality Focus</strong>
              <small>Product-focused solutions</small>
            </p>
          </div>
          <div>
            <span>▣</span>
            <p>
              <strong>Business Supply</strong>
              <small>Retail and industrial needs</small>
            </p>
          </div>
          <div>
            <span>↗</span>
            <p>
              <strong>Bulk Enquiries</strong>
              <small>Discuss your requirements</small>
            </p>
          </div>
        </section>

        {/* PRODUCT DESCRIPTION */}
        <section className="pd-section">
          <div className="pd-section-heading">
            <span>PRODUCT INFORMATION</span>
            <h2>About {product.name}</h2>
          </div>

          <p className="pd-description-text">
            {details.intro}
          </p>

          <p className="pd-description-text">
            SSR Mark & Print supplies barcode labels, thermal paper
            rolls, printing ribbons, barcode printers and related
            products for businesses. Contact our team to discuss
            the right option for your application and equipment.
          </p>
        </section>

        {/* FEATURES */}
        <section className="pd-section pd-features-section">
          <div className="pd-section-heading">
            <span>PRODUCT FEATURES</span>
            <h2>Key Features & Benefits</h2>
            <p>
              Important product details to help you understand
              where {product.name} can be used.
            </p>
          </div>

          <div className="pd-feature-grid">
            {details.points.map((point, index) => (
              <article className="pd-feature-card" key={index}>
                <span className="pd-feature-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{point}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SPECIFICATIONS */}
        <section className="pd-section">
          <div className="pd-section-heading">
            <span>PRODUCT DETAILS</span>
            <h2>Specifications</h2>
          </div>

          <div className="pd-specification-table">
            {specifications.map(([label, value]) => (
              <div className="pd-spec-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <p className="pd-spec-note">
            Specifications may vary according to the selected
            material, size or printer model. Please confirm the
            exact requirements with our team before ordering.
          </p>
        </section>

        {/* APPLICATIONS */}
        <section className="pd-section pd-applications-section">
          <div className="pd-section-heading">
            <span>WHERE IT IS USED</span>
            <h2>Applications & Industries</h2>
          </div>

          <div className="pd-application-grid">
            {details.uses.map((use, index) => (
              <div className="pd-application-card" key={use}>
                <span>
                  {["🏭", "📦", "🏪", "🚚"][index % 4]}
                </span>
                <strong>{use}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* ENQUIRY BANNER */}
        <section className="pd-enquiry-banner">
          <div>
            <span>NEED PRODUCT INFORMATION?</span>
            <h2>Looking for {product.name}?</h2>
            <p>
              Contact SSR Mark & Print for pricing, bulk orders
              and product-related assistance.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="pd-banner-button"
          >
            Enquire Now <span>→</span>
          </a>
        </section>

        {/* RELATED PRODUCTS */}
        {finalRelatedProducts.length > 0 && (
          <section className="pd-section pd-related-section">
            <div className="pd-section-heading">
              <span>EXPLORE MORE</span>
              <h2>Related Products</h2>
            </div>

            <div className="pd-related-grid">
              {finalRelatedProducts.map((item) => (
                <Link
                  to={`/products/${item.slug}`}
                  className="pd-related-card"
                  key={item.id}
                >
                  <div className="pd-related-image">
                    {item.image ? (
                      <img src={item.image} alt={item.name} />
                    ) : (
                      <span>🏷️</span>
                    )}
                  </div>

                  <div className="pd-related-info">
                    <small>{item.subcategory}</small>
                    <h3>{item.name}</h3>
                    <span className="pd-view-link">
                      View Product →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default ProductDetails;
