
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-blue-50/20 to-slate-50 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2319A0D1' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="dental-container relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dental-blue-dark dark:text-white mb-6">
            Contact & Afspraken
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Heeft u vragen of wenst u een afspraak te maken? Wij staan klaar om u te helpen met uw tandheelkundige zorg.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Card */}
          <div className="lg:col-span-2">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 dark:border-gray-700/50 p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-dental-blue-light to-dental-blue-medium rounded-xl">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dental-blue-dark dark:text-white">
                  Contactgegevens
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="p-3 bg-dental-blue-light/20 group-hover:bg-dental-blue-light dark:bg-dental-blue-dark/30 rounded-lg text-dental-blue-dark dark:text-dental-blue-light transition-colors">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dental-blue-dark dark:text-white mb-1">Adres</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a 
                          href="https://www.google.com/maps/place/Tandartsenpraktijk+Swaelens+C./@51.0392519,3.7117256,16z/data=!3m1!4b1!4m6!3m5!1s0x47c3715efd8f497b:0x7fefdc6320099989!8m2!3d51.039252!4d3.7165965!16s%2Fg%2F1tfj_051?hl=en&entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-dental-blue-medium dark:hover:text-dental-blue-light transition-colors"
                        >
                          Kortrijksesteenweg 215<br />9000 Gent, België
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="p-3 bg-dental-blue-light/20 group-hover:bg-dental-blue-light dark:bg-dental-blue-dark/30 rounded-lg text-dental-blue-dark dark:text-dental-blue-light transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dental-blue-dark dark:text-white mb-1">Telefoon</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a href="tel:+3292221213" className="hover:text-dental-blue-medium dark:hover:text-dental-blue-light transition-colors text-lg">
                          09 222 12 13
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="p-3 bg-dental-blue-light/20 group-hover:bg-dental-blue-light dark:bg-dental-blue-dark/30 rounded-lg text-dental-blue-dark dark:text-dental-blue-light transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dental-blue-dark dark:text-white mb-1">E-mail</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a href="mailto:info@tandartsswaelens.be" className="hover:text-dental-blue-medium dark:hover:text-dental-blue-light transition-colors">
                          info@tandartsswaelens.be
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <a href="tel:+3292221213" className="dental-btn-primary flex items-center justify-center gap-3 py-4 text-base">
                  <Phone className="h-5 w-5" />
                  <span>Direct bellen</span>
                </a>
                <Link to="/afspraken" className="dental-btn-outline flex items-center justify-center gap-3 py-4 text-base">
                  <Calendar className="h-5 w-5" />
                  <span>Online afspraak</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Opening Hours Card */}
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 dark:border-gray-700/50 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dental-blue-dark dark:text-white">
                Openingsuren
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-600">
                <span className="font-medium text-gray-700 dark:text-gray-300">Maandag</span>
                <span className="text-dental-blue-dark dark:text-dental-blue-light font-semibold text-sm">09:00-13:00<br/>14:00-18:00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-600">
                <span className="font-medium text-gray-700 dark:text-gray-300">Dinsdag</span>
                <span className="text-gray-400 dark:text-gray-500">Gesloten</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-600">
                <span className="font-medium text-gray-700 dark:text-gray-300">Woensdag</span>
                <span className="text-dental-blue-dark dark:text-dental-blue-light font-semibold text-sm">09:00-13:00<br/>14:00-18:00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-600">
                <span className="font-medium text-gray-700 dark:text-gray-300">Donderdag</span>
                <span className="text-gray-400 dark:text-gray-500">Gesloten</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-600">
                <span className="font-medium text-gray-700 dark:text-gray-300">Vrijdag</span>
                <span className="text-dental-blue-dark dark:text-dental-blue-light font-semibold text-sm">09:00-13:00<br/>14:00-18:00</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium text-gray-700 dark:text-gray-300">Weekend</span>
                <span className="text-gray-400 dark:text-gray-500">Gesloten</span>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-l-4 border-[#19A0D1] p-6 rounded-r-2xl mb-16 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="p-2 bg-[#19A0D1]/20 rounded-lg">
                <svg className="h-6 w-6 text-[#19A0D1]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#19A0D1] mb-2">Belangrijk voor nieuwe patiënten</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Op dit moment kunnen alleen bestaande patiënten online een afspraak maken. Bent u nog geen patiënt? 
                Neem dan telefonisch contact met ons op via <a href="tel:+3292221213" className="font-semibold text-[#19A0D1] hover:underline">09 222 12 13</a> 
                voor uw eerste consultatie.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 dark:border-gray-700/50 p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-dental-blue-dark dark:text-white text-center">
            Veelgestelde vragen
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-dental-blue-dark dark:text-white mb-3">Wat moet ik meenemen naar mijn eerste afspraak?</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Identiteitskaart, verzekeringsinformatie en een lijst van eventuele medicijnen die u gebruikt.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-dental-blue-dark dark:text-white mb-3">Hoe vaak moet ik voor controle komen?</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Voor de meeste patiënten raden we een halfjaarlijkse controle aan.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-dental-blue-dark dark:text-white mb-3">Wat is het annuleringsbeleid?</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We vragen u om minimaal 24 uur van tevoren te annuleren of te wijzigen.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-dental-blue-dark dark:text-white mb-3">Hoe lang van tevoren moet ik een afspraak maken?</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Voor reguliere controles raden we aan om 4-6 weken van tevoren te boeken.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.097755!3d51.039252!4d3.7165965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3715efd8f497b%3A0x7fefdc6320099989!2sTandartsenpraktijk%20Swaelens%20C.!5e0!3m2!1sen!2sbe!4v1640995200000!5m2!1sen!2sbe" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
