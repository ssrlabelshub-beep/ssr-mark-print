
import React from 'react';
import { Link } from 'react-router-dom';

function WhyIndustriesFooter() {
  const benefits = [
    { icon: '🏅', title: 'Superior', subtitle: 'Quality Rolls' },
    { icon: '▱', title: 'Wide Range', subtitle: 'of Sizes' },
    { icon: '₹', title: 'Competitive', subtitle: 'Pricing' },
    { icon: '🚚', title: 'Fast & Safe', subtitle: 'Delivery' },
    { icon: '🤝', title: 'Bulk &', subtitle: 'Custom Orders' }
  ];

  const industries = [
    { icon: '🛒', title: 'Retail', subtitle: 'Stores' },
    { icon: '🛍️', title: 'Supermarkets', subtitle: '& Hypermarkets' },
    { icon: '🏥', title: 'Hospitals &', subtitle: 'Pharmacies' },
    { icon: '🚚', title: 'Logistics &', subtitle: 'Warehousing' },
    { icon: '🍽️', title: 'Restaurants', subtitle: '& Cafes' },
    { icon: '🏭', title: 'Manufacturing', subtitle: '& Packaging' },
    { icon: '📦', title: 'E-commerce', subtitle: '& Shipping' }
  ];

  const products = [
    'Barcode Label Rolls',
    'Thermal Paper Rolls',
    'Printed Labels',
    'Direct Thermal Labels',
    'Thermal Transfer Ribbons',
    'Billing Machine Rolls'
  ];

  const shopAddress =
    '2nd Floor, Laxminarayanapura, Gulimangala, Bommasandra, Near Electronic City, Huskur Post, Anekal Taluk, Bengaluru - 560099, Karnataka, India';

  const mapLink =
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(shopAddress);

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        /* WHY CHOOSE US */

        .wif-section {
          width: 94%;
          max-width: 1450px;
          margin: 22px auto;
          font-family: Arial, sans-serif;
        }

        .wif-why {
          background: #062344;
          color: white;
          border-radius: 12px;
          padding: 15px 22px;
          display: flex;
          align-items: center;
        }

        .wif-why-heading {
          width: 190px;
          min-width: 190px;
          border-right: 1px solid #718096;
          padding-right: 18px;
        }

        .wif-why-heading h2 {
          font-size: 24px;
          line-height: 1.1;
          margin: 0 0 10px;
          font-weight: 800;
        }

        .wif-orange-line {
          display: block;
          width: 75px;
          height: 4px;
          background: #f47721;
          border-radius: 5px;
        }

        .wif-benefits {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }

        .wif-benefit {
          text-align: center;
          padding: 0 8px;
          border-right: 1px solid #718096;
        }

        .wif-benefit:last-child {
          border-right: none;
        }

        .wif-benefit-icon {
          color: #ff941f;
          font-size: 29px;
          margin-bottom: 5px;
        }

        .wif-benefit h3,
        .wif-benefit p {
          font-size: 13px;
          line-height: 1.35;
          margin: 0;
          color: white;
        }

        /* INDUSTRIES */

        .wif-industries-heading {
          text-align: center;
          margin: 20px 0 15px;
        }

        .wif-industries-heading h2 {
          color: #102b50;
          font-size: 29px;
          font-weight: 800;
          margin: 0 0 5px;
        }

        .wif-industries-heading h2 span {
          color: #f47721;
        }

        .wif-industries-heading p {
          color: #333;
          font-size: 13px;
          font-weight: 600;
          margin: 0;
        }

        .wif-industries-grid {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 12px;
        }

        .wif-industry-card {
          min-height: 125px;
          background: white;
          border: 1px solid #e5eaf0;
          border-radius: 12px;
          box-shadow: 0 3px 7px rgba(16,43,80,.08);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 10px 5px;
          transition: .3s;
        }

        .wif-industry-card:hover {
          transform: translateY(-4px);
          border-color: #f47721;
          box-shadow: 0 5px 14px rgba(16,43,80,.12);
        }

        .wif-industry-icon {
          font-size: 30px;
          margin-bottom: 7px;
        }

        .wif-industry-card h3 {
          color: #102b50;
          font-size: 12px;
          font-weight: 800;
          line-height: 1.4;
          margin: 0;
        }

        .wif-industry-underline {
          width: 48px;
          height: 4px;
          background: #f47721;
          border-radius: 5px;
          margin-top: 9px;
        }

        /* QUOTATION */

        .wif-quotation {
          min-height: 75px;
          margin-top: 28px;
          background: #f0f4fc;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wif-quotation-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 13px;
          background: #ff6500;
          color: white;
          text-decoration: none;
          border-radius: 10px;
          padding: 13px 28px;
          font-size: 19px;
          font-weight: 800;
          transition: .3s;
        }

        .wif-quotation-button:hover {
          background: #102b50;
          color: white;
        }

        /* FOOTER */

        .wif-footer {
          width: 100%;
          background: #062344;
          color: white;
          padding: 28px 2%;
          font-family: Arial, sans-serif;
          overflow: hidden;
        }

        .wif-footer-container {
          width: 100%;
          max-width: 1800px;
          margin: auto;
          display: grid !important;

          grid-template-columns:
            minmax(0, 1.05fr)
            minmax(0, 0.8fr)
            minmax(0, 1.05fr)
            minmax(0, 2.2fr)
            minmax(0, 0.85fr);

          align-items: start;
          gap: 16px;
        }

        .wif-footer-company,
        .wif-footer-links,
        .wif-footer-products,
        .wif-footer-contact,
        .wif-footer-map-column {
          width: auto;
          min-width: 0;
          margin: 0;
          grid-row: 1;
          padding-right: 12px;
          border-right: 1px solid rgba(255,255,255,.35);
        }

        .wif-footer-map-column {
          border-right: none;
          padding-right: 0;
        }

        /* COMPANY */

        .wif-footer-company h2 {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 19px;
          margin: 0 0 8px;
          white-space: nowrap;
          color: white;
        }

        .wif-footer-company h2 span {
          color: #ff941f;
        }

        .wif-footer-logo {
          border: 3px solid #ff941f;
          border-radius: 5px;
          padding: 3px 5px;
        }

        .wif-footer-company h4 {
          font-size: 11px;
          line-height: 1.5;
          font-weight: 500;
          margin: 0 0 12px 38px;
          color: white;
        }

        .wif-footer-company p {
          font-size: 12px;
          line-height: 1.5;
          margin: 0;
          color: white;
        }

        /* FOOTER HEADINGS AND LINKS */

        .wif-footer h3 {
          color: #ff941f;
          font-size: 15px;
          margin: 7px 0 12px;
          font-weight: 800;
        }

        .wif-footer-links a,
        .wif-footer-products a {
          display: block;
          color: white;
          text-decoration: none;
          font-size: 11px;
          line-height: 1.9;
          white-space: nowrap;
        }

        .wif-footer-links a:hover,
        .wif-footer-products a:hover,
        .wif-contact-item a:hover {
          color: #ff941f;
        }

        /* CONTACT DETAILS */

        .wif-contact-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
          min-width: 0;
        }

        .wif-contact-icon {
          width: 22px;
          min-width: 22px;
          text-align: center;
          font-size: 17px;
          color: white;
        }

        .wif-contact-item p {
          font-size: 12px;
          line-height: 1.5;
          color: white;
          margin: 0;
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .wif-contact-item a {
          font-size: 12px;
          color: white;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        /* ADDRESS - FIXED MULTILINE DESIGN */

        .wif-address-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin: 12px 0 20px;
          width: 100%;
          min-width: 0;
        }

        .wif-address-row .wif-contact-icon {
          padding-top: 2px;
          font-size: 19px;
        }

        .wif-address-row p {
          font-size: 12px;
          line-height: 1.8;
          white-space: normal;
          margin: 0;
          overflow: visible;
          text-overflow: unset;
          color: white;
          min-width: 0;
          overflow-wrap: anywhere;
          word-break: normal;
        }

        /* MAP */

        .wif-map {
          display: flex;
          width: 100%;
          height: 125px;
          max-width: 220px;
          margin: 0 auto;
          border-radius: 11px;

          background:
            linear-gradient(35deg, transparent 46%, #e6d7a8 47%, #e6d7a8 49%, transparent 50%),
            linear-gradient(125deg, transparent 40%, white 41%, white 45%, transparent 46%),
            repeating-linear-gradient(0deg, #e8f0e6 0 20px, #dce9dc 21px 22px);

          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          text-decoration: none;
          transition: .3s;
        }

        .wif-map:hover {
          transform: translateY(-3px);
        }

        .wif-map span {
          font-size: 32px;
        }

        .wif-map small {
          color: #102b50;
          background: rgba(255,255,255,.9);
          padding: 6px 10px;
          border-radius: 5px;
          font-size: 10px;
          font-weight: 700;
        }

        /* COPYRIGHT */

        .wif-footer-bottom {
          width: 100%;
          margin: 22px auto 0;
          padding: 12px 0 0;
          border-top: 1px solid rgba(255,255,255,.25);
          text-align: center;
        }

        .wif-footer-bottom p {
          color: #dce4ed;
          font-size: 11px;
          margin: 0;
        }

        /* TABLET */

        @media (max-width: 1050px) {
          .wif-footer-container {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }

          .wif-footer-company,
          .wif-footer-links,
          .wif-footer-products,
          .wif-footer-contact,
          .wif-footer-map-column {
            grid-row: auto;
          }

          .wif-industries-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .wif-footer-company,
          .wif-footer-links,
          .wif-footer-products,
          .wif-footer-contact,
          .wif-footer-map-column {
            border-right: none;
          }
        }

        /* SMALLER TABLETS */

        @media (max-width: 850px) {
          .wif-why {
            flex-direction: column;
            align-items: stretch;
            gap: 18px;
          }

          .wif-why-heading {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid #718096;
            padding: 0 0 12px;
          }

          .wif-why-heading h2 br {
            display: none;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .wif-section {
            width: 92%;
          }

          .wif-benefits {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px 8px;
          }

          .wif-benefit {
            border-right: none;
          }

          .wif-benefit:last-child {
            grid-column: span 2;
          }

          .wif-industries-heading h2 {
            font-size: 23px;
          }

          .wif-industries-heading p {
            font-size: 11px;
          }

          .wif-industries-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .wif-industry-card {
            min-height: 115px;
          }

          .wif-quotation {
            min-height: 65px;
            margin-top: 20px;
          }

          .wif-quotation-button {
            font-size: 16px;
            padding: 11px 20px;
          }

          .wif-footer-container {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 25px 15px;
          }

          .wif-footer-company,
          .wif-footer-links,
          .wif-footer-products,
          .wif-footer-contact,
          .wif-footer-map-column {
            width: auto;
            grid-row: auto;
            border-right: none;
            padding-right: 0;
          }

          .wif-address-row {
            gap: 8px;
            margin: 12px 0 17px;
          }

          .wif-address-row p {
            font-size: 11px;
            line-height: 1.7;
          }

          .wif-contact-item p,
          .wif-contact-item a {
            font-size: 11px;
          }

          .wif-map {
            max-width: 100%;
          }
        }

        @media (max-width: 380px) {
          .wif-footer-container {
            grid-template-columns: 1fr !important;
          }

          .wif-footer-company h2 {
            font-size: 18px;
          }
        }

      `}</style>

      {/* WHY CHOOSE US */}

      <section className="wif-section">

        <div className="wif-why">

          <div className="wif-why-heading">
            <h2>Why<br />Choose Us?</h2>
            <span className="wif-orange-line"></span>
          </div>

          <div className="wif-benefits">
            {benefits.map((item, index) => (
              <div className="wif-benefit" key={index}>
                <div className="wif-benefit-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>

        </div>

        {/* INDUSTRIES WE SERVE */}

        <div className="wif-industries-heading">
          <h2>Industries <span>We Serve</span></h2>
          <p>Label & Billing Roll Solutions for Multiple Business Sectors</p>
        </div>

        <div className="wif-industries-grid">
          {industries.map((item, index) => (
            <div className="wif-industry-card" key={index}>
              <div className="wif-industry-icon">{item.icon}</div>
              <h3>
                {item.title}<br />
                {item.subtitle}
              </h3>
              <span className="wif-industry-underline"></span>
            </div>
          ))}
        </div>

        {/* GET QUOTATION */}

        <div className="wif-quotation">
          <Link to="/contact" className="wif-quotation-button">
            <span>▤</span>
            Get Quotation
            <span>➜</span>
          </Link>
        </div>

      </section>

      {/* FOOTER */}

      <footer className="wif-footer">

        <div className="wif-footer-container">

          {/* 1. COMPANY DETAILS */}

          <div className="wif-footer-company">
            <h2>
              <span className="wif-footer-logo">▥</span>
              <span><b>SSR</b> Mark & Print</span>
            </h2>

            <h4>
              Industrial Barcode Labels and<br />
              Printer Solutions
            </h4>

            <p>
              Your Trusted Partner for Label Rolls,
              Billing Rolls & Custom Printed Labels
              in Bengaluru.
            </p>
          </div>

          {/* 2. QUICK LINKS */}

          <div className="wif-footer-links">
            <h3>Quick Links</h3>
            <Link to="/">› Home</Link>
            <Link to="/products">› Products</Link>
            <Link to="/about">› About Us</Link>
            <Link to="/industries">› Industries</Link>
            <Link to="/contact">› Contact Us</Link>
          </div>

          {/* 3. OUR PRODUCTS */}

          <div className="wif-footer-products">
            <h3>Our Products</h3>

            {products.map((product, index) => (
              <Link to="/products" key={index}>
                › {product}
              </Link>
            ))}
          </div>

          {/* 4. CONTACT US */}

          <div className="wif-footer-contact">
            <h3>Contact Us</h3>

            <div className="wif-address-row">
              <span className="wif-contact-icon">📍</span>

              <p>
                2nd Floor, Laxminarayanapura,<br />
                Gulimangala, Bommasandra,<br />
                Near Electronic City, Huskur Post,<br />
                Anekal Taluk, Bengaluru - 560099,<br />
                Karnataka, India.
              </p>
            </div>

            <div className="wif-contact-item">
              <span className="wif-contact-icon">☎</span>
              <p>
                <a href="tel:+917483023426">
                  +91 74830 23426
                </a>
              </p>
            </div>

            <div className="wif-contact-item">
              <span className="wif-contact-icon">✉</span>
              <p>
                <a href="mailto:sales@ssrmarkprint.in">
                  sales@ssrmarkprint.in
                </a>
              </p>
            </div>

            <div className="wif-contact-item">
              <span className="wif-contact-icon">◎</span>
              <p>
                <a
                  href="https://www.ssrmarkprint.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.ssrmarkprint.in
                </a>
              </p>
            </div>
          </div>

          {/* 5. LOCATION */}

          <div className="wif-footer-map-column">
            <h3>Location</h3>

            <a
              className="wif-map"
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Find SSR Mark and Print on Google Maps"
            >
              <span>📍</span>
              <small>Find Our Location</small>
            </a>
          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="wif-footer-bottom">
          <p>
            © {new Date().getFullYear()} SSR Mark & Print.
            All Rights Reserved.
          </p>
        </div>

      </footer>
    </>
  );
}

export default WhyIndustriesFooter;
