import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingPage from "./components/LoadingPage";
import MobileNavbar from "./components/MobileNavbar";
import { AnimatePresence } from "framer-motion";

const Navbar = React.lazy(() => import("./components/Navbar"));
const Footer = React.lazy(() => import("./components/Footer"));
const Home = React.lazy(() => import("./pages/home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const UnderContstruction = React.lazy(() =>
  import("./pages/UnderContstruction")
);

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Suspense fallback={<LoadingPage />}>
        <header>
          <Navbar />
          <MobileNavbar />
        </header>
        <main>
          <AnimatePresence>
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="works" element={<UnderContstruction />} />
              <Route path="blogs" element={<UnderContstruction />} />
              <Route path="certifications" element={<UnderContstruction />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>
        <footer>
          <Footer />
        </footer>
      </Suspense>
    </div>
  );
}

export default App;
