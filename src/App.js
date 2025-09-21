// src/App.js
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <Products />
        <Services />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
