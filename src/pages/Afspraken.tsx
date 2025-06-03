
import { Calendar, Phone, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Link } from "react-router-dom";

const Afspraken = () => {
  return (
    <Layout>
      <PageBanner 
        title="Afspraak maken"
        description="Plan eenvoudig een afspraak bij Tandarts Swaelens. Bestaande patiënten kunnen online een afspraak maken, nieuwe patiënten kunnen telefonisch contact opnemen."
      />
      
      <div className="dental-container py-12">
        <Alert className="mb-8 bg-dental-blue-light/20 dark:bg-dental-blue-medium/20 border-dental-blue-medium dark:border-dental-blue-medium">
          <AlertCircle className="h-5 w-5 text-dental-blue-dark dark:text-dental-blue-medium" />
          <AlertTitle className="text-dental-blue-dark dark:text-white font-medium text-lg">Belangrijke informatie</AlertTitle>
          <AlertDescription className="text-gray-700 dark:text-gray-200">
            Op dit moment kunnen alleen <strong>bestaande patiënten</strong> online een afspraak maken. 
            Bent u nog geen patiënt? Neem dan telefonisch contact met ons op via <a href="tel:+3292221213" className="text-dental-blue-dark dark:text-dental-blue-medium hover:underline font-medium">09 222 12 13</a>.
          </AlertDescription>
        </Alert>
        
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-dental-blue-dark dark:text-white mb-4">Online afspraak maken</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-6">
              Als u al patiënt bent bij onze praktijk, kunt u hieronder direct een afspraak maken.
            </p>
            
            <div className="w-full bg-white rounded-lg overflow-hidden">
              <iframe 
                src="https://agenda.clickdocdentist.be/short/mgeqrWZ8KAm93jV5" 
                width="100%" 
                height="660" 
                scrolling="true" 
                frameBorder="1" 
                allow="encrypted-media"
                title="Tandarts Swaelens Afspraak Systeem"
                className="border border-dental-blue-light dark:border-dental-blue-medium rounded-lg"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-dental-blue-dark dark:text-white mb-4">Voor nieuwe patiënten</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-6">
              We verwelkomen graag nieuwe patiënten in onze praktijk. Om u de best mogelijke zorg te bieden, 
              vragen we nieuwe patiënten om telefonisch contact met ons op te nemen voor een eerste afspraak.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-dental-blue-light dark:bg-dental-blue-medium/50 flex items-center justify-center mt-1">
                  <span className="font-bold text-dental-blue-dark dark:text-white">1</span>
                </div>
                <p className="text-gray-700 dark:text-gray-200">Bel ons op werkdagen tussen 9:00 en 13:00 of tussen 14:00 en 18:00</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-dental-blue-light dark:bg-dental-blue-medium/50 flex items-center justify-center mt-1">
                  <span className="font-bold text-dental-blue-dark dark:text-white">2</span>
                </div>
                <p className="text-gray-700 dark:text-gray-200">Onze assistente zal u enkele vragen stellen over uw tandheelkundige geschiedenis</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-dental-blue-light dark:bg-dental-blue-medium/50 flex items-center justify-center mt-1">
                  <span className="font-bold text-dental-blue-dark dark:text-white">3</span>
                </div>
                <p className="text-gray-700 dark:text-gray-200">We plannen een eerste afspraak op een moment dat u schikt</p>
              </div>
              
              <a href="tel:+3292221213" className="dental-btn-primary flex items-center justify-center gap-2 w-full">
                <Phone className="h-5 w-5" />
                <span>Bel voor een afspraak</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Afspraken;
