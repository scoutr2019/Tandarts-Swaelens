
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-16 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-16 w-96 h-96 bg-slate-100/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/10 to-slate-50/10 rounded-full blur-3xl"></div>
        </div>

        <div className="dental-container py-16 relative z-10">
          {/* Hero Section with Benefits */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-white/50 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-7 w-7 text-green-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">Snel & Eenvoudig</div>
                  <div className="text-gray-600">Online afspraken</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="h-7 w-7 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">Veilig & Privé</div>
                  <div className="text-gray-600">Beschermde gegevens</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="h-7 w-7 text-purple-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">Persoonlijke Zorg</div>
                  <div className="text-gray-600">Voor elke patiënt</div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* New Patient Welcome - Made larger and more readable */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 mb-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-8 -translate-y-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-4 translate-y-4"></div>
              <div className="relative z-10 flex items-center gap-8">
                <div className="w-20 h-20 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-white">Nieuwe patiënten welkom!</h3>
                  <p className="text-blue-100 mb-8 text-xl leading-relaxed">
                    Bent u nog geen patiënt bij ons? Wij heten u van harte welkom! 
                    Voor nieuwe patiënten plannen we graag eerst een kennismakingsgesprek.
                  </p>
                  <div className="flex gap-6">
                    <a href="tel:+3292221213" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 text-lg">
                      <Phone className="h-5 w-5" />
                      Bel: 09 222 12 13
                    </a>
                    <a href="mailto:info@tandartsswaelens.be" className="bg-white/15 hover:bg-white/25 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-3 border border-white/30 text-lg">
                      <Mail className="h-5 w-5" />
                      E-mail versturen
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Appointment Section - Made larger */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>
              
              <div className="text-center mb-10">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Calendar className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Online afspraak maken</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Bestaande patiënten kunnen hier direct online een afspraak inplannen. 
                  Selecteer een beschikbare datum en tijd die u uitkomt.
                </p>
              </div>
              
              {/* Iframe Container */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-inner">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg" style={{ height: '660px' }}>
                  <iframe 
                    src="https://agenda.clickdocdentist.be/short/mgeqrWZ8KAm93jV5"
                    width="100%" 
                    height="660" 
                    scrolling="true"
                    frameBorder="1"
                    allow="encrypted-media"
                    title="Online afspraak maken - Tandarts Swaelens"
                    className="w-full h-full rounded-xl"
                  ></iframe>
                </div>
              </div>
              
              {/* Help Section */}
              <div className="mt-10 text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
                <p className="text-gray-700 font-semibold mb-6 text-lg">Heeft u problemen met het online systeem?</p>
                <div className="flex justify-center items-center gap-8 flex-wrap">
                  <a href="tel:+3292221213" className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold transition-colors text-lg">
                    <Phone className="h-5 w-5" />
                    <span>09 222 12 13</span>
                  </a>
                  <span className="text-gray-400">•</span>
                  <a href="mailto:info@tandartsswaelens.be" className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold transition-colors text-lg">
                    <Mail className="h-5 w-5" />
                    <span>info@tandartsswaelens.be</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours - Made larger */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-12 relative overflow-hidden">
              <div className="absolute top-6 right-6 w-18 h-18 bg-blue-50 rounded-full flex items-center justify-center">
                <Clock className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Openingsuren</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="font-medium text-gray-700 text-lg">Maandag</span>
                  <span className="text-blue-600 font-semibold text-lg">09:00–13:00, 14:00–18:00</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="font-medium text-gray-700 text-lg">Dinsdag</span>
                  <span className="text-gray-400 text-lg">Gesloten</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="font-medium text-gray-700 text-lg">Woensdag</span>
                  <span className="text-blue-600 font-semibold text-lg">09:00–13:00, 14:00–18:00</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="font-medium text-gray-700 text-lg">Donderdag</span>
                  <span className="text-gray-400 text-lg">Gesloten</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="font-medium text-gray-700 text-lg">Vrijdag</span>
                  <span className="text-blue-600 font-semibold text-lg">09:00–13:00, 14:00–18:00</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="font-medium text-gray-700 text-lg">Weekend</span>
                  <span className="text-gray-400 text-lg">Gesloten</span>
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
