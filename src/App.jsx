import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FloatingActions from "./components/FloatingActions/FloatingActions";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import About from "./pages/About/About";
import ProductDetails from "./pages/Products/ProductDetails";
import Offers from "./pages/Offers/Offers";

import WebitecallPopup from "./components/CallPopupoverweb/WebitecallPopup";

/* =====================================================
   SCROLL TO TOP
===================================================== */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* =====================================================
   APP
===================================================== */

function App() {
  const [globalSearch, setGlobalSearch] = useState("");

  return (
    <>
      <ScrollToTop />

      <Navbar
        searchValue={globalSearch}
        onSearchChange={setGlobalSearch}
      />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <Home
              searchValue={globalSearch}
              onSearchChange={setGlobalSearch}
            />
          }
        />

        {/* Main Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/offers" element={<Offers />} />

        {/* Product Details */}
        <Route
          path="/product/:slug"
          element={<ProductDetails />}
        />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <Home
              searchValue={globalSearch}
              onSearchChange={setGlobalSearch}
            />
          }
        />
      </Routes>

      <Footer />
      <FloatingActions />

      {/* GLOBAL CALL POPUP */}
      <WebitecallPopup />

    </>

  );
}

export default App;