import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/home/";
import NotFound from "./pages/NotFound";
import UnderContstruction from "./pages/UnderContstruction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="scroll-smooth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="works" element={<UnderContstruction />} />
          <Route path="blogs" element={<UnderContstruction />} />
          <Route path="certifications" element={<UnderContstruction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
