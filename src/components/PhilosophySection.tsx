
import { Heart, Shield, Smile } from "lucide-react";

const PhilosophySection = () => {
  const philosophyItems = [
    {
      title: "Persoonlijke aandacht",
      description: "We nemen de tijd om naar uw wensen en zorgen te luisteren en stellen een behandelplan op maat voor u samen.",
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: "Moderne technieken",
      description: "Onze praktijk is uitgerust met de nieuwste technologieën om u de beste en meest comfortabele behandelingen te bieden.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Angstvrije ervaring",
      description: "We begrijpen dat tandartsbezoeken stressvol kunnen zijn en doen er alles aan om u op uw gemak te stellen.",
      icon: <Smile className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-16">
      <div className="dental-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#19A0D1]">Tandheelkunde met een persoonlijke touch</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Bij Tandarts Swaelens combineren we vakmanschap met zorg en aandacht voor elke patiënt.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {philosophyItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#19A0D1] text-white rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
