import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Phone, Mail, Calendar } from "lucide-react";

const Afspraken = () => {
  return (
    <Layout>
      <PageBanner 
        title="Afspraak maken"
        description="Maak eenvoudig een afspraak voor uw tandheelkundige behandeling. Wij staan klaar om u te helpen."
      />
      
      <div className="dental-container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Notification Box */}
          <div className="bg-blue-50 border-l-4 border-[#19A0D1] p-6 mb-8 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-[#19A0D1]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-[#19A0D1] mb-2">Belangrijk voor nieuwe patiënten</h3>
                <p className="text-gray-700">
                  Bent u nog geen patiënt? Neem dan telefonisch contact met ons op via <a href="tel:+3292221213" className="font-medium text-[#19A0D1] hover:underline">09 222 12 13</a>.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6 text-[#19A0D1]">Nieuwe patiënten</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Bent u nieuw bij onze praktijk? We heten u van harte welkom! Voor nieuwe patiënten plannen we graag een uitgebreid consult in om kennis te maken en uw tandheelkundige geschiedenis door te nemen.
              </p>
              <div className="space-y-4">
                <a href="tel:+3292221213" className="bg-[#19A0D1] hover:bg-[#19A0D1]/80 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 w-full">
                  <Phone className="h-5 w-5" />
                  <span>Bel voor een afspraak</span>
                </a>
                <a href="mailto:info@tandartsswaelens.be" className="border-2 border-[#19A0D1] text-[#19A0D1] hover:bg-[#19A0D1]/10 font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 w-full">
                  <Mail className="h-5 w-5" />
                  <span>Stuur ons een e-mail</span>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6 text-[#19A0D1]">Bestaande patiënten</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Als bestaande patiënt kunt u online een afspraak maken via het onderstaande formulier. Lukt dit niet? Dan kunt u ook telefonisch of per e-mail contact met ons opnemen.
              </p>
              <div className="space-y-4">
                <a href="#online-afspraak" className="bg-[#19A0D1] hover:bg-[#19A0D1]/80 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 w-full">
                  <Calendar className="h-5 w-5" />
                  <span>Maak online een afspraak</span>
                </a>
                <a href="tel:+3292221213" className="border-2 border-[#19A0D1] text-[#19A0D1] hover:bg-[#19A0D1]/10 font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 w-full">
                  <Phone className="h-5 w-5" />
                  <span>Bel voor een afspraak</span>
                </a>
                <a href="mailto:info@tandartsswaelens.be" className="border-2 border-[#19A0D1] text-[#19A0D1] hover:bg-[#19A0D1]/10 font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 w-full">
                  <Mail className="h-5 w-5" />
                  <span>Stuur ons een e-mail</span>
                </a>
              </div>
            </div>
          </div>

          {/* Online Appointment Section for Existing Patients */}
          <div id="online-afspraak" className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-[#19A0D1]">Online afspraak maken</h2>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
              Bestaande patiënten kunnen hier direct online een afspraak inplannen. Selecteer een beschikbare datum en tijd die u uitkomt.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
              <div className="rounded-lg overflow-hidden" style={{ height: '600px' }}>
                <iframe 
                  src="https://tandartsswaelens.setmore.com/"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy"
                  title="Online afspraak maken - Tandarts Swaelens"
                ></iframe>
              </div>
            </div>
            
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              <p className="mb-2">Heeft u problemen met het online systeem?</p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a href="tel:+3292221213" className="text-[#19A0D1] hover:underline">Bel ons: 09 222 12 13</a>
                <span>•</span>
                <a href="mailto:info@tandartsswaelens.be" className="text-[#19A0D1] hover:underline">E-mail: info@tandartsswaelens.be</a>
              </div>
            </div>
          </div>

          {/* ... keep existing code (opening hours section) */}
          <div className="mt-12 bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Openingsuren voor afspraken</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600 last:border-b-0">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Maandag</span>
                    <span className="text-[#19A0D1] font-medium">09:00–13:00, 14:00–18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600 last:border-b-0">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Dinsdag</span>
                    <span className="text-gray-500">Gesloten</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600 last:border-b-0">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Woensdag</span>
                    <span className="text-[#19A0D1] font-medium">09:00–13:00, 14:00–18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600 last:border-b-0">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Donderdag</span>
                    <span className="text-gray-500">Gesloten</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600 last:border-b-0">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Vrijdag</span>
                    <span className="text-[#19A0D1] font-medium">09:00–13:00, 14:00–18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Zaterdag/Zondag</span>
                    <span className="text-gray-500">Gesloten</span>
                  </div>
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
