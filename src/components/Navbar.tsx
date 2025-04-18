
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-darkgray-dark/90 backdrop-blur-md shadow-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">
              <span className="text-white">TKZ</span>
              <span className="gold-text">EDITS</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("services")}
              className="text-lightgray hover:text-white transition-colors duration-200"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="text-lightgray hover:text-white transition-colors duration-200"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-lightgray hover:text-white transition-colors duration-200"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gold hover:text-gold-light transition-colors duration-200"
            >
              Contato
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-darkgray-dark border-t border-darkgray-lighter mt-3">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-lightgray hover:text-white py-2 transition-colors duration-200"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="text-lightgray hover:text-white py-2 transition-colors duration-200"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-lightgray hover:text-white py-2 transition-colors duration-200"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gold hover:text-gold-light py-2 transition-colors duration-200"
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
