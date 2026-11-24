
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Industries.css";

// =========================================
// LOAD INDUSTRY IMAGES
// Location: src/assets/images/industries/
// Supports PNG, JPG, JPEG and WEBP
// =========================================

const industryImages = import.meta.glob(
  "../assets/images/industries/*",
  {
    eager: true,
    import: "default",
  }
);

// Find image by filename without depending on extension
const getIndustryImage = (filename) => {
  const imageEntry = Object.entries(industryImages).find(([path]) => {
    const actualFilename = path
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, "")
      .toLowerCase();

    return actualFilename === filename.toLowerCase();
  });

  return imageEntry ? imageEntry[1] : "";
};

// =========================================
// INDUSTRY DATA
// =========================================

const industries = [
  {
    id: 1,
    name: "Retail & Supermarkets",
    image: "retail",
    number: "01",
    description:
      "Barcode labelling solutions for supermarkets, retail outlets, shopping stores and product packaging.",
    applications: [
      "Product barcode labels",
      "Price and promotional labels",
      "Shelf identification labels",
      "Inventory tracking labels",
    ],
  },
  {
    id: 2,
    name: "E-commerce & Logistics",
    image: "ecommerce",
    number: "02",
    description:
      "Reliable shipping and identification labels for courier companies, online sellers, warehouses and logistics operations.",
    applications: [
      "Shipping address labels",
      "Courier barcode labels",
      "Product identification",
      "Package tracking labels",
    ],
  },
  {
    id: 3,
    name: "Manufacturing & Industrial",
    image: "manufacturing",
    number: "03",
    description:
      "Industrial labelling products for manufacturing units, factories, production lines and component identification.",
    applications: [
      "Industrial barcode labels",
      "Asset identification labels",
      "Serial number labels",
      "Product tracking labels",
    ],
  },
  {
    id: 4,
    name: "Food & Beverage",
    image: "food",
    number: "04",
    description:
      "Product and packaging labels for food manufacturers, beverage companies, restaurants and food processing businesses.",
    applications: [
      "Food product labels",
      "Ingredient information labels",
      "Batch identification labels",
      "Packaging barcode labels",
    ],
  },
  {
    id: 5,
    name: "Pharmaceuticals",
    image: "pharma",
    number: "05",
    description:
      "Identification and tracking labels for pharmaceutical packaging, medicine distribution and healthcare supply chains.",
    applications: [
      "Medicine packaging labels",
      "Batch number labels",
      "Product identification labels",
      "Expiry information labels",
    ],
  },
  {
    id: 6,
    name: "Healthcare & Laboratories",
    image: "healthcare",
    number: "06",
    description:
      "Labelling solutions for hospitals, diagnostic centres, medical laboratories and healthcare product identification.",
    applications: [
      "Sample identification labels",
      "Laboratory barcode labels",
      "Medical inventory labels",
      "Equipment identification labels",
    ],
  },
  {
    id: 7,
    name: "Automotive & Auto Components",
    image: "automotive",
    number: "07",
    description:
      "Durable identification and tracking labels for automobile manufacturers, spare parts suppliers and component industries.",
    applications: [
      "Automotive part labels",
      "Serial number labels",
      "Component identification",
      "Inventory barcode labels",
    ],
  },
  {
    id: 8,
    name: "Warehousing & Distribution",
    image: "warehouse",
    number: "08",
    description:
      "Barcode labelling solutions for warehouses, distribution centres, stock management and inventory operations.",
    applications: [
      "Rack identification labels",
      "Bin location labels",
      "Inventory barcode labels",
      "Dispatch identification labels",
    ],
  },
  {
    id: 9,
    name: "Jewellery & Gold Retail",
    image: "jewellery",
    number: "09",
    description:
      "Product identification and pricing labels for jewellery shops, gold retailers and precious item inventory management.",
    applications: [
      "Jewellery tag labels",
      "Product barcode labels",
      "Price identification labels",
      "Stock management labels",
    ],
  },
  {
    id: 10,
    name: "Electronics & Electrical",
    image: "electronics",
    number: "10",
    description:
      "Product identification labels for electronics manufacturers, electrical component suppliers and equipment businesses.",
    applications: [
      "Product serial number labels",
      "Component barcode labels",
      "Asset identification labels",
      "Specification labels",
    ],
  },
];

// =========================================
// WHY CHOOSE US
// =========================================

const benefits = [
  {
    icon: "01",
    title: "Industry-Focused Solutions",
    description:
      "Suitable barcode labelling and printing products for different business and industrial applications.",
  },
  {
    icon: "02",
    title: "Custom Label Options",
    description:
      "Different label sizes, materials, formats and printing options to suit your product requirements.",
  },
  {
    icon: "03",
    title: "Printing Products",
    description:
      "Barcode labels, thermal paper rolls, ribbons and barcode printing hardware in one place.",
  },
  {
    icon: "04",
    title: "Customer Assistance",
    description:
      "Support in choosing suitable labels and printing products for your business operations.",
  },
];

// =========================================
// INDUSTRIES PAGE
// =========================================

function Industries() {
  useEffect(() => {
    document.title =
      "Industries We Serve | Barcode Labels & Industrial Printing Solutions Bangalore";

    const description =
      "Explore barcode label and industrial printing solutions for retail, manufacturing, logistics, food, pharmaceuticals, healthcare, automotive and other industries in Bangalore by SSR Mark & Print.";

    let meta = document.querySelector(
      'meta[name="description"]'
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;
  }, []);

  return (
    <main className="industries-page">

      {/* SIMPLE PAGE HEADER */}

      <section className="ind-simple-header">
        <div className="ind-container">

          <span className="ind-section-label">
            INDUSTRIES WE SERVE
          </span>

          <h1>
            Labelling Solutions for
            <span> Every Industry</span>
          </h1>

          <p>
            We provide barcode labels, industrial labels,
            thermal paper rolls, barcode printers and printing
            supplies for businesses across different industries.
          </p>

        </div>
      </section>

      {/* INDUSTRY CARDS */}

      <section className="ind-list-section ind-section">
        <div className="ind-container">

          <div className="ind-heading-row">

            <div>
              <span className="ind-section-label">
                OUR INDUSTRY EXPERTISE
              </span>

              <h2>
                Industries <span>We Serve</span>
              </h2>
            </div>

            <p>
              Explore the different industries that use
              barcode labels and printing solutions for
              their everyday operations.
            </p>

          </div>

          <div className="ind-grid">

            {industries.map((industry) => {
              const image = getIndustryImage(industry.image);

              return (
                <article className="ind-card" key={industry.id}>

                  {/* INDUSTRY IMAGE */}

                  <div className="ind-card-image">

                    {image ? (
                      <img
                        src={image}
                        alt={`${industry.name} barcode labelling solutions by SSR Mark & Print`}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="ind-image-placeholder">
                        <span>
                          {industry.id === 3 ? "🏭" : "▧"}
                        </span>

                        <strong>{industry.name}</strong>

                        <small>Industry Image</small>
                      </div>
                    )}

                    <span className="ind-card-number">
                      {industry.number}
                    </span>

                  </div>

                  {/* INDUSTRY DETAILS */}

                  <div className="ind-card-content">

                    <h3>{industry.name}</h3>

                    <p>{industry.description}</p>

                    <div className="ind-applications">

                      <h4>Applications</h4>

                      <ul>
                        {industry.applications.map((item, index) => (
                          <li key={index}>
                            <span>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                    </div>

                    <Link
                      to="/contact"
                      className="ind-card-link"
                    >
                      Enquire Now <span>→</span>
                    </Link>

                  </div>

                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* PRODUCT SOLUTIONS */}

      <section className="ind-solutions ind-section">
        <div className="ind-container">

          <div className="ind-centered-heading">

            <span className="ind-section-label">
              OUR PRODUCT RANGE
            </span>

            <h2>
              Complete Barcode & Printing
              <span> Product Solutions</span>
            </h2>

            <p>
              Products designed to support labelling,
              identification, packaging, billing and
              inventory management requirements.
            </p>

          </div>

          <div className="ind-solution-grid">

            <div className="ind-solution-card">
              <div className="ind-solution-icon">▤</div>

              <h3>Barcode Labels</h3>

              <p>
                Plain, printed, direct thermal, industrial
                and customised barcode labels.
              </p>

              <Link to="/products">
                View Products →
              </Link>
            </div>

            <div className="ind-solution-card">
              <div className="ind-solution-icon">▣</div>

              <h3>Barcode Printers</h3>

              <p>
                Desktop and industrial barcode label
                printing hardware for business use.
              </p>

              <Link to="/products">
                View Products →
              </Link>
            </div>

            <div className="ind-solution-card">
              <div className="ind-solution-icon">◉</div>

              <h3>Thermal Paper Rolls</h3>

              <p>
                Thermal billing rolls for POS systems,
                retail counters and receipt printing.
              </p>

              <Link to="/products">
                View Products →
              </Link>
            </div>

            <div className="ind-solution-card">
              <div className="ind-solution-icon">▥</div>

              <h3>Thermal Transfer Ribbons</h3>

              <p>
                Wax, wax-resin and resin ribbons for
                thermal transfer label printing.
              </p>

              <Link to="/products">
                View Products →
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="ind-why ind-section">
        <div className="ind-container">

          <div className="ind-centered-heading">

            <span className="ind-section-label">
              WHY SSR MARK & PRINT
            </span>

            <h2>
              Supporting Your Business
              <span> Labelling Requirements</span>
            </h2>

            <p>
              Practical product options and printing supplies
              to support different industries and applications.
            </p>

          </div>

          <div className="ind-benefit-grid">

            {benefits.map((benefit) => (
              <div className="ind-benefit" key={benefit.icon}>

                <span>{benefit.icon}</span>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL GET A QUOTE SECTION */}

      <section className="ind-cta">
        <div className="ind-container ind-cta-content">

          <div>

            <span>LET'S FIND THE RIGHT SOLUTION</span>

            <h2>
              Need Barcode Labels or
              <strong> Industrial Printing Products?</strong>
            </h2>

            <p>
              Contact SSR Mark & Print for barcode labels,
              custom printed labels, industrial printers,
              thermal paper rolls and printing ribbons
              in Bangalore.
            </p>

          </div>

          <Link
            to="/contact"
            className="ind-btn ind-btn-orange"
          >
            Get a Quote <span>→</span>
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Industries;
