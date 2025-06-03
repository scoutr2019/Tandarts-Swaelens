
import { Stethoscope, Check, User, FileText, Calendar, HeartPulse, Wrench, Shield, Activity } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      id: "preventie",
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
      id: "vullingen",
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
      id: "kinderen",
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
      id: "orthodontie",
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
      id: "esthetisch",
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
      id: "kronen",
      title: "Kroon- en brugwerk",
      description: "Herstel van beschadigde tanden met hoogwaardige kronen en bruggen die er natuurlijk uitzien.",
      icon: <Calendar className="h-6 w-6" />,
      details: [
        "Porseleinen kronen",
        "Bruggen",
        "Inlays en onlays",
        "Gebruik van CAD/CAM-technologie"
      ]
    },
    {
      id: "implantaten",
      title: "Implantaten",
      description: "Tandimplantaten zijn een permanente oplossing voor ontbrekende tanden. Ze zien eruit en functioneren als natuurlijke tanden.",
      icon: <Wrench className="h-6 w-6" />,
      details: [
        "Consultatie en planning met 3D-beeldvorming",
        "Plaatsing van implantaten",
        "Kronen op implantaten",
        "Implantaatgedragen bruggen",
        "Implantaatgedragen prothesen",
        "Langdurige oplossing die uw kaakbot gezond houdt"
      ]
    },
    {
      id: "prothese",
      title: "Uitneembare prothese",
      description: "Uitneembare prothesen zijn een oplossing voor patiënten die meerdere of alle tanden missen.",
      icon: <Shield className="h-6 w-6" />,
      details: [
        "Volledige prothesen (kunstgebit)",
        "Gedeeltelijke prothesen",
        "Immediaat prothesen (direct na extractie)",
        "Prothesen op implantaten",
        "Reparatie en aanpassing van bestaande prothesen",
        "Comfortabele en natuurlijk uitziende prothesen"
      ]
    },
    {
      id: "parodontologie",
      title: "Parodontologie",
      description: "Parodontologie richt zich op de behandeling van tandvleesaandoeningen en het behoud van gezond tandvlees.",
      icon: <Activity className="h-6 w-6" />,
      details: [
        "Diagnose van tandvleesaandoeningen",
        "Professionele tandvleesreiniging (scaling en root planing)",
        "Behandeling van tandvleesontsteking en -infectie",
        "Chirurgische behandelingen indien nodig",
        "Onderhoudsprogramma's voor parodontale gezondheid",
        "Preventie van tandverlies en ondersteuning algehele gezondheid"
      ]
    }
  ];

  return (
    <section id="diensten" className="py-16 bg-dental-blue-light/30 dark:bg-dental-blue-dark/10">
      <div className="dental-container">
        <h2 className="section-title text-center">Onze diensten</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          We bieden een breed scala aan tandheelkundige behandelingen om uw mondgezondheid te behouden en te verbeteren.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div id={service.id} key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                details={service.details}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-dental-blue-dark dark:text-dental-blue-light mb-4">Maak een afspraak</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            Heeft u vragen over onze diensten of wilt u een afspraak maken? Neem contact met ons op.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Op dit moment kunnen alleen bestaande patiënten online een afspraak maken. Bent u nog geen patiënt? Neem dan telefonisch contact met ons op via <a href="tel:+3292221213" className="text-[#1E90FF] hover:underline font-medium">09 222 12 13</a>.
          </p>
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
