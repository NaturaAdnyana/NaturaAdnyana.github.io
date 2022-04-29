import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const Navbar = React.lazy(() => import("./components/Navbar"));
const Footer = React.lazy(() => import("./components/Footer"));
const Home = React.lazy(() => import("./pages/home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const UnderContstruction = React.lazy(() =>
  import("./pages/UnderContstruction")
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<span>Loading. . .</span>}>
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
      </Suspense>
    </div>
  );
}

export default App;
