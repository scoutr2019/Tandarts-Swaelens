
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Phone, Mail, Calendar, Clock, CheckCircle, Heart, Shield } from "lucide-react";

const Afspraken = () => {
  return (
    <Layout>
      <PageBanner 
        title="Afspraak maken"
        description="Maak eenvoudig een afspraak voor uw tandheelkundige behandeling. Wij staan klaar om u te helpen."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background icons like on team page */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute top-20 left-[10%] text-6xl text-dental-blue-medium">🦷</div>
          <div className="absolute top-40 right-[15%] text-4xl text-dental-blue-medium">✨</div>
          <div className="absolute top-80 left-[20%] text-5xl text-dental-blue-medium">😊</div>
          <div className="absolute bottom-80 right-[25%] text-6xl text-dental-blue-medium">🦷</div>
          <div className="absolute bottom-40 left-[15%] text-4xl text-dental-blue-medium">💎</div>
          <div className="absolute top-60 right-[40%] text-3xl text-dental-blue-medium">⭐</div>
          <div className="absolute bottom-60 left-[45%] text-5xl text-dental-blue-medium">🌟</div>
          <div className="absolute top-32 left-[60%] text-4xl text-dental-blue-medium">📅</div>
          <div className="absolute bottom-32 right-[50%] text-5xl text-dental-blue-medium">💫</div>
        </div>

        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-16 w-64 h-64 bg-blue-100/20 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-16 w-96 h-96 bg-slate-100/30 dark:bg-slate-700/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/10 to-slate-50/10 dark:from-blue-900/10 dark:to-slate-800/10 rounded-full blur-3xl"></div>
        </div>

        <div className="dental-container py-8 md:py-16 relative z-10">
          {/* Hero Section with Benefits */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg border border-white/50 dark:border-gray-700/50 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 md:h-7 md:w-7 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 dark:text-white text-base md:text-lg">Snel & Eenvoudig</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Online afspraken</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 md:h-7 md:w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 dark:text-white text-base md:text-lg">Veilig & Privé</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Beschermde gegevens</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 md:h-7 md:w-7 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 dark:text-white text-base md:text-lg">Persoonlijke Zorg</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Voor elke patiënt</div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">
            {/* New Patient Welcome - Made more readable and longer */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden min-h-[300px] md:min-h-[350px] flex items-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-8 -translate-y-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-4 translate-y-4"></div>
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 w-full">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-white drop-shadow-lg">Nieuwe patiënten welkom!</h3>
                  <p className="text-blue-100 mb-6 md:mb-10 text-lg md:text-xl leading-relaxed">
                    Bent u nog geen patiënt bij ons? Wij heten u van harte welkom! 
                    Voor nieuwe patiënten plannen we graag eerst een kennismakingsgesprek.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
                    <a href="tel:+3292221213" className="bg-white text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-100 font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3 text-base md:text-lg shadow-lg">
                      <Phone className="h-5 w-5" />
                      Bel: 09 222 12 13
                    </a>
                    <a href="mailto:info@tandartsswaelens.be" className="bg-white/15 hover:bg-white/25 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-3 border border-white/30 text-base md:text-lg">
                      <Mail className="h-5 w-5" />
                      E-mail versturen
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Appointment Section - Made longer */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700/50 p-6 md:p-16 relative overflow-hidden min-h-[900px]">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>
              
              <div className="text-center mb-8 md:mb-12">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg">
                  <Calendar className="h-10 w-10 md:h-12 md:w-12 text-white" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">Online afspraak maken</h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Bestaande patiënten kunnen hier direct online een afspraak inplannen. 
                  Selecteer een beschikbare datum en tijd die u uitkomt.
                </p>
              </div>
              
              {/* Mobile-friendly Iframe Container */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-4 md:p-8 shadow-inner">
                <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                  <div className="w-full" style={{ height: '660px', minHeight: '500px' }}>
                    <iframe 
                      src="https://agenda.clickdocdentist.be/short/mgeqrWZ8KAm93jV5"
                      className="w-full h-full rounded-xl"
                      style={{ 
                        border: 'none',
                        minHeight: '500px',
                        height: '660px'
                      }}
                      scrolling="yes"
                      allow="encrypted-media"
                      title="Online afspraak maken - Tandarts Swaelens"
                    />
                  </div>
                </div>
              </div>
              
              {/* Help Section */}
              <div className="mt-8 md:mt-12 text-center bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 md:p-8">
                <p className="text-gray-700 dark:text-gray-200 font-semibold mb-4 md:mb-6 text-base md:text-lg">Heeft u problemen met het online systeem?</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8">
                  <a href="tel:+3292221213" className="inline-flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors text-base md:text-lg">
                    <Phone className="h-5 w-5" />
                    <span>09 222 12 13</span>
                  </a>
                  <span className="text-gray-400 hidden sm:block">•</span>
                  <a href="mailto:info@tandartsswaelens.be" className="inline-flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors text-base md:text-lg">
                    <Mail className="h-5 w-5" />
                    <span>info@tandartsswaelens.be</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours - Made longer */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 dark:border-gray-700/50 p-8 md:p-16 relative overflow-hidden min-h-[400px]">
              <div className="absolute top-6 right-6 w-16 h-16 md:w-18 md:h-18 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 md:h-10 md:w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 md:mb-12">Openingsuren</h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex justify-between items-center py-3 md:py-4 border-b border-gray-100 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300 text-base md:text-lg">Maandag</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-base md:text-lg">09:00–13:00, 14:00–18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 md:py-4 border-b border-gray-100 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300 text-base md:text-lg">Dinsdag</span>
                  <span className="text-gray-400 dark:text-gray-500 text-base md:text-lg">Gesloten</span>
                </div>
                <div className="flex justify-between items-center py-3 md:py-4 border-b border-gray-100 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300 text-base md:text-lg">Woensdag</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-base md:text-lg">09:00–13:00, 14:00–18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 md:py-4 border-b border-gray-100 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300 text-base md:text-lg">Donderdag</span>
                  <span className="text-gray-400 dark:text-gray-500 text-base md:text-lg">Gesloten</span>
                </div>
                <div className="flex justify-between items-center py-3 md:py-4 border-b border-gray-100 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300 text-base md:text-lg">Vrijdag</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-base md:text-lg">09:00–13:00, 14:00–18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 md:py-4">
                  <span className="font-medium text-gray-700 dark:text-gray-300 text-base md:text-lg">Weekend</span>
                  <span className="text-gray-400 dark:text-gray-500 text-base md:text-lg">Gesloten</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Afspraken;
