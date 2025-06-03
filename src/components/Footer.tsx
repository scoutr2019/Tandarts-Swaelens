
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F2F5FA] dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-12">
      <div className="dental-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Tandarts Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-dental-blue-dark dark:text-white">Tandarts Swaelens</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-[#19A0D1] flex-shrink-0 mt-0.5" />
                <span>Kortrijksesteenweg 215, 9000 Gent</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#19A0D1] flex-shrink-0" />
                <a href="tel:+3292221213" className="hover:text-[#19A0D1] hover:underline">09 222 12 13</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#19A0D1] flex-shrink-0" />
                <a href="mailto:info@tandartsswaelens.be" className="hover:text-[#19A0D1] hover:underline">info@tandartsswaelens.be</a>
              </li>
            </ul>
          </div>
          
          {/* Column 2: Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-dental-blue-dark dark:text-white">Telefonische Openingsuren</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-[#19A0D1] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="mb-2">
                    <p className="font-semibold text-[#19A0D1] mb-1">Open:</p>
                    <p>Maandag, woensdag & vrijdag</p>
                    <p>09:00-13:00 & 14:00-18:00</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600 dark:text-gray-400 mb-1">Gesloten:</p>
                    <p>Dinsdag, donderdag, zaterdag,</p>
                    <p>zondag en feestdagen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-dental-blue-dark dark:text-white">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#19A0D1]">Home</Link>
              </li>
              <li>
                <Link to="/diensten" className="hover:text-[#19A0D1]">Diensten</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#19A0D1]">Team</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#19A0D1]">Contact</Link>
              </li>
              <li>
                <Link to="/afspraken" className="hover:text-[#19A0D1]">Maak een afspraak</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-200 dark:bg-gray-600" />
        
        <p className="text-sm text-center">
          © {currentYear} Tandarts Swaelens. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
