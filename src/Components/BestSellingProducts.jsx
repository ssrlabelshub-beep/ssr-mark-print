import React from 'react';
import { Link } from 'react-router-dom';
import './BestSellingProducts.css';

import barcodeLabel from '../assets/images/products/barcode-label-roll.png';
import thermalBilling from '../assets/images/products/thermal-billing-roll.png';
import printedBarcode from '../assets/images/products/printed-barcode-label.png';
import directThermal from '../assets/images/products/direct-thermal-label.png';
import thermalRibbon from '../assets/images/products/thermal-transfer-ribbon.png';
import printedThermal from '../assets/images/products/printed-thermal-roll.png';

const products = [
  {
    id: 1,
    name: 'Barcode Label Rolls',
    size: '50×25mm, 58×37mm, 100×150mm',
    image: barcodeLabel
  },
  {
    id: 2,
    name: 'Thermal Billing Rolls',
    size: '2 Inch, 3 Inch',
    image: thermalBilling
  },
  {
    id: 3,
    name: 'Printed Barcode Labels',
    size: 'Custom Sizes Available',
    image: printedBarcode
  },
  {
    id: 4,
    name: 'Direct Thermal Labels',
    size: '33×25mm, 50×25mm, 75×50mm',
    image: directThermal
  },
  {
    id: 5,
    name: 'Thermal Transfer Ribbons',
    size: 'Various Sizes Available',
    image: thermalRibbon
  },
  {
    id: 6,
    name: 'Printed Thermal Rolls',
    size: '2 Inch, 3 Inch',
    image: printedThermal
  }
];

function BestSellingProducts() {
  return (
    <section className="best-selling-section">
      <div className="best-selling-container">

        <div className="best-selling-heading">
          <span className="best-selling-subtitle">
            OUR TOP PRODUCTS
          </span>
          <h2>
            Our Best Selling <span>Products</span>
          </h2>
        </div>

        <div className="best-selling-grid">
          {products.map((product) => (
            <div className="best-product-card" key={product.id}>

              <div className="best-product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
              </div>

              <div className="best-product-info">
                <h3>{product.name}</h3>
                <p>
                  <strong>Size:</strong> {product.size}
                </p>

                <Link to="/contact" className="enquire-btn">
                  Enquire Now
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BestSellingProducts;