
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-dental-blue-light/30">
      <div className="dental-container">
        <h2 className="section-title text-center">Contact & afspraken</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h3 className="section-subtitle mb-6">Contactgegevens</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dental-blue-light rounded-lg text-dental-blue-dark">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-dental-blue-dark">Adres</h4>
                  <p className="text-gray-700">Kortrijksesteenweg 215<br />9000 Gent, België</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dental-blue-light rounded-lg text-dental-blue-dark">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-dental-blue-dark">Telefoon</h4>
                  <p className="text-gray-700">
                    <a href="tel:+3292221213" className="hover:text-dental-blue-medium transition-colors">
                      09 222 12 13
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dental-blue-light rounded-lg text-dental-blue-dark">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-dental-blue-dark">E-mail</h4>
                  <p className="text-gray-700">
                    <a href="mailto:info@tandartsswaelens.be" className="hover:text-dental-blue-medium transition-colors">
                      info@tandartsswaelens.be
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dental-blue-light rounded-lg text-dental-blue-dark">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-dental-blue-dark">Openingsuren</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li className="flex justify-between">
                      <span>Maandag:</span>
                      <span>09:00–13:00, 14:00–18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dinsdag:</span>
                      <span>Gesloten</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Woensdag:</span>
                      <span>09:00–13:00, 14:00–18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Donderdag:</span>
                      <span>Gesloten</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Vrijdag:</span>
                      <span>09:00–13:00, 14:00–18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Zaterdag/Zondag:</span>
                      <span>Gesloten</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h3 className="section-subtitle mb-6">Afspraak maken</h3>
            <p className="text-gray-700 mb-6">
              <strong>Nieuwe patiënten:</strong> Gelieve telefonisch contact op te nemen om een eerste afspraak te maken.<br /><br />
              <strong>Bestaande patiënten:</strong> U kunt online een afspraak inplannen of ons telefonisch contacteren.
            </p>
            
            <div className="flex flex-col space-y-4">
              <a href="tel:+3292221213" className="dental-btn-primary flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Bel voor een afspraak</span>
              </a>
              <a href="mailto:info@tandartsswaelens.be" className="dental-btn-outline flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                <span>Stuur ons een e-mail</span>
              </a>
            </div>
            
            <div className="mt-8 rounded-lg overflow-hidden h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.101921862502!2d3.7149684763422605!3d51.034883471723666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3717b5d9d8755%3A0x5bd4d5b8fc6b4fcb!2sKortrijksesteenweg%20215%2C%209000%20Gent%2C%20Belgium!5e0!3m2!1sen!2sus!4v1715805659911!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
