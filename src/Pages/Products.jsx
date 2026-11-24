
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { categories, products } from "../data/products.js";
import "./Products.css";

// ========================================
// PRODUCTS COMPONENT
// ========================================

function Products() {
  const [selectedCategory, setSelectedCategory] =
    useState("All Products");

  const [expandedCategories, setExpandedCategories] =
    useState(
      categories.map((category) => category.name)
    );

  const [searchTerm, setSearchTerm] = useState("");

  // ========================================
  // EXPAND / COLLAPSE CATEGORIES
  // ========================================

  const toggleCategory = (categoryName) => {
    setExpandedCategories((previous) =>
      previous.includes(categoryName)
        ? previous.filter((item) => item !== categoryName)
        : [...previous, categoryName]
    );
  };

  // ========================================
  // SELECT CATEGORY
  // ========================================

  const selectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  // ========================================
  // FILTER PRODUCTS
  // ========================================

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Products" ||
        product.category === selectedCategory ||
        product.subcategory === selectedCategory;

      const search = searchTerm.toLowerCase().trim();

      const matchesSearch =
        !search ||
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search) ||
        product.subcategory.toLowerCase().includes(search) ||
        product.size.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // ========================================
  // PRODUCTS COMPONENT UI
  // ========================================

  return (
    <main className="products-page">

      {/* TRUST BENEFITS BAR */}

      <section className="products-trustbar">

        <div className="trust-item">
          <span className="trust-icon">🚚</span>

          <div>
            <h3>Direct Importer Pricing</h3>
            <p>Competitive pricing on quality products</p>
          </div>
        </div>

        <div className="trust-item">
          <span className="trust-icon">🛡️</span>

          <div>
            <h3>Quality Assurance</h3>
            <p>Reliable products for business needs</p>
          </div>
        </div>

        <div className="trust-item">
          <span className="trust-icon">📦</span>

          <div>
            <h3>End-to-End Supply</h3>
            <p>Complete labels and printing solutions</p>
          </div>
        </div>

      </section>

      {/* BREADCRUMB */}

      <div className="products-breadcrumb">

        <Link to="/">⌂ Home</Link>

        <span>›</span>

        <strong>Products</strong>

        {selectedCategory !== "All Products" && (
          <>
            <span>›</span>
            <strong>{selectedCategory}</strong>
          </>
        )}

      </div>

      {/* MAIN CONTENT */}

      <div className="products-layout">

        {/* ====================================
            LEFT CATEGORY SIDEBAR
        ==================================== */}

        <aside className="products-sidebar">

          <div className="sidebar-heading">
            <span>▰</span>
            <h2>Consumables</h2>
          </div>

          <div className="sidebar-content">

            {/* ALL PRODUCTS BUTTON */}

            <button
              className={`all-products-btn ${
                selectedCategory === "All Products"
                  ? "active"
                  : ""
              }`}
              onClick={() => selectCategory("All Products")}
            >
              <span>▦</span>
              All Products
            </button>

            {/* MAIN CATEGORIES */}

            {categories.map((category) => {
              const isExpanded =
                expandedCategories.includes(category.name);

              return (
                <div
                  className="sidebar-category"
                  key={category.name}
                >

                  <div
                    className={`sidebar-category-heading ${
                      selectedCategory === category.name
                        ? "active"
                        : ""
                    }`}
                  >

                    {/* CATEGORY SELECT */}

                    <button
                      className="category-select"
                      onClick={() =>
                        selectCategory(category.name)
                      }
                    >
                      <span className="category-icon">
                        {category.icon}
                      </span>

                      <span>{category.name}</span>
                    </button>

                    {/* EXPAND / COLLAPSE */}

                    <button
                      className={`category-toggle ${
                        isExpanded ? "expanded" : ""
                      }`}
                      onClick={() =>
                        toggleCategory(category.name)
                      }
                      aria-label={`Toggle ${category.name}`}
                      aria-expanded={isExpanded}
                    >
                      ⌄
                    </button>

                  </div>

                  {/* SUBCATEGORIES */}

                  {isExpanded && (
                    <div className="subcategory-list">

                      {category.children.map((child) => (
                        <button
                          key={child}
                          className={`subcategory-item ${
                            selectedCategory === child
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            selectCategory(child)
                          }
                        >
                          <span>›</span>
                          {child}
                        </button>
                      ))}

                    </div>
                  )}

                </div>
              );
            })}

          </div>

          {/* BULK INQUIRY */}

          <div className="sidebar-inquiry">

            <div className="inquiry-title">
              <span>🎧</span>
              <h3>Bulk / Corporate Inquiry?</h3>
            </div>

            <p>
              Get customized pricing for high-volume
              and recurring orders.
            </p>

            <Link
              to="/contact"
              className="sidebar-quote-btn"
            >
              Request Bulk Quote <span>→</span>
            </Link>

          </div>

        </aside>

        {/* ====================================
            RIGHT PRODUCT SECTION
        ==================================== */}

        <section className="products-main">

          {/* PAGE HEADING */}

          <div className="products-heading">

            <div>

              <span className="products-eyebrow">
                OUR PRODUCT COLLECTION
              </span>

              <h1>Explore Our Products</h1>

              <p>
                Discover quality barcode labels,
                thermal paper rolls and professional
                printing solutions for your business.
              </p>

            </div>

          </div>

          {/* SEARCH BAR */}

          <div className="products-toolbar">

            <div className="products-search">

              <span>⌕</span>

              <input
                type="search"
                placeholder="Search products by name, size or category..."
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                aria-label="Search products"
              />

            </div>

            <span className="products-count">
              {filteredProducts.length} Products
            </span>

          </div>

          {/* SELECTED CATEGORY */}

          <div className="selected-category-row">

            <h2>
              {selectedCategory === "All Products"
                ? "All Products"
                : selectedCategory}
            </h2>

            <span>
              {filteredProducts.length} items available
            </span>

          </div>

          {/* ====================================
              PRODUCT GRID
          ==================================== */}

          {filteredProducts.length > 0 ? (

            <div className="products-grid">

              {filteredProducts.map((product) => (

                <article
                  className="product-card"
                  key={product.id}
                >

                  {/* PRODUCT IMAGE */}

                  <Link
                    to={`/products/${product.slug}`}
                    className="product-image-area"
                    aria-label={`View ${product.name}`}
                  >

                    {product.badge && (
                      <span className="product-badge">
                        {product.badge}
                      </span>
                    )}

                    <img
                      src={product.image}
                      alt={`${product.name} - ${product.size}`}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";

                        const fallback =
                          event.currentTarget.nextElementSibling;

                        if (fallback) {
                          fallback.style.display = "flex";
                        }
                      }}
                    />

                    <div
                      className="product-image-fallback"
                      style={{ display: "none" }}
                    >
                      <span>📦</span>
                      <small>Product Image</small>
                    </div>

                  </Link>

                  {/* PRODUCT DETAILS */}

                  <div className="product-card-content">

                    <span className="product-category-label">
                      {product.category}
                    </span>

                    <h3>{product.name}</h3>

                    <p className="product-size">
                      <strong>Size:</strong> {product.size}
                    </p>

                    <p className="product-description">
                      {product.description}
                    </p>

                    {/* PRODUCT BUTTONS */}

                    <div className="product-card-actions">

                      <Link
                        to={`/products/${product.slug}`}
                        className="product-details-btn"
                      >
                        View Details <span>→</span>
                      </Link>

                      <Link
                        to="/contact"
                        className="product-quote-btn"
                        title={`Request a quote for ${product.name}`}
                      >
                        Get Quote
                      </Link>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            /* NO PRODUCTS FOUND */

            <div className="products-empty">

              <span>🔍</span>

              <h3>No products found</h3>

              <p>
                Try another search term or select
                a different category.
              </p>

              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Products");
                }}
              >
                View All Products
              </button>

            </div>

          )}

        </section>

      </div>

    </main>
  );
}

export default Products;
