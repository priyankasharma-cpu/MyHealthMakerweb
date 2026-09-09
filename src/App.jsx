import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";

function App() {
  const [globalSearch, setGlobalSearch] = useState("");

  const currentPath = window.location.pathname.toLowerCase();

  return (
    <>
      <Navbar
        searchValue={globalSearch}
        onSearchChange={setGlobalSearch}
      />

      {currentPath === "/contact" ? (
        <Contact />
      ) : currentPath === "/terms" ? (
        <Terms />
      ) : currentPath === "/privacy" ? (
        <Privacy />
      ) : (
        <Home
          searchValue={globalSearch}
          onSearchChange={setGlobalSearch}
        />
      )}

      <Footer />
    </>
  );
}

export default App;