
const Team = () => {
  const team = [
    {
      name: "Dr. Christian Swaelens",
      role: "Tandarts",
      bio: "Dr. Christian Swaelens leidt de praktijk met meer dan 15 jaar ervaring. Hij staat bekend om zijn persoonlijke aanpak en nauwkeurige behandelingen. Zijn focus ligt op het creëren van een angstvrije ervaring voor elke patiënt.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
    },
    {
      name: "Anneleen Moonens",
      role: "Tandartsassistente",
      bio: "Anneleen staat bekend om haar kalmerende aanpak en vriendelijke persoonlijkheid. Ze zorgt ervoor dat elke patiënt zich op zijn gemak voelt en helpt bij het soepel laten verlopen van alle behandelingen.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="team" className="py-16">
      <div className="dental-container">
        <h2 className="section-title text-center">Ons team</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Maak kennis met ons deskundige team dat klaarstaat om u de beste tandheelkundige zorg te bieden in een comfortabele omgeving.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dental-blue-dark">{member.name}</h3>
                <p className="text-dental-blue-medium mb-3">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
