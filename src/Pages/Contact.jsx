
import React, { useEffect, useState } from "react";
import "./Contact.css";
import officeImage from "../assets/images/contact/office.jpeg";
import { supabase } from "../lib/supabase";

// ======================================
// BUSINESS DETAILS
// ======================================

const BUSINESS_PHONE = "+91 7483023426";
const BUSINESS_EMAIL = "ssrlabelshub@gmail.com";
const WHATSAPP_NUMBER = "917483023426";

const BUSINESS_ADDRESS =
  "2nd Floor, Laxminarayanapura, Gulimangala, Bommasandra, Bengaluru, Karnataka, India";

const BUSINESS_HOURS =
  "Monday – Saturday | 9:30 AM – 6:30 PM";

const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=SSR+Mark+%26+Print+Bengaluru";

const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps?q=SSR%20Mark%20%26%20Print%20Bengaluru&output=embed";

// ======================================
// PRODUCT OPTIONS
// ======================================

const productOptions = [
  "Barcode Labels",
  "Direct Thermal Labels",
  "Chrome Labels",
  "Polyester Labels",
  "Industrial Labels",
  "Custom Printed Labels",
  "Thermal Paper Rolls",
  "Thermal Transfer Ribbons",
  "Barcode Label Printers",
  "Printer Accessories",
  "Other Requirements",
];

// ======================================
// INITIAL FORM DATA
// ======================================

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  product: "",
  quantity: "",
  message: "",
};

// ======================================
// CONTACT COMPONENT
// ======================================

function Contact() {
  const [formData, setFormData] = useState(initialFormData);

  const [submitting, setSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });

  // ======================================
  // SEO SETTINGS
  // ======================================

  useEffect(() => {
    document.title =
      "Contact SSR Mark & Print | Barcode Labels & Printers in Bangalore";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content =
      "Contact SSR Mark & Print in Bangalore for barcode labels, industrial labels, direct thermal labels, thermal paper rolls, barcode printers and custom printing solutions.";

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = `${window.location.origin}/contact`;
  }, []);

  // ======================================
  // FORM INPUT HANDLER
  // ======================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitStatus({
      type: "",
      message: "",
    });
  };

  // ======================================
  // SUPABASE + WHATSAPP SUBMISSION
  // ======================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitting) return;

    // Validate required fields
    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const product = formData.product;

    if (!name || !phone || !product) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });

      return;
    }

    setSubmitting(true);

    setSubmitStatus({
      type: "",
      message: "",
    });

    // ====================================
    // PREPARE WHATSAPP MESSAGE
    // ====================================

    const whatsappMessage = `
Hello SSR Mark & Print,

I would like to enquire about your products.

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Product: ${product}
Quantity: ${formData.quantity.trim() || "Not specified"}
Message: ${formData.message.trim() || "No additional message"}

Please contact me with more details and pricing.
    `;

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    // Open a blank tab before the database request
    // to prevent browser popup blocking.

    const whatsappTab = window.open(
      "about:blank",
      "_blank"
    );

    try {
      // ====================================
      // SAVE ENQUIRY IN SUPABASE
      // ====================================

      const { error } = await supabase
        .from("enquiries")
        .insert({
          name,
          phone,
          email: email || null,
          product,
          quantity: formData.quantity.trim() || null,
          message: formData.message.trim() || null,
        });

      // ====================================
      // HANDLE DATABASE ERROR
      // ====================================

      if (error) {
        throw error;
      }

      // ====================================
      // SUCCESS MESSAGE
      // ====================================

      setSubmitStatus({
        type: "success",
        message:
          "Your enquiry has been saved successfully! Opening WhatsApp...",
      });

      // ====================================
      // OPEN WHATSAPP
      // ====================================

      if (whatsappTab && !whatsappTab.closed) {
        whatsappTab.location.href = whatsappURL;
      } else {
        window.location.href = whatsappURL;
      }

      // ====================================
      // RESET FORM
      // ====================================

      setFormData({ ...initialFormData });

    } catch (error) {
      console.error("Supabase enquiry error:", error);

      // Close blank WhatsApp tab if database fails
      if (whatsappTab && !whatsappTab.closed) {
        whatsappTab.close();
      }

      setSubmitStatus({
        type: "error",
        message:
          error.message ||
          "Unable to submit your enquiry. Please try again.",
      });

    } finally {
      setSubmitting(false);
    }
  };

  // ======================================
  // MAIN CONTACT PAGE
  // ======================================

  return (
    <main className="contact-page">

      {/* =================================
          1. TOP SECTION
      ================================= */}

      <section className="contact-top-section">

        <div className="contact-container contact-top-layout">

          <div className="contact-top-content">

            <div className="contact-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span>Contact Us</span>
            </div>

            <span className="contact-tag">
              CONTACT SSR MARK & PRINT
            </span>

            <h1>
              Let's Connect for
              <span> Barcode & Printing Solutions</span>
            </h1>

            <p>
              Looking for barcode labels, industrial labels,
              thermal paper rolls or barcode printers?

              Get in touch with SSR Mark & Print for product
              information, customised solutions and quotation
              enquiries in Bangalore.
            </p>

            <div className="contact-top-actions">

              <a
                href="#contact-enquiry"
                className="contact-btn contact-btn-orange"
              >
                Get a Quote <span>→</span>
              </a>

              <a
                href={`tel:${BUSINESS_PHONE.replace(/\s/g, "")}`}
                className="contact-phone-link"
              >
                <span className="contact-phone-icon">
                  ☎
                </span>

                <span>
                  <small>Call Our Team</small>
                  <strong>{BUSINESS_PHONE}</strong>
                </span>
              </a>

            </div>

          </div>

          {/* OFFICE IMAGE */}

          <div className="contact-top-image">

            <img
              src={officeImage}
              alt="SSR Mark & Print office in Bangalore"
              fetchPriority="high"
            />

            <div className="contact-image-caption">
              <span>OUR WORKPLACE</span>
              <h3>SSR Mark & Print</h3>
            </div>

          </div>

        </div>

      </section>

      {/* =================================
          2. CONTACT INFORMATION
      ================================= */}

      <section className="contact-details-section">

        <div className="contact-container">

          <div className="contact-details-grid">

            {/* PHONE */}

            <article className="contact-detail-card">

              <div className="contact-detail-icon">
                ☎
              </div>

              <div>
                <h3>Call Us</h3>
                <p>Talk to our sales team</p>

                <a
                  href={`tel:${BUSINESS_PHONE.replace(/\s/g, "")}`}
                >
                  {BUSINESS_PHONE}
                </a>
              </div>

            </article>

            {/* EMAIL */}

            <article className="contact-detail-card">

              <div className="contact-detail-icon">
                ✉
              </div>

              <div>
                <h3>Email Us</h3>
                <p>Send your product enquiry</p>

                <a href={`mailto:${BUSINESS_EMAIL}`}>
                  {BUSINESS_EMAIL}
                </a>
              </div>

            </article>

            {/* ADDRESS */}

            <article className="contact-detail-card">

              <div className="contact-detail-icon">
                ⌖
              </div>

              <div>
                <h3>Our Address</h3>
                <p>{BUSINESS_ADDRESS}</p>

                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions →
                </a>
              </div>

            </article>

            {/* BUSINESS HOURS */}

            <article className="contact-detail-card">

              <div className="contact-detail-icon">
                ◷
              </div>

              <div>
                <h3>Working Hours</h3>
                <p>Our business hours</p>

                <strong>{BUSINESS_HOURS}</strong>
              </div>

            </article>

          </div>

        </div>

      </section>

      {/* =================================
          3. ENQUIRY FORM
      ================================= */}

      <section
        className="contact-enquiry-section"
        id="contact-enquiry"
      >

        <div className="contact-container contact-enquiry-layout">

          {/* LEFT CONTENT */}

          <div className="contact-enquiry-info">

            <span className="contact-tag">
              PRODUCT ENQUIRY
            </span>

            <h2>
              How Can We
              <span> Help You?</span>
            </h2>

            <p>
              Tell us about your business requirements.

              Whether you need standard barcode labels,
              custom printed labels, thermal paper rolls
              or printing equipment, our team is ready
              to assist you.
            </p>

            <div className="contact-benefits">

              <div>
                <span>✓</span>
                <p>Product information and specifications</p>
              </div>

              <div>
                <span>✓</span>
                <p>Custom label sizes and printing solutions</p>
              </div>

              <div>
                <span>✓</span>
                <p>Bulk order and quotation enquiries</p>
              </div>

              <div>
                <span>✓</span>
                <p>Barcode printer and ribbon assistance</p>
              </div>

            </div>

            <div className="contact-direct-box">

              <div className="contact-direct-icon">
                ☎
              </div>

              <div>
                <small>Prefer to speak directly?</small>

                <a
                  href={`tel:${BUSINESS_PHONE.replace(/\s/g, "")}`}
                >
                  {BUSINESS_PHONE}
                </a>
              </div>

            </div>

          </div>

          {/* RIGHT FORM */}

          <div className="contact-form-card">

            <div className="contact-form-heading">

              <span>GET IN TOUCH</span>

              <h3>Send Your Enquiry</h3>

              <p>
                Fill out the form and send your enquiry through WhatsApp.
              </p>

            </div>

            <form onSubmit={handleSubmit}>

              <div className="contact-form-grid">

                {/* NAME */}

                <div className="contact-form-field">

                  <label htmlFor="contact-name">
                    Full Name *
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />

                </div>

                {/* PHONE */}

                <div className="contact-form-field">

                  <label htmlFor="contact-phone">
                    Phone Number *
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />

                </div>

                {/* EMAIL */}

                <div className="contact-form-field">

                  <label htmlFor="contact-email">
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />

                </div>

                {/* PRODUCT */}

                <div className="contact-form-field">

                  <label htmlFor="contact-product">
                    Product Required *
                  </label>

                  <select
                    id="contact-product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select a product
                    </option>

                    {productOptions.map((product) => (
                      <option
                        key={product}
                        value={product}
                      >
                        {product}
                      </option>
                    ))}

                  </select>

                </div>

                {/* QUANTITY */}

                <div className="contact-form-field contact-form-full">

                  <label htmlFor="contact-quantity">
                    Quantity / Order Requirement
                  </label>

                  <input
                    id="contact-quantity"
                    type="text"
                    name="quantity"
                    placeholder="Example: 500 rolls or 10,000 labels"
                    value={formData.quantity}
                    onChange={handleChange}
                  />

                </div>

                {/* MESSAGE */}

                <div className="contact-form-field contact-form-full">

                  <label htmlFor="contact-message">
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    placeholder="Describe your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                  />

                </div>

              </div>

              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={submitting}
              >
                {submitting
                  ? "Saving Your Enquiry..."
                  : "Send Enquiry on WhatsApp →"}
              </button>

              {/* SUCCESS / ERROR MESSAGE */}

              {submitStatus.message && (

                <p
                  role="status"
                  aria-live="polite"
                  style={{
                    marginTop: "15px",
                    padding: "12px",
                    borderRadius: "8px",
                    color:
                      submitStatus.type === "success"
                        ? "#166534"
                        : "#991b1b",
                    background:
                      submitStatus.type === "success"
                        ? "#dcfce7"
                        : "#fee2e2",
                  }}
                >
                  {submitStatus.message}
                </p>

              )}

              <p className="contact-form-note">
                Your enquiry is saved securely in our database
                before WhatsApp opens.
              </p>

            </form>

          </div>

        </div>

      </section>

      {/* =================================
          4. GOOGLE MAPS
      ================================= */}

      <section className="contact-location-section">

        <div className="contact-container">

          <div className="contact-location-heading">

            <span className="contact-tag">
              OUR LOCATION
            </span>

            <h2>
              Find Us in <span>Bangalore</span>
            </h2>

            <p>{BUSINESS_ADDRESS}</p>

          </div>

          <div className="contact-map-wrapper">

            <iframe
              title="SSR Mark & Print location in Bangalore"
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

          </div>

          <div className="contact-map-footer">

            <div>
              <strong>SSR Mark & Print</strong>
              <p>{BUSINESS_ADDRESS}</p>
            </div>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="contact-btn contact-btn-orange"
            >
              Open Google Maps →
            </a>

          </div>

        </div>

      </section>

      {/* =================================
          5. FINAL CTA
      ================================= */}

      <section className="contact-final-section">

        <div className="contact-container">

          <span>SSR MARK & PRINT</span>

          <h2>
            Looking for Reliable Barcode & Printing Solutions?
          </h2>

          <p>
            Contact our team today for product information,
            customised label solutions and quotation enquiries.
          </p>

          <a
            href="#contact-enquiry"
            className="contact-btn contact-btn-orange"
          >
            Request a Quote →
          </a>

        </div>

      </section>

    </main>
  );
}

export default Contact;
