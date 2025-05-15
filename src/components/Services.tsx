
import { Stethoscope, Check, User, FileText, Calendar, HeartPulse } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Preventie",
      description: "Voorkomen is beter dan genezen. Onze preventieve zorg houdt uw gebit in topconditie.",
      icon: <Check className="h-6 w-6" />,
      details: [
        "Regelmatige controles",
        "Professionele reinigingen",
        "Tandplak- en tandsteenverwijdering",
        "Fluoridebehandelingen",
        "Advies over mondhygiëne",
        "Fissuurverzegeling"
      ]
    },
    {
      title: "Vullingen",
      description: "Moderne technieken voor duurzame en esthetische vullingen die uw natuurlijke gebit herstellen.",
      icon: <FileText className="h-6 w-6" />,
      details: [
        "Composietvullingen",
        "Inlays en onlays",
        "Vervanging van oude amalgaamvullingen",
        "Behandeling van gevoelige tanden"
      ]
    },
    {
      title: "Kindertandheelkunde",
      description: "Kindvriendelijke zorg die uw kind een positieve ervaring met de tandarts geeft.",
      icon: <User className="h-6 w-6" />,
      details: [
        "Kindvriendelijke eerste bezoeken",
        "Preventieve behandelingen",
        "Fluoridebehandelingen",
        "Behandeling van melktanden",
        "Educatie over mondhygiëne"
      ]
    },
    {
      title: "Orthodontie",
      description: "Solutions voor een rechter gebit en een mooiere glimlach voor zowel kinderen als volwassenen.",
      icon: <HeartPulse className="h-6 w-6" />,
      details: [
        "Uitgebreide evaluaties",
        "Traditionele beugels",
        "Transparante aligners",
        "Retainers",
        "Behandelingen voor kinderen en volwassenen"
      ]
    },
    {
      title: "Esthetische tandheelkunde",
      description: "Verbeter uw glimlach met onze esthetische behandelingen voor een stralend resultaat.",
      icon: <Stethoscope className="h-6 w-6" />,
      details: [
        "Professioneel tanden bleken",
        "Facings en veneers",
        "Esthetische vullingen",
        "Vormcorrecties",
        "Glimlachontwerp"
      ]
    },
    {
      title: "Kroon- en brugwerk",
      description: "Herstel van beschadigde tanden met hoogwaardige kronen en bruggen die er natuurlijk uitzien.",
      icon: <Calendar className="h-6 w-6" />,
      details: [
        "Porseleinen kronen",
        "Bruggen",
        "Inlays en onlays",
        "Gebruik van CAD/CAM-technologie"
      ]
    }
  ];

  return (
    <section id="diensten" className="py-16 bg-dental-blue-light/30">
      <div className="dental-container">
        <h2 className="section-title text-center">Onze diensten</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Bij Tandarts Swaelens bieden we een uitgebreid pakket aan tandheelkundige diensten aan. Van preventieve zorg tot complexe behandelingen, alles met persoonlijke aandacht.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              details={service.details}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="dental-btn-primary inline-flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>Maak een afspraak</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
