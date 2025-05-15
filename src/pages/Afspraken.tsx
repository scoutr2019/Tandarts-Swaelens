
import { Calendar, Phone, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Layout from "@/components/Layout";

const Afspraken = () => {
  return (
    <Layout>
      <div className="dental-container py-12">
        <h1 className="text-4xl font-bold text-dental-blue-dark mb-8">Afspraak maken</h1>
        
        <Alert className="mb-8 bg-dental-blue-light/20 border-dental-blue-medium">
          <AlertCircle className="h-5 w-5 text-dental-blue-dark" />
          <AlertTitle className="text-dental-blue-dark font-medium text-lg">Belangrijke informatie</AlertTitle>
          <AlertDescription className="text-gray-700">
            Op dit moment kunnen alleen <strong>bestaande patiënten</strong> online een afspraak maken. 
            Bent u nog geen patiënt? Neem dan telefonisch contact met ons op via 09 222 12 13.
          </AlertDescription>
        </Alert>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-dental-blue-dark mb-4">Voor bestaande patiënten</h2>
            <p className="text-gray-700 mb-6">
              Als u al patiënt bent bij onze praktijk, kunt u hieronder online een afspraak maken. 
              Kies een geschikte datum en tijd voor uw volgende afspraak.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-dental-blue-light flex items-center justify-center">
                  <span className="font-bold text-dental-blue-dark">1</span>
                </div>
                <p className="text-gray-700">Kies het type behandeling dat u nodig heeft</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-dental-blue-light flex items-center justify-center">
                  <span className="font-bold text-dental-blue-dark">2</span>
                </div>
                <p className="text-gray-700">Selecteer een beschikbare datum en tijd</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-dental-blue-light flex items-center justify-center">
                  <span className="font-bold text-dental-blue-dark">3</span>
                </div>
                <p className="text-gray-700">Ontvang een bevestiging van uw afspraak</p>
              </div>
              
              <a href="#" className="dental-btn-primary flex items-center justify-center gap-2 w-full">
                <Calendar className="h-5 w-5" />
                <span>Online afspraak maken</span>
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-dental-blue-dark mb-4">Voor nieuwe patiënten</h2>
            <p className="text-gray-700 mb-6">
              We verwelkomen graag nieuwe patiënten in onze praktijk. Om u de best mogelijke zorg te bieden, 
              vragen we nieuwe patiënten om telefonisch contact met ons op te nemen voor een eerste afspraak.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-dental-blue-light flex items-center justify-center mt-1">
                  <span className="font-bold text-dental-blue-dark">1</span>
                </div>
                <p className="text-gray-700">Bel ons op werkdagen tussen 9:00 en 13:00 of tussen 14:00 en 18:00</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-dental-blue-light flex items-center justify-center mt-1">
                  <span className="font-bold text-dental-blue-dark">2</span>
                </div>
                <p className="text-gray-700">Onze assistente zal u enkele vragen stellen over uw tandheelkundige geschiedenis</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-dental-blue-light flex items-center justify-center mt-1">
                  <span className="font-bold text-dental-blue-dark">3</span>
                </div>
                <p className="text-gray-700">We plannen een eerste afspraak op een moment dat u schikt</p>
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
