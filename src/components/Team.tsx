
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
    <section id="team" className="py-16 bg-gray-900 text-white">
      <div className="dental-container">
        <h2 className="section-title text-center text-white">Ons team</h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          Maak kennis met ons deskundige team dat klaarstaat om u de beste tandheelkundige zorg te bieden in een comfortabele omgeving.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="w-full lg:w-80 h-80 overflow-hidden rounded-xl flex-shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-[#19A0D1] text-lg mb-4">{member.role}</p>
                <div className="space-y-3 text-gray-300">
                  {member.bio.map((paragraph, i) => (
                    <p key={i} className="leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Onze Filosofie</h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
            Bij Tandarts Swaelens geloven we in een patiëntgerichte benadering van tandheelkunde. 
            Onze filosofie is gebaseerd op de volgende principes:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {philosophy.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#19A0D1] mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-white mb-4">Maak kennis met ons team</h3>
          <p className="text-gray-300 mb-8">
            Wilt u een afspraak maken met Dr. Swaelens of heeft u vragen? 
            Neem contact met ons op.
          </p>
          <a 
            href="tel:+3292221213" 
            className="bg-[#19A0D1] hover:bg-[#19A0D1]/80 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Maak een afspraak
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
