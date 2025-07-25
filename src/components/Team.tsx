
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Team = () => {
  const team = [
    {
      name: "Dr. Christian Swaelens",
      role: "Tandarts",
      bio: [
        "Dr. Christian Swaelens heeft jarenlange ervaring in de tandheelkunde en heeft een passie voor het bieden van hoogwaardige, persoonlijke zorg aan al zijn patiënten.",
        "Na het afronden van zijn opleiding tandheelkunde heeft Dr. Swaelens zich voortdurend bijgeschoold om op de hoogte te blijven van de nieuwste technieken en ontwikkelingen in de tandheelkunde.",
        "Hij staat bekend om zijn rustige en geruststellende benadering, waardoor patiënten zich op hun gemak voelen, zelfs degenen die angstig zijn voor tandheelkundige behandelingen."
      ],
      image: "/lovable-uploads/42ab460c-7716-40d6-8ccc-b35dd0215c9f.png"
    },
    {
      name: "Anneleen Moonens",
      role: "Tandartsassistente",
      bio: [
        "Anneleen Moonens is een ervaren tandartsassistente die een essentiële rol speelt in onze praktijk. Ze ondersteunt Dr. Swaelens bij alle behandelingen en zorgt ervoor dat alles soepel verloopt.",
        "Met haar vriendelijke en zorgzame benadering helpt Anneleen patiënten zich op hun gemak te voelen vanaf het moment dat ze binnenkomen tot het einde van hun behandeling.",
        "Anneleen is verantwoordelijk voor het voorbereiden van behandelkamers, het assisteren tijdens procedures, en het zorgen voor de follow-up met patiënten na hun afspraken."
      ],
      image: "/lovable-uploads/347a82c7-f3a8-4776-a337-66d18e3aa519.png"
    }
  ];

  const philosophy = [
    {
      title: "Preventieve Zorg",
      description: "We geloven dat preventie de sleutel is tot een levenslange goede mondgezondheid. We richten ons op educatie en preventieve behandelingen om problemen te voorkomen voordat ze ontstaan."
    },
    {
      title: "Persoonlijke Aandacht",
      description: "Elke patiënt is uniek en verdient een gepersonaliseerde behandeling. We nemen de tijd om naar u te luisteren en een behandelplan op maat te maken."
    },
    {
      title: "Voortdurende Educatie",
      description: "We blijven zichzelf bijscholen om de nieuwste technieken en technologieën in de tandheelkunde aan te kunnen bieden, zodat u altijd kunt rekenen op de beste zorg."
    },
    {
      title: "Comfortabele Ervaring",
      description: "We streven ernaar om elke tandheelkundige ervaring zo comfortabel en stressvrij mogelijk te maken, vooral voor patiënten met tandheelkundige behandelangst."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dental-offwhite to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Subtle background elements - hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] hidden md:block">
        <div className="absolute top-20 left-[10%] text-6xl text-dental-blue-medium">🦷</div>
        <div className="absolute top-40 right-[15%] text-4xl text-dental-blue-medium">✨</div>
        <div className="absolute top-80 left-[20%] text-5xl text-dental-blue-medium">😊</div>
        <div className="absolute bottom-80 right-[25%] text-6xl text-dental-blue-medium">🦷</div>
        <div className="absolute bottom-40 left-[15%] text-4xl text-dental-blue-medium">💎</div>
        <div className="absolute top-60 right-[40%] text-3xl text-dental-blue-medium">⭐</div>
        <div className="absolute bottom-60 left-[45%] text-5xl text-dental-blue-medium">🌟</div>
      </div>

      {/* Subtle geometric patterns - simplified for mobile */}
      <div className="absolute top-32 right-20 w-16 h-16 md:w-24 md:h-24 border border-dental-blue-light/20 rounded-full hidden sm:block"></div>
      <div className="absolute bottom-32 left-16 w-20 h-20 md:w-32 md:h-32 border-2 border-dental-blue-light/15 rounded-lg rotate-45 hidden sm:block"></div>

      {/* Team Members Section */}
      <section className="py-8 md:py-16 relative">
        <div className="dental-container relative">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white px-4">Ons team</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 md:mb-16 px-4 text-sm md:text-base">
            Maak kennis met ons deskundige team dat klaarstaat om u de beste tandheelkundige zorg te bieden in een comfortabele omgeving.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto px-4">
            {team.map((member, index) => (
              <div key={index} className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100/50 dark:border-gray-700/50 relative">
                {/* Subtle card background pattern */}
                <div className="absolute top-4 right-4 text-dental-blue-light/30 text-xl md:text-2xl">🦷</div>
                <div className="h-64 md:h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-[#19A0D1] text-base md:text-lg font-medium mb-4 md:mb-6">{member.role}</p>
                  <div className="space-y-3 md:space-y-4 text-gray-700 dark:text-gray-300">
                    {member.bio.map((paragraph, i) => (
                      <p key={i} className="leading-relaxed text-sm md:text-base">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-gray-50/80 via-dental-blue-light/20 to-gray-50/80 dark:from-gray-800/80 dark:via-gray-700/80 dark:to-gray-800/80 relative overflow-hidden backdrop-blur-sm">
        {/* Enhanced pattern overlay - hidden on mobile */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] hidden md:block">
          <div className="absolute top-16 left-[15%] text-8xl text-dental-blue-medium">🦷</div>
          <div className="absolute bottom-16 right-[15%] text-6xl text-dental-blue-medium">✨</div>
          <div className="absolute top-1/2 left-[5%] text-4xl text-dental-blue-medium">💎</div>
          <div className="absolute top-1/3 right-[8%] text-5xl text-dental-blue-medium">🌟</div>
        </div>
        
        <div className="dental-container relative px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Onze Filosofie</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 md:mb-16 text-sm md:text-base">
            Bij Tandarts Swaelens geloven we in een patiëntgerichte benadering van tandheelkunde. 
            Onze filosofie is gebaseerd op de volgende principes:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {philosophy.map((item, index) => (
              <div key={index} className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-white/70 dark:border-gray-600/70 relative">
                {/* Subtle card icons */}
                <div className="absolute top-4 right-4 text-dental-blue-light/40 text-lg md:text-xl">
                  {index === 0 && '🛡️'}
                  {index === 1 && '👥'}
                  {index === 2 && '📚'}
                  {index === 3 && '😌'}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#19A0D1] mb-3 md:mb-4">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-white/90 to-dental-offwhite/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm relative">
        {/* Subtle background elements for CTA - hidden on mobile */}
        <div className="absolute top-8 left-[20%] text-dental-blue-light/20 text-2xl md:text-3xl hidden md:block">📞</div>
        <div className="absolute bottom-8 right-[20%] text-dental-blue-light/20 text-2xl md:text-3xl hidden md:block">📅</div>
        
        <div className="dental-container text-center relative px-4">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">Maak kennis met ons team</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Wilt u een afspraak maken met Dr. Swaelens of heeft u vragen? 
            Neem contact met ons op.
          </p>
          <Button 
            asChild 
            className="bg-[#19A0D1] hover:bg-[#19A0D1]/90 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#19A0D1]/50"
          >
            <Link to="/afspraken" aria-label="Maak een afspraak online">
              Maak een afspraak
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Team;
