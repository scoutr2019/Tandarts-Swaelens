
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
                  <p className="text-gray-700">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Kortrijksesteenweg+215+9000+Gent" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-dental-blue-medium transition-colors"
                    >
                      Kortrijksesteenweg 215<br />9000 Gent, België
                    </a>
                  </p>
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
                <div className="w-full">
                  <h4 className="font-medium text-dental-blue-dark mb-3">Openingsuren</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="font-medium text-gray-700">Maandag</span>
                        <span className="text-dental-blue-dark font-medium">09:00–13:00, 14:00–18:00</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="font-medium text-gray-700">Dinsdag</span>
                        <span className="text-gray-500">Gesloten</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="font-medium text-gray-700">Woensdag</span>
                        <span className="text-dental-blue-dark font-medium">09:00–13:00, 14:00–18:00</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="font-medium text-gray-700">Donderdag</span>
                        <span className="text-gray-500">Gesloten</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="font-medium text-gray-700">Vrijdag</span>
                        <span className="text-dental-blue-dark font-medium">09:00–13:00, 14:00–18:00</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium text-gray-700">Zaterdag/Zondag</span>
                        <span className="text-gray-500">Gesloten</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h3 className="section-subtitle mb-6">Afspraak maken</h3>
            
            {/* Notification Box */}
            <div className="bg-blue-50 border-l-4 border-[#19A0D1] p-4 mb-6 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-[#19A0D1]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-[#19A0D1] mb-1">Belangrijk voor nieuwe patiënten</h4>
                  <p className="text-sm text-gray-700">
                    Op dit moment kunnen alleen bestaande patiënten online een afspraak maken. Bent u nog geen patiënt? Neem dan telefonisch contact met ons op via <a href="tel:+3292221213" className="font-medium text-[#19A0D1] hover:underline">09 222 12 13</a>.
                  </p>
                </div>
              </div>
            </div>

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
