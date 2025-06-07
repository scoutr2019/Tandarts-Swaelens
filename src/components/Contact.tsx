
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background icons */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]">
        <div className="absolute top-20 left-[10%] text-6xl text-dental-blue-medium">🦷</div>
        <div className="absolute top-40 right-[15%] text-4xl text-dental-blue-medium">✨</div>
        <div className="absolute top-80 left-[20%] text-5xl text-dental-blue-medium">😊</div>
        <div className="absolute bottom-80 right-[25%] text-6xl text-dental-blue-medium">🦷</div>
        <div className="absolute bottom-40 left-[15%] text-4xl text-dental-blue-medium">💎</div>
        <div className="absolute top-60 right-[40%] text-3xl text-dental-blue-medium">⭐</div>
        <div className="absolute bottom-60 left-[45%] text-5xl text-dental-blue-medium">🌟</div>
        <div className="absolute top-32 left-[60%] text-4xl text-dental-blue-medium">📅</div>
        <div className="absolute bottom-32 right-[50%] text-5xl text-dental-blue-medium">💫</div>
        <div className="absolute top-60 left-[30%] text-4xl text-dental-blue-medium">📞</div>
        <div className="absolute bottom-20 left-[70%] text-3xl text-dental-blue-medium">💌</div>
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-64 h-64 bg-blue-100/20 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-slate-100/30 dark:bg-slate-700/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/10 to-slate-50/10 dark:from-blue-900/10 dark:to-slate-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="dental-container relative z-10">
        <h2 className="section-title text-center">Contact & afspraken</h2>
        
        {/* Contact Information - Centered at the top */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 dark:border-gray-700/50 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-dental-blue-dark dark:text-white text-center">Contactgegevens</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dental-blue-light dark:bg-dental-blue-dark/30 rounded-lg text-dental-blue-dark dark:text-dental-blue-light">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-dental-blue-dark dark:text-white mb-1">Adres</h4>
                  <p className="text-gray-700 dark:text-gray-300">
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
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dental-blue-light dark:bg-dental-blue-dark/30 rounded-lg text-dental-blue-dark dark:text-dental-blue-light">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-dental-blue-dark dark:text-white mb-1">Telefoon</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <a href="tel:+3292221213" className="hover:text-dental-blue-medium dark:hover:text-dental-blue-light transition-colors">
                      09 222 12 13
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dental-blue-light dark:bg-dental-blue-dark/30 rounded-lg text-dental-blue-dark dark:text-dental-blue-light">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-dental-blue-dark dark:text-white mb-1">E-mail</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <a href="mailto:info@tandartsswaelens.be" className="hover:text-dental-blue-medium dark:hover:text-dental-blue-light transition-colors">
                      info@tandartsswaelens.be
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Notification Box */}
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-[#19A0D1] p-4 mt-6 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-[#19A0D1]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-[#19A0D1] mb-1">Belangrijk voor nieuwe patiënten</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Op dit moment kunnen alleen bestaande patiënten online een afspraak maken. Bent u nog geen patiënt? Neem dan telefonisch contact met ons op via <a href="tel:+3292221213" className="font-medium text-[#19A0D1] hover:underline">09 222 12 13</a>.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4 mt-6">
              <a href="tel:+3292221213" className="dental-btn-primary flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Bel voor een afspraak</span>
              </a>
              <Link to="/afspraken" className="dental-btn-outline flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                <span>Online afspraak maken</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Opening Hours and FAQ side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Opening Hours */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 dark:border-gray-700/50 p-6 md:p-8 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-dental-blue-light dark:bg-dental-blue-dark/30 rounded-lg text-dental-blue-dark dark:text-dental-blue-light">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-dental-blue-dark dark:text-white">Openingsuren</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-600">
                <span className="font-medium text-gray-700 dark:text-gray-300">Maandag:</span>
                <span className="text-dental-blue-dark dark:text-dental-blue-light font-medium">09:00–13:00, 14:00–18:00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-600">
                <span className="font-medium text-gray-700 dark:text-gray-300">Dinsdag:</span>
                <span className="text-gray-500 dark:text-gray-400">Gesloten</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-600">
                <span className="font-medium text-gray-700 dark:text-gray-300">Woensdag:</span>
                <span className="text-dental-blue-dark dark:text-dental-blue-light font-medium">09:00–13:00, 14:00–18:00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-600">
                <span className="font-medium text-gray-700 dark:text-gray-300">Donderdag:</span>
                <span className="text-gray-500 dark:text-gray-400">Gesloten</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-600">
                <span className="font-medium text-gray-700 dark:text-gray-300">Vrijdag:</span>
                <span className="text-dental-blue-dark dark:text-dental-blue-light font-medium">09:00–13:00, 14:00–18:00</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium text-gray-700 dark:text-gray-300">Zaterdag/Zondag:</span>
                <span className="text-gray-500 dark:text-gray-400">Gesloten</span>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 dark:border-gray-700/50 p-6 md:p-8 h-fit">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-dental-blue-dark dark:text-white">Meest gestelde vragen</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-dental-blue-dark dark:text-white mb-2">Wat moet ik meenemen naar mijn eerste afspraak?</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Bij uw eerste bezoek vragen we u om uw identiteitskaart, verzekeringsinformatie en een lijst van eventuele medicijnen die u gebruikt. Ook is het handig om uw tandheelkundige voorgeschiedenis mee te nemen.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-dental-blue-dark dark:text-white mb-2">Wat is het annuleringsbeleid?</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  We vragen u om minimaal 24 uur van tevoren te annuleren of te wijzigen, zodat we de tijd kunnen aanbieden aan andere patiënten. Bij herhaaldelijk niet nakomen van afspraken zonder tijdige annulering kunnen kosten in rekening worden gebracht.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-dental-blue-dark dark:text-white mb-2">Hoe vaak moet ik voor controle komen?</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Voor de meeste patiënten raden we een halfjaarlijkse controle aan. Afhankelijk van uw specifieke mondgezondheid kan Dr. Swaelens een ander schema adviseren.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-dental-blue-dark dark:text-white mb-2">Hoe lang van tevoren moet ik een afspraak maken?</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Voor reguliere controles raden we aan om 4-6 weken van tevoren te boeken.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.097755!3d51.039252!4d3.7165965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3715efd8f497b%3A0x7fefdc6320099989!2sTandartsenpraktijk%20Swaelens%20C.!5e0!3m2!1sen!2sbe!4v1640995200000!5m2!1sen!2sbe" 
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
    </section>
  );
};

export default Contact;
