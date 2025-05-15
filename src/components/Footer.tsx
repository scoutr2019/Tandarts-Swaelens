
import { Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dental-blue-dark text-white dark:bg-gray-900 py-12">
      <div className="dental-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-8 w-8" />
            <span className="text-xl font-bold">Tandarts Swaelens</span>
          </div>
          
          <div className="text-center md:text-right">
            <p>Kortrijksesteenweg 215, 9000 Gent</p>
            <p>Tel: <a href="tel:+3292221213" className="hover:underline">09 222 12 13</a></p>
            <p>E-mail: <a href="mailto:info@tandartsswaelens.be" className="hover:underline">info@tandartsswaelens.be</a></p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8">
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
            <Link to="/" className="text-white/80 hover:text-white hover:underline">Home</Link>
            <Link to="/diensten" className="text-white/80 hover:text-white hover:underline">Diensten</Link>
            <Link to="/team" className="text-white/80 hover:text-white hover:underline">Team</Link>
            <Link to="/afspraken" className="text-white/80 hover:text-white hover:underline">Afspraken</Link>
            <Link to="/contact" className="text-white/80 hover:text-white hover:underline">Contact</Link>
          </nav>
          
          <p className="text-sm text-white/70 text-center md:text-left">
            © {currentYear} Tandartspraktijk Dr. Christian Swaelens. Alle rechten voorbehouden.
          </p>
          <p className="text-sm text-white/70 mt-2 text-center md:text-left">
            <Link to="/privacy" className="hover:underline">Privacybeleid</Link> | 
            <Link to="/cookies" className="hover:underline ml-2">Cookiebeleid</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
