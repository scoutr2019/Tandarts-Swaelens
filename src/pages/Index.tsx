
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Users, Calendar, Stethoscope, Check, HeartPulse } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Services from "@/components/Services";
import TeamSection from "@/components/Team";
import ContactSection from "@/components/Contact";
import Hero from "@/components/Hero";

const Index = () => {
  // Top 3 services to highlight
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

  return (
    <Layout>
      {/* Banner Section */}
      <Hero />
      
      {/* Welcome Section */}
      <section className="py-16">
        <div className="dental-container">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-[#EAF6FF] dark:bg-[#1E90FF]/10 rounded-lg p-4 text-center mb-8">
              <span className="text-[#1E90FF] font-medium">Tandheelkunde met een glimlach</span>
            </div>
            
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
                    src="/lovable-uploads/873fa8e2-50d5-417a-bada-e6411eea360a.png" 
                    alt="Dr. Swaelens in praktijk" 
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

          <TeamSection />
          <ContactSection />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
