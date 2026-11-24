
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ServiceAreas.css";

const serviceAreas = [
  {
    name: "Electronic City",
    description:
      "Barcode labels, industrial labels, thermal paper rolls and printer solutions for businesses in Electronic City.",
    icon: "🏢",
  },
  {
    name: "Bommasandra",
    description:
      "Label and printing solutions for manufacturing units, warehouses and industrial businesses in Bommasandra.",
    icon: "🏭",
  },
  {
    name: "Anekal",
    description:
      "Reliable barcode labelling and thermal printing product solutions for businesses in Anekal.",
    icon: "📦",
  },
  {
    name: "Jigani",
    description:
      "Industrial barcode labels, custom printed labels and printer supplies for businesses in Jigani.",
    icon: "🏗️",
  },
  {
    name: "Chandapura",
    description:
      "Barcode stickers, product labels and thermal paper roll solutions for businesses in Chandapura.",
    icon: "🏬",
  },
  {
    name: "Hosur",
    description:
      "Industrial labels, barcode printers and thermal printing consumables for businesses in Hosur.",
    icon: "🏭",
  },
  {
    name: "Sarjapur",
    description:
      "Barcode labelling and printing solutions for retail, logistics and other businesses in Sarjapur.",
    icon: "🏢",
  },
  {
    name: "HSR Layout",
    description:
      "Product labels, barcode stickers and thermal paper solutions for businesses in HSR Layout.",
    icon: "🏪",
  },
];

const products = [
  "Barcode & Product Labels",
  "Industrial Labels",
  "Direct Thermal Labels",
  "Chrome Labels",
  "Polyester Labels",
  "Custom Printed Labels",
  "Thermal Paper Rolls",
  "Barcode Label Printers",
  "Thermal Transfer Ribbons",
];

function ServiceAreas() {
  useEffect(() => {
    document.title =
      "Service Areas | Barcode Labels & Printer Solutions | SSR Mark & Print";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content =
      "Explore the service areas of SSR Mark & Print. We offer barcode labels, industrial labels, thermal paper rolls and barcode printer solutions in Electronic City, Bommasandra, Anekal, Jigani, Chandapura, Hosur, Sarjapur and HSR Layout.";

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href =
      "https://www.YOUR-DOMAIN.com/service-areas";
  }, []);

  return (
    <main className="sa-page">

      {/* Hero Section */}
      <section className="sa-hero">
        <div className="sa-hero-content">
          <span className="sa-tag">
            OUR SERVICE LOCATIONS
          </span>

          <h1>
            Serving Businesses Across
            <span> Bangalore & Nearby Areas</span>
          </h1>

          <p>
            SSR Mark & Print provides barcode labels,
            industrial labelling products, thermal paper
            rolls and barcode printer solutions for
            businesses across our selected service areas.
          </p>

          <Link to="/contact" className="sa-primary-btn">
            Get a Quote
            <span> → </span>
          </Link>
        </div>

        <div className="sa-hero-visual">
          <div className="sa-hero-circle">
            <div className="sa-hero-icon">📍</div>
            <h3>Our Service Areas</h3>
            <p>Bangalore & Nearby Locations</p>
            <div className="sa-hero-count">
              <strong>08</strong>
              <span>Selected Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="sa-intro">
        <span className="sa-section-tag">
          WHERE WE SERVE
        </span>

        <h2>
          Our Service Areas
        </h2>

        <p>
          We serve businesses in the following locations
          with barcode labelling products, industrial
          labels, thermal printing supplies and printer
          solutions. Contact our team to confirm
          availability for your location.
        </p>
      </section>

      {/* Locations */}
      <section className="sa-locations">
        <div className="sa-location-grid">
          {serviceAreas.map((area, index) => (
            <article className="sa-location-card" key={area.name}>
              <div className="sa-location-top">
                <div className="sa-location-icon">
                  {area.icon}
                </div>
                <span className="sa-location-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{area.name}</h3>

              <p>{area.description}</p>

              <Link
                to="/contact"
                className="sa-location-link"
                aria-label={`Enquire about service in ${area.name}`}
              >
                Enquire Now <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="sa-products">
        <div className="sa-products-heading">
          <span className="sa-section-tag">
            OUR PRODUCTS
          </span>

          <h2>
            Labelling & Printing Solutions
          </h2>

          <p>
            Explore our range of products for industrial,
            retail, manufacturing, logistics and other
            business applications.
          </p>
        </div>

        <div className="sa-product-grid">
          {products.map((product, index) => (
            <div className="sa-product-item" key={product}>
              <span className="sa-product-check">✓</span>
              <span>{product}</span>
            </div>
          ))}
        </div>

        <div className="sa-products-action">
          <Link to="/products" className="sa-outline-btn">
            Explore Products →
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="sa-why">
        <div className="sa-why-heading">
          <span className="sa-section-tag">
            WHY SSR MARK & PRINT
          </span>

          <h2>
            Your Labelling & Printing Solutions Partner
          </h2>
        </div>

        <div className="sa-benefits">
          <div className="sa-benefit">
            <span>01</span>
            <h3>Wide Product Range</h3>
            <p>
              Barcode labels, industrial labels,
              thermal paper rolls and printing supplies.
            </p>
          </div>

          <div className="sa-benefit">
            <span>02</span>
            <h3>Business Solutions</h3>
            <p>
              Product options for manufacturing,
              retail, logistics and other industries.
            </p>
          </div>

          <div className="sa-benefit">
            <span>03</span>
            <h3>Enquiry Support</h3>
            <p>
              Contact our team for product details,
              specifications and quotations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sa-cta">
        <div>
          <span className="sa-cta-tag">
            HAVE A REQUIREMENT?
          </span>

          <h2>
            Looking for Barcode Labels or Printer Solutions?
          </h2>

          <p>
            Contact SSR Mark & Print to discuss your
            business requirements and get a quotation.
          </p>
        </div>

        <Link to="/contact" className="sa-cta-btn">
          Get a Quote <span>→</span>
        </Link>
      </section>

    </main>
  );
}

export default ServiceAreas;
