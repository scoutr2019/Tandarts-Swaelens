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
                <a 
                  href="https://www.google.com/maps/place/Tandartsenpraktijk+Swaelens+C./@51.0392519,3.7117256,16z/data=!3m1!4b1!4m6!3m5!1s0x47c3715efd8f497b:0x7fefdc6320099989!8m2!3d51.039252!4d3.7165965!16s%2Fg%2F1tfj_051?hl=en&entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#19A0D1] hover:underline"
                >
                  Kortrijksesteenweg 215, 9000 Gent
                </a>
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
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-[#19A0D1] flex-shrink-0 mt-0.5" />
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                  <p className="font-semibold text-[#19A0D1] mb-2">Open:</p>
                  <div className="text-sm space-y-1">
                    <p>Maandag, woensdag & vrijdag</p>
                    <p className="font-medium">09:00-13:00 & 14:00-18:00</p>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded-lg">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-2">Gesloten:</p>
                  <div className="text-sm">
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
        
        <div className="text-center space-y-2">
          <p className="text-sm">
            © {currentYear} Tandarts Swaelens. Alle rechten voorbehouden.
          </p>
          <p className="text-sm">
            Met liefde gemaakt door <a href="https://www.thuisit.be" target="_blank" rel="noopener noreferrer" className="hover:text-[#19A0D1] hover:underline">ThuisIT.be</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
