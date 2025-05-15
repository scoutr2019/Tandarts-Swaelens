
import { useState, useEffect } from "react";
import { Tooth } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="dental-container flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Tooth className="h-8 w-8 text-dental-blue-dark" />
          <span className="text-xl font-bold text-dental-blue-dark">Tandarts Swaelens</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            <a href="#" className="font-medium text-dental-blue-dark hover:text-dental-blue-medium">Home</a>
            <a href="#diensten" className="font-medium text-dental-blue-dark hover:text-dental-blue-medium">Diensten</a>
            <a href="#team" className="font-medium text-dental-blue-dark hover:text-dental-blue-medium">Team</a>
            <a href="#contact" className="font-medium text-dental-blue-dark hover:text-dental-blue-medium">Contact</a>
          </nav>
          <a href="tel:+3292221213" className="dental-btn-primary flex items-center gap-2">
            <span>09 222 12 13</span>
          </a>
        </div>

        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-dental-blue-dark transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-dental-blue-dark transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-dental-blue-dark transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-transform duration-300 transform ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="dental-container py-4 flex flex-col gap-4">
          <a href="#" className="font-medium text-dental-blue-dark py-2 border-b border-dental-blue-light" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#diensten" className="font-medium text-dental-blue-dark py-2 border-b border-dental-blue-light" onClick={() => setIsMobileMenuOpen(false)}>Diensten</a>
          <a href="#team" className="font-medium text-dental-blue-dark py-2 border-b border-dental-blue-light" onClick={() => setIsMobileMenuOpen(false)}>Team</a>
          <a href="#contact" className="font-medium text-dental-blue-dark py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <a href="tel:+3292221213" className="dental-btn-primary flex items-center justify-center gap-2 mt-2">
            <span>09 222 12 13</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
