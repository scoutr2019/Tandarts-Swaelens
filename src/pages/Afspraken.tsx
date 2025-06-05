
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Phone, Mail, Calendar, Clock, Shield, Heart } from "lucide-react";

const Afspraken = () => {
  return (
    <Layout>
      <PageBanner 
        title="Afspraak maken"
        description="Maak eenvoudig een afspraak voor uw tandheelkundige behandeling. Wij staan klaar om u te helpen."
      />
      
      <div className="relative min-h-screen">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-dental-blue-light/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-dental-blue-medium/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-dental-blue-light/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-dental-blue-medium/6 rounded-full blur-2xl animate-pulse"></div>
        </div>

        <div className="dental-container py-16 relative">
          {/* Info Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50 text-center subtle-pattern">
              <div className="w-16 h-16 bg-dental-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#19A0D1]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Snelle Service</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Online afspraken binnen 24 uur bevestigd</p>
            </div>
            
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50 text-center subtle-pattern">
              <div className="w-16 h-16 bg-dental-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#19A0D1]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Veilig & Privé</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Uw gegevens zijn bij ons veilig</p>
            </div>
            
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50 text-center subtle-pattern">
              <div className="w-16 h-16 bg-dental-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-[#19A0D1]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Persoonlijke Zorg</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Elke patiënt krijgt volledige aandacht</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {/* New Patient Notice */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-[#19A0D1]/20 rounded-xl p-6 mb-8 floating-icons">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#19A0D1]/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[#19A0D1]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-[#19A0D1] mb-3">Nieuwe patiënten welkom!</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Bent u nog geen patiënt bij ons? Wij heten u van harte welkom! 
                    Voor nieuwe patiënten plannen we graag eerst een kennismakingsgesprek.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="tel:+3292221213" className="inline-flex items-center justify-center gap-2 bg-[#19A0D1] hover:bg-[#19A0D1]/80 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                      <Phone className="h-4 w-4" />
                      <span>Bel: 09 222 12 13</span>
                    </a>
                    <a href="mailto:info@tandartsswaelens.be" className="inline-flex items-center justify-center gap-2 border-2 border-[#19A0D1] text-[#19A0D1] hover:bg-[#19A0D1]/10 font-medium py-2 px-4 rounded-lg transition-all duration-300">
                      <Mail className="h-4 w-4" />
                      <span>E-mail versturen</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Appointment Section */}
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-white/50 dark:border-gray-700/50 floating-icons">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#19A0D1]/20 to-[#19A0D1]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-10 w-10 text-[#19A0D1]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Online afspraak maken</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Bestaande patiënten kunnen hier direct online een afspraak inplannen. 
                  Selecteer een beschikbare datum en tijd die u uitkomt.
                </p>
              </div>
              
              {/* Iframe Container */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 shadow-inner">
                <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg" style={{ height: '660px' }}>
                  <iframe 
                    src="https://agenda.clickdocdentist.be/short/mgeqrWZ8KAm93jV5"
                    width="100%" 
                    height="660" 
                    scrolling="yes"
                    frameBorder="1"
                    allow="encrypted-media"
                    title="Online afspraak maken - Tandarts Swaelens"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
              
              {/* Help Section */}
              <div className="mt-8 text-center bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 rounded-lg p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-medium">
                  Heeft u problemen met het online systeem?
                </p>
                <div className="flex justify-center items-center gap-6 flex-wrap">
                  <a href="tel:+3292221213" className="inline-flex items-center gap-2 text-[#19A0D1] hover:text-[#19A0D1]/80 font-medium transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>09 222 12 13</span>
                  </a>
                  <span className="text-gray-400">•</span>
                  <a href="mailto:info@tandartsswaelens.be" className="inline-flex items-center gap-2 text-[#19A0D1] hover:text-[#19A0D1]/80 font-medium transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>info@tandartsswaelens.be</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-16 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-700/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50 dark:border-gray-700/50 subtle-pattern">
              <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Openingsuren voor afspraken</h2>
              <div className="max-w-2xl mx-auto">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Maandag</span>
                      <span className="text-[#19A0D1] font-semibold">09:00–13:00, 14:00–18:00</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Dinsdag</span>
                      <span className="text-gray-500 dark:text-gray-400">Gesloten</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Woensdag</span>
                      <span className="text-[#19A0D1] font-semibold">09:00–13:00, 14:00–18:00</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Donderdag</span>
                      <span className="text-gray-500 dark:text-gray-400">Gesloten</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Vrijdag</span>
                      <span className="text-[#19A0D1] font-semibold">09:00–13:00, 14:00–18:00</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Zaterdag/Zondag</span>
                      <span className="text-gray-500 dark:text-gray-400">Gesloten</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 text-center bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border border-red-200/50 dark:border-red-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Spoedgevallen</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Bij acute tandpijn buiten de openingsuren kunt u contact opnemen via het telefoonnummer.
              </p>
              <a href="tel:+3292221213" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                <Phone className="h-4 w-4" />
                <span>Spoed: 09 222 12 13</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Afspraken;
