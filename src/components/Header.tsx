
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Calendar, X, Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 py-2" : "bg-white dark:bg-gray-900 py-3"
      }`}
      style={{ zIndex: 999999 }}
    >
      <div className="dental-container flex justify-between items-center">
        <Link to="/" className="flex items-center relative">
          <img 
            src="/lovable-uploads/70d487cc-c48f-467d-ba2b-76ae7b4ddd60.png" 
            alt="Tandarts Swaelens Logo" 
            className="h-8 sm:h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex gap-6">
            <Link to="/" className={`font-medium text-dental-blue-dark dark:text-dental-blue-light hover:text-dental-blue-medium dark:hover:text-dental-blue-medium transition-colors ${location.pathname === "/" ? "text-dental-blue-medium" : ""}`}>Home</Link>
            <Link to="/diensten" className={`font-medium text-dental-blue-dark dark:text-dental-blue-light hover:text-dental-blue-medium dark:hover:text-dental-blue-medium transition-colors ${location.pathname === "/diensten" ? "text-dental-blue-medium" : ""}`}>Diensten</Link>
            <Link to="/team" className={`font-medium text-dental-blue-dark dark:text-dental-blue-light hover:text-dental-blue-medium dark:hover:text-dental-blue-medium transition-colors ${location.pathname === "/team" ? "text-dental-blue-medium" : ""}`}>Team</Link>
            <Link to="/contact" className={`font-medium text-dental-blue-dark dark:text-dental-blue-light hover:text-dental-blue-medium dark:hover:text-dental-blue-medium transition-colors ${location.pathname === "/contact" ? "text-dental-blue-medium" : ""}`}>Contact</Link>
          </nav>
          <ThemeToggle />
          <Link 
            to="/afspraken" 
            className="bg-[#19A0D1] hover:bg-[#19A0D1]/90 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#19A0D1]/50"
            aria-label="Maak een afspraak online"
          >
            <Calendar className="h-4 w-4" />
            <span>Maak een afspraak</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2 relative" style={{ zIndex: 999999 }}>
          <ThemeToggle />
          <button 
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#19A0D1]/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Sluit menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-dental-blue-dark dark:text-dental-blue-light" />
            ) : (
              <Menu className="h-6 w-6 text-dental-blue-dark dark:text-dental-blue-light" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ zIndex: 999997 }}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 border-l-4 border-dental-blue-medium shadow-2xl transition-transform duration-300 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 999998 }}
      >
        <nav className="pt-20 px-6 flex flex-col gap-6">
          <Link 
            to="/" 
            className={`font-medium text-lg text-dental-blue-dark dark:text-dental-blue-light py-3 border-b border-dental-blue-light dark:border-gray-700 transition-colors hover:text-dental-blue-medium dark:hover:text-dental-blue-medium ${location.pathname === "/" ? "text-dental-blue-medium" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/diensten" 
            className={`font-medium text-lg text-dental-blue-dark dark:text-dental-blue-light py-3 border-b border-dental-blue-light dark:border-gray-700 transition-colors hover:text-dental-blue-medium dark:hover:text-dental-blue-medium ${location.pathname === "/diensten" ? "text-dental-blue-medium" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Diensten
          </Link>
          <Link 
            to="/team" 
            className={`font-medium text-lg text-dental-blue-dark dark:text-dental-blue-light py-3 border-b border-dental-blue-light dark:border-gray-700 transition-colors hover:text-dental-blue-medium dark:hover:text-dental-blue-medium ${location.pathname === "/team" ? "text-dental-blue-medium" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Team
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium text-lg text-dental-blue-dark dark:text-dental-blue-light py-3 border-b border-dental-blue-light dark:border-gray-700 transition-colors hover:text-dental-blue-medium dark:hover:text-dental-blue-medium ${location.pathname === "/contact" ? "text-dental-blue-medium" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/afspraken" 
            className="bg-[#19A0D1] hover:bg-[#19A0D1]/90 text-white font-medium flex items-center justify-center gap-2 mt-6 py-4 px-6 rounded-lg text-lg transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#19A0D1]/50"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Maak een afspraak online"
          >
            <Calendar className="h-5 w-5" />
            <span>Maak een afspraak</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
