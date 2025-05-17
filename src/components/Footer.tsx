
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F2F5FA] text-gray-700 py-12">
      <div className="dental-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Tandarts Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Tandarts Swaelens</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-[#1E90FF] flex-shrink-0 mt-0.5" />
                <span>Kortrijksesteenweg 215, 9000 Gent</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#1E90FF] flex-shrink-0" />
                <a href="tel:+3292221213" className="hover:text-[#1E90FF]">09 222 12 13</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#1E90FF] flex-shrink-0" />
                <a href="mailto:info@tandartsswaelens.be" className="hover:text-[#1E90FF]">info@tandartsswaelens.be</a>
              </li>
            </ul>
          </div>
          
          {/* Column 2: Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Telefonische Openingsuren</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-[#1E90FF] flex-shrink-0 mt-0.5" />
                <div>
                  <p><strong>Open:</strong></p>
                  <p>Maandag, woensdag & vrijdag</p>
                  <p>09:00-13:00 & 14:00-18:00</p>
                </div>
              </li>
              <li className="ml-7 mt-4">
                <p><strong>Gesloten:</strong></p>
                <p>Dinsdag, donderdag, zaterdag, zondag</p>
                <p>en feestdagen</p>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#1E90FF]">Home</Link>
              </li>
              <li>
                <Link to="/diensten" className="hover:text-[#1E90FF]">Diensten</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#1E90FF]">Team</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#1E90FF]">Contact</Link>
              </li>
              <li>
                <Link to="/afspraken" className="hover:text-[#1E90FF]">Maak een afspraak</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-200" />
        
        <p className="text-sm text-center">
          © {currentYear} Tandarts Swaelens. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
