// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Features = lazy(() => import("./pages/Features"));
const Events = lazy(() => import("./pages/Events"));
const Partners = lazy(() => import("./pages/Partners"));
const Team = lazy(() => import("./pages/Team"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="relative z-10">
          <Navbar />
          <main>
            <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/events" element={<Events />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/team" element={<Team />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
