
import { Link } from 'react-router-dom';
import './ProductCategories.css';

// CATEGORY IMAGES
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
    name: 'Barcode Labels',
    image: barcodeLabels,
    slug: 'barcode-labels'
  },
  {
    name: 'Direct Thermal Labels',
    image: directThermal,
    slug: 'direct-thermal-labels'
  },
  {
    name: 'Thermal Transfer Labels',
    image: thermalTransfer,
    slug: 'thermal-transfer-labels'
  },
  {
    name: 'Chrome Labels',
    image: chromeLabels,
    slug: 'chrome-labels'
  },
  {
    name: 'Polyester Labels',
    image: polyesterLabels,
    slug: 'polyester-labels'
  },
  {
    name: 'Thermal Paper Rolls',
    image: thermalPaper,
    slug: 'thermal-paper-rolls'
  },
  {
    name: 'Barcode Printers',
    image: barcodePrinter,
    slug: 'barcode-printers'
  },
  {
    name: 'Barcode Ribbons',
    image: barcodeRibbons,
    slug: 'barcode-ribbons'
  }
];

// PRODUCT CATEGORIES COMPONENT
function ProductCategories() {
  return (
    <section className="categories-section">
      <div className="categories-container">

        {/* SECTION HEADING */}
        <div className="categories-heading">
          <span className="heading-line"></span>

          <h2>
            Our <span>Product Categories</span>
          </h2>

          <span className="heading-line"></span>
        </div>

        {/* CATEGORY CARDS */}
        <div className="categories-grid">

          {categories.map((category) => (
            <Link
              to={`/products?category=${category.slug}`}
              className="category-card"
              key={category.slug}
            >

              <div className="category-image">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                />
              </div>

              <h3>{category.name}</h3>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProductCategories;
