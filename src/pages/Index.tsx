
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Users, Check, HeartPulse, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import CallToActionSection from "@/components/CallToActionSection";

const Index = () => {
  const highlightedServices = [
    {
      title: "Preventieve tandheelkunde",
      description: "Regelmatige controles en professionele reiniging voor een gezond gebit.",
      icon: <Check className="h-6 w-6" />,
      link: "/diensten#preventie"
    },
    {
      title: "Esthetische behandelingen",
      description: "Verbeter uw glimlach met onze esthetische behandelingen.",
      icon: <HeartPulse className="h-6 w-6" />,
      link: "/diensten#esthetisch"
    },
    {
      title: "Kindertandheelkunde",
      description: "Kindvriendelijke zorg in een aangename omgeving.",
      icon: <Stethoscope className="h-6 w-6" />,
      link: "/diensten#kinderen"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Christian Swaelens",
      role: "Tandarts",
      description: "Dr. Swaelens heeft jarenlange ervaring in de tandheelkunde en staat bekend om zijn persoonlijke aanpak en aandacht voor detail. Met zijn vriendelijke benadering zorgt hij ervoor dat elke patiënt zich op zijn gemak voelt.",
      image: "/lovable-uploads/42ab460c-7716-40d6-8ccc-b35dd0215c9f.png"
    },
    {
      name: "Anneleen Moonens",
      role: "Tandartsassistente",
      description: "Anneleen zorgt voor het comfort van onze patiënten en ondersteunt bij alle behandelingen. Ze staat bekend om haar vriendelijke benadering en haar talent om zelfs de meest nerveuze patiënten gerust te stellen.",
      image: "/lovable-uploads/347a82c7-f3a8-4776-a337-66d18e3aa519.png"
    }
  ];

  return (
    <Layout>
      <Hero />
      
      {/* Welcome Section */}
      <section className="py-16">
        <div className="dental-container">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Welkom bij Tandarts Swaelens</h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <p className="text-gray-700 dark:text-gray-200 mb-6">
                  Bij Tandarts Swaelens streven we ernaar om hoogwaardige tandheelkundige zorg te bieden in een comfortabele en vriendelijke omgeving. Onze praktijk in Gent is uitgerust met moderne technologie om u de beste behandeling te geven.
                </p>
                <p className="text-gray-700 dark:text-gray-200 mb-6">
                  Dr. Christian Swaelens en zijn team zetten zich in voor preventieve tandheelkunde en persoonlijke zorg, afgestemd op de behoeften van elke patiënt. We nemen de tijd om naar u te luisteren en uw vragen te beantwoorden.
                </p>
                <Link to="/team" className="bg-[#1E90FF] hover:bg-[#1E90FF]/80 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2 w-fit">
                  <Users className="h-5 w-5" />
                  <span>Leer ons team kennen</span>
                </Link>
              </div>
              <div className="md:w-1/3">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/42ab460c-7716-40d6-8ccc-b35dd0215c9f.png" 
                    alt="Dr. Christian Swaelens, tandarts" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Featured Services */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Onze diensten</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {highlightedServices.map((service, index) => (
                <Link to={service.link} key={index} className="block hover:scale-105 transition-transform">
                  <Card className="h-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-[#EAF6FF] dark:bg-[#1E90FF]/30 rounded-lg text-[#1E90FF]">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-[#1E90FF]">{service.title}</h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link to="/diensten" className="bg-[#1E90FF] hover:bg-[#1E90FF]/80 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center gap-2">
                <span>Bekijk alle diensten</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="dental-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ons Team</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Maak kennis met ons ervaren en vriendelijke team dat klaarstaat om u de beste tandheelkundige zorg te bieden.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`${member.name}, ${member.role}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-[#19A0D1] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/team" 
              className="text-[#19A0D1] hover:text-[#19A0D1]/80 font-medium inline-flex items-center gap-2 border-b border-[#19A0D1] pb-1 transition-colors"
            >
              <span>Leer meer over ons team</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <PhilosophySection />
      <CallToActionSection />
    </Layout>
  );
};

export default Index;
