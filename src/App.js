import React, { Suspense, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingPage from "./components/LoadingPage";
import MobileNavbar from "./components/MobileNavbar";
import { AnimatePresence } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import InWebNotification from "./components/InWebNotification";
import { useState } from "react";
// import Blogs from "./pages/blogs";
// import Blog from "./pages/blogs/Blog";

const Navbar = React.lazy(() => import("./components/Navbar"));
const Footer = React.lazy(() => import("./components/Footer"));
const Home = React.lazy(() => import("./pages/home"));
const Works = React.lazy(() => import("./pages/works"));
const Certifications = React.lazy(() => import("./pages/certifications"));
const Contact = React.lazy(() => import("./pages/contact"));
const Blogs = React.lazy(() => import("./pages/blogs"));
const Blog = React.lazy(() => import("./pages/blogs/Blog"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const UnderContstruction = React.lazy(() =>
  import("./pages/UnderContstruction")
);

function App() {
  const location = useLocation();

  const CACHE_KEY = "USERNAME";

  const [popUps, setPopUps] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (typeof Storage !== "undefined") {
      if (localStorage.getItem(CACHE_KEY)) {
        setUsername(localStorage.getItem(CACHE_KEY));
        setPopUps(true);
        setTimeout(() => {
          setPopUps(false);
        }, 10000);
      }
    }
  }, []);

  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Natura Adnyana - Personal Website</title>
        <link rel="canonical" href="https://www.naturaadnyana.com/" />
        <meta name="author" content="Natura Adnyana"></meta>
        <meta
          name="keywords"
          content="Natura Adnyana, Balinese Web Developer, Web Developer, React Developer"
        ></meta>
        <meta
          name="description"
          content="Natura Adnyana Personal Website. Check at Natura's Works, Blogs, and Certifications here."
        ></meta>
        <meta property="og:title" content="Natura Adnyana - Personal Website" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://cdn.jsdelivr.net/gh/NaturaAdnyana/NaturaAdnyana.github.io/src/assets/images/2022me.webp"
        />
        <meta
          property="og:description"
          content="Front-end Web Developer | Graphic Designer | Aspiring Software Engineer"
        />
        <meta property="og:url" content="https://www.naturaadnyana.com" />
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
                <Route path="certifications" element={<Certifications />} />
                <Route path="contact" element={<Contact />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="blogs/:id" element={<Blog />} />
                <Route
                  path="under-construction"
                  element={<UnderContstruction />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
          <footer>
            <Footer />
          </footer>
          <AnimatePresence>
            {popUps && (
              <InWebNotification
                className="z-20"
                message={`Welcome back ${username} 👋`}
              />
            )}
          </AnimatePresence>
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;
