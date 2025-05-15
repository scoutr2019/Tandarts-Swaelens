
import { Stethoscope } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dental-blue-dark text-white py-12">
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
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/70">
            © {currentYear} Tandartspraktijk Dr. Christian Swaelens. Alle rechten voorbehouden.
          </p>
          <p className="text-sm text-white/70 mt-2">
            <a href="#" className="hover:underline">Privacybeleid</a> | 
            <a href="#" className="hover:underline ml-2">Cookiebeleid</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
