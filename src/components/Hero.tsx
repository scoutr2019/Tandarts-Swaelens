
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[500px] md:h-[600px]">
      {/* Full-width background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/fc4781a1-37b7-475e-b988-d6750954400f.png')"
        }}
      >
        <div className="absolute inset-0 bg-[#19A0D1]/70 dark:bg-[#19A0D1]/80"></div>
      </div>

      {/* Content overlay */}
      <div className="dental-container relative h-full flex flex-col justify-center">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Uw glimlach, <br />
            <span className="text-white">onze zorg</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg text-white">
            Welkom bij Tandartspraktijk Swaelens in Gent. Wij staan voor persoonlijke tandheelkunde, met aandacht voor detail en een angstvrije ervaring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/afspraken" 
              className="bg-white text-[#19A0D1] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Online een afspraak maken"
            >
              <Calendar className="h-5 w-5" />
              <span>Maak een afspraak</span>
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Neem contact met ons op"
            >
              <span>Contacteer ons</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
