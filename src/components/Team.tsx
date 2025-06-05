
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
    <div className="min-h-screen bg-gradient-to-b from-dental-offwhite to-white dark:from-gray-900 dark:to-gray-800">
      {/* Team Members Section */}
      <section className="py-16 relative">
        {/* Subtle decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-dental-blue-light/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-dental-blue-medium/10 rounded-full blur-2xl"></div>
        
        <div className="dental-container relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Ons team</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
            Maak kennis met ons deskundige team dat klaarstaat om u de beste tandheelkundige zorg te bieden in een comfortabele omgeving.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-[#19A0D1] text-lg font-medium mb-6">{member.role}</p>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    {member.bio.map((paragraph, i) => (
                      <p key={i} className="leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 via-dental-blue-light/20 to-gray-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23007297' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
        
        <div className="dental-container relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Onze Filosofie</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
            Bij Tandarts Swaelens geloven we in een patiëntgerichte benadering van tandheelkunde. 
            Onze filosofie is gebaseerd op de volgende principes:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {philosophy.map((item, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-white/50 dark:border-gray-600/50">
                <h3 className="text-xl font-semibold text-[#19A0D1] mb-4">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-dental-offwhite dark:from-gray-800 dark:to-gray-900">
        <div className="dental-container text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Maak kennis met ons team</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Wilt u een afspraak maken met Dr. Swaelens of heeft u vragen? 
            Neem contact met ons op.
          </p>
          <a 
            href="tel:+3292221213" 
            className="bg-[#19A0D1] hover:bg-[#19A0D1]/80 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-block hover:scale-105 shadow-lg"
          >
            Maak een afspraak
          </a>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Team;
