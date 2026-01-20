import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
// import { Button } from '../src/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const scrollToContact = () => {
    if (location.pathname !== "/contact") {
      window.location.href = "/contact";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500/60 shadow-lg"
            >
              <img
                src="https://comtronus.keka.com/files/ae509465-ed9c-4b22-97cf-4466793b1020/200x200/profileimage/ca6dfd94502347a38a7dcd95d4e8b797.jpg"
                // src={profilePic}
                alt="Aman Kumar"
                className="w-full h-full object-cover"
              />
              {/* subtle glow */}
              <div className="absolute inset-0 rounded-full ring-2 ring-purple-400/30" />
            </motion.div>

            {/* Name */}
            <motion.span
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-extrabold tracking-tight
      bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400
      bg-clip-text text-transparent
      group-hover:from-pink-400 group-hover:to-purple-400
      transition-all duration-300
      drop-shadow-sm"
            >
              Aman Kumar
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors hover:text-purple-400 ${
                  location.pathname === link.path
                    ? "text-purple-400"
                    : "text-gray-300"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400"
                  />
                )}
              </Link>
            ))}
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {/* <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                      location.pathname === link.path
                        ? "text-purple-400"
                        : "text-gray-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white w-full"
                >
                  Get In Touch
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
        <AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="
        md:hidden
        absolute
        top-full
        left-0
        right-0
        z-[60]
        bg-slate-950
        border-t border-white/10
        shadow-2xl
      "
    >
      <div className="flex flex-col gap-5 py-6 px-4">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base font-medium transition-colors ${
              location.pathname === link.path
                ? "text-purple-400"
                : "text-gray-200"
            }`}
          >
            {link.label}
          </Link>
        ))}

        <Button
          onClick={scrollToContact}
          className="mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full"
        >
          Get In Touch
        </Button>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      </nav>
    </header>
  );
};

export default Header;
