
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Phone, Mail, Calendar, Clock, Shield, Heart, CheckCircle, AlertCircle } from "lucide-react";

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
            <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Snel & Eenvoudig</div>
                  <div className="text-sm text-gray-600">Online afspraken</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Veilig & Privé</div>
                  <div className="text-sm text-gray-600">Beschermde gegevens</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Persoonlijke Zorg</div>
                  <div className="text-sm text-gray-600">Voor elke patiënt</div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* New Patient Welcome */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-8 -translate-y-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-4 translate-y-4"></div>
              <div className="relative z-10 flex items-center gap-6">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Nieuwe patiënten welkom!</h3>
                  <p className="text-blue-100 mb-6 text-lg">
                    Bent u nog geen patiënt bij ons? Wij heten u van harte welkom! 
                    Voor nieuwe patiënten plannen we graag eerst een kennismakingsgesprek.
                  </p>
                  <div className="flex gap-4">
                    <a href="tel:+3292221213" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Bel: 09 222 12 13
                    </a>
                    <a href="mailto:info@tandartsswaelens.be" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center gap-2 border border-white/20">
                      <Mail className="h-4 w-4" />
                      E-mail versturen
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Appointment Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>
              
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Calendar className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Online afspraak maken</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Bestaande patiënten kunnen hier direct online een afspraak inplannen. 
                  Selecteer een beschikbare datum en tijd die u uitkomt.
                </p>
              </div>
              
              {/* Iframe Container */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-inner">
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
              <div className="mt-8 text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                  <p className="text-gray-700 font-semibold">Heeft u problemen met het online systeem?</p>
                </div>
                <div className="flex justify-center items-center gap-6 flex-wrap">
                  <a href="tel:+3292221213" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>09 222 12 13</span>
                  </a>
                  <span className="text-gray-400">•</span>
                  <a href="mailto:info@tandartsswaelens.be" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>info@tandartsswaelens.be</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Two Column Layout for Hours and Emergency */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Opening Hours */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Openingsuren</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Maandag</span>
                    <span className="text-blue-600 font-semibold">09:00–13:00, 14:00–18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Dinsdag</span>
                    <span className="text-gray-400">Gesloten</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Woensdag</span>
                    <span className="text-blue-600 font-semibold">09:00–13:00, 14:00–18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Donderdag</span>
                    <span className="text-gray-400">Gesloten</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Vrijdag</span>
                    <span className="text-blue-600 font-semibold">09:00–13:00, 14:00–18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-gray-700">Weekend</span>
                    <span className="text-gray-400">Gesloten</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl shadow-xl border border-red-100 p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Spoedgevallen</h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Bij acute tandpijn buiten de openingsuren kunt u contact opnemen via het telefoonnummer. 
                  Wij proberen u zo snel mogelijk te helpen.
                </p>
                <a href="tel:+3292221213" className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  <Phone className="h-5 w-5" />
                  <span>Spoed: 09 222 12 13</span>
                </a>
                <div className="mt-4 text-sm text-red-700">
                  <strong>Let op:</strong> Alleen voor echte spoedgevallen buiten kantooruren
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
