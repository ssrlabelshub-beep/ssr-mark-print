
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

// =========================================
// COMPONENTS
// =========================================

import Navbar from "./Components/Navbar.jsx";
import HeroSlider from "./Components/HeroSlider.jsx";
import ProductCategories from "./Components/ProductCategories.jsx";
import BestSellingProducts from "./Components/BestSellingProducts.jsx";
import WhyIndustriesFooter from "./Components/WhyIndustriesFooter.jsx";

import Categories from "./Components/Categories.jsx";

// =========================================
// WEBSITE PAGES
// =========================================

import Products from "./Pages/Products.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import About from "./Pages/About.jsx";
import Industries from "./Pages/Industries.jsx";
import ServiceAreas from "./Pages/ServiceAreas.jsx";
import Contact from "./Pages/Contact.jsx";

// =========================================
// ADMIN PAGES
// =========================================

import AdminLogin from "./Pages/AdminLogin.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";

// =========================================
// HOME PAGE
// =========================================

function Home() {
  return (
    <>
      <HeroSlider />
      <ProductCategories />
      <BestSellingProducts />
      <WhyIndustriesFooter />
    </>
  );
}

// =========================================
// 404 PAGE
// =========================================

function NotFound() {
  return (
    <section className="container section">
      <h1 className="section-title">
        404 - Page Not Found
      </h1>

      <p>
        Sorry, the page you are looking for does not exist.
      </p>
    </section>
  );
}

// =========================================
// APPLICATION ROUTES
// =========================================

function AppRoutes() {

  const location = useLocation();

  // Hide public Navbar on admin pages
  const isAdminPage =
    location.pathname.startsWith("/admin");

  return (
    <>

      {/* COMMON WEBSITE NAVBAR */}
      {!isAdminPage && <Navbar />}

      {/* APPLICATION ROUTES */}
      <Routes>

        {/* =================================
            WEBSITE HOME
        ================================= */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT US */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* CATEGORIES */}
        <Route
          path="/categories"
          element={<Categories />}
        />

        {/* PRODUCTS LISTING */}
        <Route
          path="/products"
          element={<Products />}
        />

        {/* PRODUCT DETAILS */}
        <Route
          path="/products/:slug"
          element={<ProductDetails />}
        />

        {/* INDUSTRIES */}
        <Route
          path="/industries"
          element={<Industries />}
        />

        {/* SERVICE AREAS */}
        <Route
          path="/service-areas"
          element={<ServiceAreas />}
        />

        {/* CONTACT US */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* =================================
            ADMIN LOGIN
        ================================= */}

        <Route
          path="/admin"
          element={<AdminLogin />}
        />

        {/* =================================
            ADMIN DASHBOARD
        ================================= */}

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        {/* =================================
            404 PAGE
        ================================= */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </>
  );
}

// =========================================
// MAIN APP
// =========================================

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );

}

export default App;
