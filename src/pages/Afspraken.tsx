import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar, Clock, CheckCircle, Heart, Shield, MapPin, Star, Users, Sparkles } from "lucide-react";

const Afspraken = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:+3292221213";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@tandartsswaelens.be";
  };

  return (
    <Layout>
      <PageBanner 
        title="Afspraak maken"
        description="Plan uw tandheelkundige zorg op een moment dat u uitkomt. Persoonlijke service, moderne technieken."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
          <div className="absolute top-20 left-[10%] text-6xl text-dental-blue-medium">🦷</div>
          <div className="absolute top-40 right-[15%] text-4xl text-dental-blue-medium">✨</div>
          <div className="absolute bottom-40 left-[15%] text-4xl text-dental-blue-medium">💎</div>
          <div className="absolute top-32 left-[60%] text-4xl text-dental-blue-medium">📅</div>
        </div>

        <div className="dental-container py-8 md:py-16 relative z-10">
          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Snel & Eenvoudig</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Online afspraken plannen in 2 minuten</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Veilig & Privé</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Beschermde persoonlijke gegevens</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Persoonlijke Zorg</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Op maat voor elke patiënt</p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* New Patient Section - Redesigned */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative p-8 lg:p-12">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-4 translate-y-4"></div>
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-white/15 rounded-xl flex items-center justify-center">
                        <Sparkles className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">Nieuwe patiënten</h2>
                        <p className="text-blue-100">Van harte welkom!</p>
                      </div>
                    </div>
                    <p className="text-blue-100 text-lg leading-relaxed mb-8">
                      Bent u nog geen patiënt bij ons? Dan plannen we graag eerst een kennismakingsgesprek 
                      waarin we uw wensen bespreken en een behandelplan op maat opstellen.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-blue-100">
                        <Star className="h-5 w-5 text-yellow-300" />
                        <span>Uitgebreid intakegesprek</span>
                      </div>
                      <div className="flex items-center gap-3 text-blue-100">
                        <Star className="h-5 w-5 text-yellow-300" />
                        <span>Persoonlijk behandelplan</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-6 text-center">Contact opnemen</h3>
                    <div className="space-y-4">
                      <Button 
                        onClick={handlePhoneCall}
                        size="lg"
                        className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg"
                      >
                        <Phone className="h-5 w-5 mr-3" />
                        Bel: 09 222 12 13
                      </Button>
                      <Button 
                        onClick={handleEmailClick}
                        variant="outline"
                        size="lg"
                        className="w-full bg-white/15 hover:bg-white/25 text-white font-semibold border-white/30 hover:border-white/50"
                      >
                        <Mail className="h-5 w-5 mr-3" />
                        E-mail versturen
                      </Button>
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/20 text-center">
                      <div className="flex items-center justify-center gap-2 text-blue-100 text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>Kortrijksesteenweg 215, 9000 Gent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Existing Patients Section - Redesigned */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700/50 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 p-8 border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Online afspraak maken</h2>
                    <p className="text-gray-600 dark:text-gray-300">Voor bestaande patiënten</p>
                  </div>
                </div>
                <p className="text-center text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
                  Selecteer eenvoudig een beschikbare datum en tijd die u het beste uitkomt. 
                  Uw afspraak wordt direct bevestigd.
                </p>
              </div>
              
              {/* Appointment System */}
              <div className="p-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 mb-8">
                  <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                    <iframe 
                      src="https://agenda.clickdocdentist.be/short/mgeqrWZ8KAm93jV5"
                      className="w-full rounded-xl"
                      style={{ 
                        border: 'none',
                        height: '650px',
                        minHeight: '500px'
                      }}
                      scrolling="yes"
                      allow="encrypted-media"
                      title="Online afspraak maken - Tandarts Swaelens"
                    />
                  </div>
                </div>
                
                {/* Help Section */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Hulp nodig?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Ondervindt u problemen met het online systeem? Neem gerust contact met ons op.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Button 
                      onClick={handlePhoneCall}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Phone className="h-5 w-5 mr-3" />
                      09 222 12 13
                    </Button>
                    <Button 
                      onClick={handleEmailClick}
                      variant="ghost"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      <Mail className="h-5 w-5 mr-3" />
                      info@tandartsswaelens.be
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours - Redesigned */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 dark:border-gray-700/50 p-8">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Openingsuren</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <span className="font-medium text-gray-900 dark:text-white">Maandag</span>
                    <span className="text-green-700 dark:text-green-400 font-semibold">09:00–13:00, 14:00–18:00</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Dinsdag</span>
                    <span className="text-gray-500 dark:text-gray-400">Gesloten</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <span className="font-medium text-gray-900 dark:text-white">Woensdag</span>
                    <span className="text-green-700 dark:text-green-400 font-semibold">09:00–13:00, 14:00–18:00</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Donderdag</span>
                    <span className="text-gray-500 dark:text-gray-400">Gesloten</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <span className="font-medium text-gray-900 dark:text-white">Vrijdag</span>
                    <span className="text-green-700 dark:text-green-400 font-semibold">09:00–13:00, 14:00–18:00</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Weekend</span>
                    <span className="text-gray-500 dark:text-gray-400">Gesloten</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">💡 Handige tip</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Bent u flexibel met timing? Vroege en late tijdsloten zijn vaak sneller beschikbaar.
                  </p>
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
