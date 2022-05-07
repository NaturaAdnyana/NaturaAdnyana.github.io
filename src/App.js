import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingPage from "./components/LoadingPage";
import MobileNavbar from "./components/MobileNavbar";
import { AnimatePresence } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Navbar = React.lazy(() => import("./components/Navbar"));
const Footer = React.lazy(() => import("./components/Footer"));
const Home = React.lazy(() => import("./pages/home"));
const Works = React.lazy(() => import("./pages/works"));
const Contact = React.lazy(() => import("./pages/contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const UnderContstruction = React.lazy(() =>
  import("./pages/UnderContstruction")
);

function App() {
  const location = useLocation();

  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Natura Personal Website</title>
        <link rel="canonical" href="https://www.naturaadnyana.com/" />
        <meta name="author" content="Natura Adnyana"></meta>
        <meta
          name="keywords"
          content="Natura Adnyana, Bali Web Developer, Web Developer, React Developer"
        ></meta>
        <meta
          name="description"
          content="Natura Adnyana Personal Website. Check at Natura's Works, Blogs, and Certifications here."
        ></meta>
      </Helmet>
      <div className="App">
        <Suspense fallback={<LoadingPage />}>
          <header>
            <Navbar />
            <MobileNavbar />
          </header>
          <main>
            <AnimatePresence
              // initial={false}
              exitBeforeEnter={true}
              // onExitComplete={() => null}
            >
              <Routes location={location} key={location.key}>
                <Route path="/" element={<Home />} />
                <Route path="works" element={<Works />} />
                <Route path="contact" element={<Contact />} />
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
    </HelmetProvider>
  );
}

export default App;
