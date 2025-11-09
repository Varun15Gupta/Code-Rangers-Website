import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Code2, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/events", label: "Events" },
    { path: "/partners", label: "Partners" },
    { path: "/team", label: "Team" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-cyan-500/20" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg blur-md opacity-50 animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Code Rangers</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={`relative transition-all duration-300 capitalize group ${location.pathname === item.path ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"}`}>
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
            ))}
            <a href="https://forms.gle/1JYbtSHaowKCnAit9" target="_blank" rel="noopener noreferrer" className="relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold overflow-hidden group inline-block text-center">
              <span className="relative z-10">Join Club</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 transition-colors duration-200 w-full text-left capitalize ${location.pathname === item.path ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"}`}>
                {item.label}
              </Link>
            ))}

            <div className="px-3 py-2">
  <a
    href="https://forms.gle/bKLj4hYJ3gV8zC3AA"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full block text-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold"
  >
    Join Club
  </a>
</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
