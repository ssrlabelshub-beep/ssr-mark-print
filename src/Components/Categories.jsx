
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

// IMPORT CATEGORY IMAGES
import thermalPaper from '../assets/images/categories/thermal-paper.png';
import barcodeLabels from '../assets/images/categories/barcode-labels.png';
import directThermal from '../assets/images/categories/direct-thermal.png';
import thermalTransfer from '../assets/images/categories/thermal-transfer.png';
import chromeLabels from '../assets/images/categories/chrome-labels.png';
import polyesterLabels from '../assets/images/categories/Polyster Labels.png';
import barcodePrinter from '../assets/images/categories/barcode-printer.png';
import barcodeRibbons from '../assets/images/categories/barcode-ribbons.png';

// CATEGORY DATA
const categories = [
  {
    id: 1,
    name: 'Thermal Paper Rolls',
    description: 'High-quality thermal billing and receipt paper rolls.',
    image: thermalPaper,
    count: 'Multiple Sizes',
    slug: 'thermal-paper-rolls',
  },
  {
    id: 2,
    name: 'Barcode Labels',
    description: 'Premium barcode labels for product identification.',
    image: barcodeLabels,
    count: 'Multiple Sizes',
    slug: 'barcode-labels',
  },
  {
    id: 3,
    name: 'Direct Thermal Labels',
    description: 'Direct thermal stickers for clear and reliable printing.',
    image: directThermal,
    count: 'Multiple Sizes',
    slug: 'direct-thermal-labels',
  },
  {
    id: 4,
    name: 'Thermal Transfer Labels',
    description: 'Durable labels suitable for thermal transfer printing.',
    image: thermalTransfer,
    count: 'Multiple Sizes',
    slug: 'thermal-transfer-labels',
  },
  {
    id: 5,
    name: 'Chrome Labels',
    description: 'Premium glossy chrome labels for product packaging.',
    image: chromeLabels,
    count: 'Custom Sizes',
    slug: 'chrome-labels',
  },
  {
    id: 6,
    name: 'Polyester Labels',
    description: 'Durable polyester labels for industrial and product identification.',
    image: polyesterLabels,
    count: 'Custom Sizes',
    slug: 'polyester-labels',
  },
  {
    id: 7,
    name: 'Barcode Printers',
    description: 'Reliable barcode printing solutions for businesses.',
    image: barcodePrinter,
    count: 'Multiple Models',
    slug: 'barcode-printers',
  },
  {
    id: 8,
    name: 'Barcode Ribbons',
    description: 'Quality thermal transfer ribbons for barcode printers.',
    image: barcodeRibbons,
    count: 'Multiple Types',
    slug: 'barcode-ribbons',
  },
];

function Categories() {
  const [search, setSearch] = useState('');

  // FILTER CATEGORIES
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="categories-page">

      {/* CATEGORY SECTION */}

      <section className="categories-main">

        {/* SEARCH BAR */}

        <div className="categories-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search product categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              type="button"
              className="categories-clear"
              onClick={() => setSearch('')}
            >
              ×
            </button>
          )}
        </div>

        {/* CATEGORY CARDS */}

        <div className="categories-grid">

          {filteredCategories.map((category) => (
            <article className="category-card" key={category.id}>

              {/* IMAGE */}

              <div className="category-image">

                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                />

                <span className="category-count">
                  {category.count}
                </span>

              </div>

              {/* DETAILS */}

              <div className="category-card-content">

                <h3>{category.name}</h3>

                <p>{category.description}</p>

                <Link
                  to={`/products?category=${category.slug}`}
                  className="category-view-button"
                >
                  View Products <span>→</span>
                </Link>

              </div>

            </article>
          ))}

        </div>

        {/* NO SEARCH RESULTS */}

        {filteredCategories.length === 0 && (
          <div className="categories-empty">
            <h3>No Categories Found</h3>
            <p>Try searching with another category name.</p>
          </div>
        )}

      </section>

      {/* ENQUIRY SECTION */}

      <section className="categories-enquiry">

        <div>
          <span>NEED HELP CHOOSING?</span>

          <h2>
            Looking for the Right Label or Printer Solution?
          </h2>

          <p>
            Contact our team for product information, pricing
            and customized requirements.
          </p>
        </div>

        <Link to="/contact" className="categories-enquiry-button">
          Contact Us <span>→</span>
        </Link>

      </section>

    </main>
  );
}

export default Categories;
