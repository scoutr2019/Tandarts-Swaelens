
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

  return (
    <section id="team" className="py-16">
      <div className="dental-container">
        <h2 className="section-title text-center">Ons team</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Maak kennis met ons deskundige team dat klaarstaat om u de beste tandheelkundige zorg te bieden in een comfortabele omgeving.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dental-blue-dark dark:text-white">{member.name}</h3>
                <p className="text-[#19A0D1] mb-4">{member.role}</p>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  {member.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
