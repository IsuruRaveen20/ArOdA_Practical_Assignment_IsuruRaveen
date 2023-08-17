import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/Navbar/NavBar";
import Home from "./components/Home";
import Flavour from "./components/Flavour";
import About from "./components/About";
import Contact from "./components/Contact";
import Shop from "./components/Shop";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flavours" element={<Flavour />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

