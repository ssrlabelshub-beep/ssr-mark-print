
import React, { useEffect } from "react";
import "./About.css";

// Load images from the About folder
const aboutImages = import.meta.glob(
  "../assets/images/about/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
);

// Get image using its exact filename
const getAboutImage = (filename) => {
  return aboutImages[`../assets/images/about/${filename}`] || "";
};

// Independent product showcase for About page
const aboutProducts = [
  {
    id: 1,
    name: "Barcode & Product Labels",
    description:
      "High-quality barcode labels and product stickers for retail stores, supermarkets, e-commerce, logistics and industrial product identification.",
    image: "barcode-labels.png",
  },
  {
    id: 2,
    name: "Industrial Label Printers",
    description:
      "Industrial barcode label printers for manufacturing, warehouses, logistics, retail businesses and industrial printing requirements.",
    image: "industrial-label-printer.png",
  },
  {
    id: 3,
    name: "Direct Thermal Labels",
    description:
      "Direct thermal barcode labels for shipping, courier services, warehouse inventory, retail billing and product labelling applications.",
    image: "direct-thermal.png",
  },
  {
    id: 4,
    name: "Thermal Paper Rolls",
    description:
      "Thermal paper rolls for POS billing machines, receipt printers, supermarket billing counters and restaurant billing systems.",
    image: "thermal-paper.png",
  },
  {
    id: 5,
    name: "Thermal Transfer Ribbons",
    description:
      "Wax, wax-resin and resin barcode printer ribbons for clear, reliable and durable thermal transfer label printing.",
    image: "barcode-ribbons.png",
  },
  {
    id: 6,
    name: "Custom Printed Labels",
    description:
      "Custom barcode labels and printed stickers for product branding, packaging, manufacturing, retail and business identification.",
    image: "printed-thermal-roll.png",
  },
];

const advantages = [
  {
    number: "01",
    title: "Quality Label Products",
    description:
      "We focus on supplying quality barcode labels, industrial labels, thermal rolls, ribbons and printing products.",
  },
  {
    number: "02",
    title: "Custom Label Solutions",
    description:
      "We help businesses find suitable label sizes, materials, adhesives and printing solutions for their applications.",
  },
  {
    number: "03",
    title: "Competitive Pricing",
    description:
      "Practical barcode labelling and printing product options to support different business requirements and budgets.",
  },
  {
    number: "04",
    title: "Customer Support",
    description:
      "We assist customers in selecting suitable barcode printers, labels, thermal paper rolls and printing accessories.",
  },
];

const About = () => {
  useEffect(() => {
    document.title =
      "About SSR Mark & Print | Barcode Labels & Printers in Bangalore";

    const description =
      "SSR Mark & Print offers barcode labels, industrial barcode printers, direct thermal labels, thermal paper rolls, printer ribbons and custom printed labels in Bangalore.";

    const keywords =
      "barcode labels Bangalore, barcode label printer Bangalore, industrial barcode labels, direct thermal labels, thermal paper rolls Bangalore, barcode printer ribbons, custom printed labels, barcode printing solutions";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;

    let metaKeywords = document.querySelector(
      'meta[name="keywords"]'
    );

    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }

    metaKeywords.content = keywords;
  }, []);

  // Images from src/assets/images/about/
  const heroImage = getAboutImage("barcode-labels.png");
  const printerImage = getAboutImage("industrial-label-printer.png");
  const thermalImage = getAboutImage("direct-thermal.png");
  const ribbonImage = getAboutImage("barcode-ribbons.png");

  return (
    <main className="about-premium">

      {/* HERO SECTION */}

      <section className="ap-hero">
        <div className="ap-hero-pattern"></div>

        <div className="ap-container ap-hero-layout">

          <div className="ap-hero-content">
            <span className="ap-eyebrow">
              <span className="ap-eyebrow-line"></span>
              ABOUT SSR MARK & PRINT
            </span>

            <h1>
              Barcode Labels &
              <span> Industrial Printing Solutions</span>
            </h1>

            <p>
              Your trusted source for barcode labels,
              industrial barcode printers, direct thermal
              labels, thermal paper rolls and barcode
              printing ribbons in Bangalore.
            </p>

            <div className="ap-hero-buttons">
              <a href="/products" className="ap-btn ap-btn-orange">
                Explore Products <span>→</span>
              </a>

              <a href="/contact" className="ap-btn ap-btn-outline">
                Contact Us
              </a>
            </div>

            <div className="ap-hero-trust">
              <div>
                <strong>Labels</strong>
                <span>Barcode Solutions</span>
              </div>

              <div className="ap-trust-divider"></div>

              <div>
                <strong>Printers</strong>
                <span>Printing Hardware</span>
              </div>

              <div className="ap-trust-divider"></div>

              <div>
                <strong>Ribbons</strong>
                <span>Printing Supplies</span>
              </div>
            </div>
          </div>

          <div className="ap-hero-visual">
            <div className="ap-hero-image-frame">

              {heroImage ? (
                <img
                  src={heroImage}
                  alt="Barcode and product labels in Bangalore by SSR Mark & Print"
                />
              ) : (
                <div className="ap-image-placeholder">
                  <span>▤</span>
                  <strong>Barcode Labels</strong>
                  <small>SSR Mark & Print</small>
                </div>
              )}

              <div className="ap-image-corner"></div>
            </div>

            <div className="ap-floating-card">
              <div className="ap-floating-icon">✓</div>
              <div>
                <strong>Complete Label Solutions</strong>
                <span>Labels, Printers & Supplies</span>
              </div>
            </div>

            <div className="ap-hero-number">
              LABELS / PRINTERS
            </div>
          </div>

        </div>
      </section>

      {/* COMPANY INTRODUCTION */}

      <section className="ap-introduction ap-section">
        <div className="ap-container ap-intro-grid">

          <div className="ap-intro-visual">

            <div className="ap-intro-image">
              {printerImage ? (
                <img
                  src={printerImage}
                  alt="Industrial barcode label printers and printing solutions"
                  loading="lazy"
                />
              ) : (
                <div className="ap-image-placeholder">
                  <span>▣</span>
                  <strong>Industrial Printers</strong>
                </div>
              )}
            </div>

            <div className="ap-established-card">
              <strong>Complete</strong>
              <span>Printing Solutions</span>
            </div>

            <div className="ap-intro-decoration"></div>
          </div>

          <div className="ap-intro-content">
            <span className="ap-section-label">
              WHO WE ARE
            </span>

            <h2>
              Your Partner in
              <span> Barcode Labels & Printing Solutions</span>
            </h2>

            <p>
              SSR Mark & Print provides barcode labels,
              industrial barcode labels, thermal paper rolls,
              barcode printers, printer ribbons and custom
              printed labels for businesses in Bangalore.
            </p>

            <p>
              We understand the importance of accurate
              product identification, packaging labels,
              inventory tracking and reliable barcode
              printing in everyday business operations.
            </p>

            <p>
              From direct thermal labels and thermal transfer
              labels to industrial barcode printers and
              customised label requirements, we offer
              practical product solutions for different
              business applications.
            </p>

            <div className="ap-intro-highlight">
              <span>✓</span>
              <p>
                Your destination for barcode labels,
                industrial printers, thermal paper rolls
                and printing consumables.
              </p>
            </div>

            <a href="/contact" className="ap-text-link">
              Talk to Our Team <span>→</span>
            </a>
          </div>

        </div>
      </section>

      {/* INDEPENDENT PRODUCT SHOWCASE */}

      <section className="ap-products ap-section">
        <div className="ap-container">

          <div className="ap-section-heading">
            <div>
              <span className="ap-section-label">
                OUR PRODUCT RANGE
              </span>

              <h2>
                Barcode Labels &
                <span> Printing Products</span>
              </h2>
            </div>

            <p>
              Discover barcode label rolls, industrial
              printing hardware, thermal paper products
              and barcode printer consumables for
              different business requirements.
            </p>
          </div>

          <div className="ap-product-grid">
            {aboutProducts.map((product) => {
              const image = getAboutImage(product.image);

              return (
                <article
                  className="ap-product-card"
                  key={product.id}
                >

                  <div className="ap-product-image">
                    {image ? (
                      <img
                        src={image}
                        alt={`${product.name} in Bangalore - SSR Mark & Print`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="ap-image-placeholder">
                        <span>▤</span>
                        <strong>{product.name}</strong>
                      </div>
                    )}
                  </div>

                  <div className="ap-product-info">
                    <h3>{product.name}</h3>

                    <p>{product.description}</p>

                    <a href="/products">
                      Explore Products <span>→</span>
                    </a>
                  </div>

                </article>
              );
            })}
          </div>

          <div className="ap-products-footer">
            <a href="/products" className="ap-btn ap-btn-dark">
              View All Products <span>→</span>
            </a>
          </div>

        </div>
      </section>

      {/* MISSION AND VISION */}

      <section className="ap-mission ap-section">
        <div className="ap-container">

          <div className="ap-section-heading ap-light-heading">
            <div>
              <span className="ap-section-label">
                OUR PURPOSE
              </span>

              <h2>
                What Drives <span>Us Forward</span>
              </h2>
            </div>

            <p>
              Our focus is on quality labelling products,
              practical barcode printing solutions and
              lasting customer relationships.
            </p>
          </div>

          <div className="ap-mission-grid">

            <div className="ap-mission-card">
              <div className="ap-mission-icon">◎</div>

              <span>01 / OUR MISSION</span>

              <h3>
                Making Business Labelling Simpler
              </h3>

              <p>
                To provide dependable barcode labels,
                industrial label printers, thermal paper
                products and printing supplies that support
                product identification, packaging and
                everyday business operations.
              </p>
            </div>

            <div className="ap-mission-card ap-vision-card">
              <div className="ap-mission-icon">✦</div>

              <span>02 / OUR VISION</span>

              <h3>
                Building Lasting Customer Relationships
              </h3>

              <p>
                To become a trusted source for businesses
                looking for quality barcode labels, printing
                hardware, customised labelling products
                and responsive customer support.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="ap-advantages ap-section">
        <div className="ap-container">

          <div className="ap-centered-heading">
            <span className="ap-section-label">
              WHY SSR MARK & PRINT
            </span>

            <h2>
              Your Reliable Partner for
              <span> Barcode Printing Solutions</span>
            </h2>

            <p>
              We focus on supplying suitable barcode
              labelling and printing products for
              different industries and business needs.
            </p>
          </div>

          <div className="ap-advantages-grid">
            {advantages.map((item) => (
              <div
                className="ap-advantage-card"
                key={item.number}
              >

                <span className="ap-advantage-number">
                  {item.number}
                </span>

                <div className="ap-advantage-line"></div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PRODUCT APPLICATIONS */}

      <section className="ap-applications ap-section">
        <div className="ap-container ap-applications-layout">

          <div className="ap-applications-content">
            <span className="ap-section-label">
              OUR APPLICATIONS
            </span>

            <h2>
              Barcode Labelling for
              <span> Different Industries</span>
            </h2>

            <p>
              Our barcode labels, thermal printing products
              and industrial printers support businesses
              requiring product identification, packaging,
              inventory management and billing solutions.
            </p>

            <ul>
              <li>Retail and supermarket barcode labels</li>
              <li>E-commerce and courier shipping labels</li>
              <li>Manufacturing and industrial identification</li>
              <li>Healthcare and laboratory sample labels</li>
              <li>Food packaging and product labels</li>
              <li>Warehouse and inventory barcode labels</li>
            </ul>

            <a href="/industries" className="ap-text-link">
              Explore Industries We Serve <span>→</span>
            </a>
          </div>

          <div className="ap-applications-visual">

            <div className="ap-application-main">
              {thermalImage ? (
                <img
                  src={thermalImage}
                  alt="Direct thermal barcode label rolls"
                  loading="lazy"
                />
              ) : (
                <div className="ap-image-placeholder">
                  <span>▤</span>
                  <strong>Thermal Labels</strong>
                </div>
              )}
            </div>

            <div className="ap-application-small">
              {ribbonImage ? (
                <img
                  src={ribbonImage}
                  alt="Thermal transfer barcode printer ribbons"
                  loading="lazy"
                />
              ) : (
                <div className="ap-image-placeholder">
                  <span>◉</span>
                  <strong>Printer Ribbons</strong>
                </div>
              )}
            </div>

            <div className="ap-application-caption">
              LABELS <span>•</span> PRINTERS <span>•</span> SUPPLIES
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}

      <section className="ap-cta">
        <div className="ap-container ap-cta-content">

          <div>
            <span className="ap-cta-eyebrow">
              LET'S WORK TOGETHER
            </span>

            <h2>
              Looking for Barcode Labels
              <span> or Industrial Printers?</span>
            </h2>

            <p>
              Contact SSR Mark & Print for barcode labels,
              custom printed stickers, thermal paper rolls,
              industrial barcode printers and ribbons
              in Bangalore.
            </p>
          </div>

          <a href="/contact" className="ap-btn ap-btn-orange">
            Get a Quote <span>→</span>
          </a>

        </div>
      </section>

    </main>
  );
};

export default About;
