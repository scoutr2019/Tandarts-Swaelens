
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[500px] md:h-[600px]">
      {/* Full-width background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-[#1E90FF]/70 dark:bg-[#1E90FF]/80"></div>
      </div>

      {/* Content overlay */}
      <div className="dental-container relative h-full flex flex-col justify-center">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Uw glimlach, <br />
            <span>onze zorg</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            Welkom bij Tandartspraktijk Swaelens in Gent. Wij staan voor persoonlijke tandheelkunde, met aandacht voor detail en een angstvrije ervaring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/afspraken" className="bg-white text-[#1E90FF] hover:bg-gray-100 font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>Maak een afspraak</span>
            </Link>
            <Link to="/contact" className="border-2 border-white hover:bg-white/10 text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg transition-colors flex items-center justify-center">
              <span>Contacteer ons</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
