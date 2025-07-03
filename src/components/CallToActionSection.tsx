
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Phone, Clock } from "lucide-react";

const CallToActionSection = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:+3292221213";
  };

  return (
    <section className="py-16">
      <div className="dental-container">
        <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="absolute inset-0 bg-gradient-to-br from-[#19A0D1]/5 to-[#1E90FF]/5"></div>
          
          <div className="relative p-8 md:p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#19A0D1]/10 rounded-full mb-6">
                <Calendar className="h-10 w-10 text-[#19A0D1]" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Klaar om een afspraak te maken?</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#19A0D1]/10 rounded-full mx-auto mb-4">
                    <Users className="h-6 w-6 text-[#19A0D1]" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Bestaande patiënten</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Maak eenvoudig online een afspraak op een moment dat u het beste uitkomt.
                  </p>
                  <Button asChild className="bg-[#19A0D1] hover:bg-[#19A0D1]/90 text-white shadow-lg">
                    <Link to="/afspraken">
                      <Calendar className="h-5 w-5 mr-2" />
                      Maak een afspraak
                    </Link>
                  </Button>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#19A0D1]/10 rounded-full mx-auto mb-4">
                    <Phone className="h-6 w-6 text-[#19A0D1]" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Nieuwe patiënten</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Neem telefonisch contact op om een eerste afspraak te maken.
                  </p>
                  <Button 
                    onClick={handlePhoneCall}
                    variant="outline"
                    className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-[#19A0D1] border-2 border-[#19A0D1] shadow-lg"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    09 222 12 13
                  </Button>
                </div>
              </div>
              
              <div className="bg-[#19A0D1]/10 dark:bg-[#19A0D1]/20 rounded-xl p-6 border border-[#19A0D1]/20 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Clock className="h-6 w-6 text-[#19A0D1]" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Telefonische Openingsuren</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  Maandag, woensdag & vrijdag: <span className="font-semibold text-[#19A0D1]">09:00-13:00 & 14:00-18:00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
