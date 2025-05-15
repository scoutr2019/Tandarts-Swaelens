
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pb-16 md:pb-20">
      <div className="dental-container">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-dental-blue-dark mb-4">
              Uw glimlach, <br />
              <span className="text-dental-blue-medium">onze zorg</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Welkom bij Tandartspraktijk Swaelens in Gent. Wij staan voor persoonlijke tandheelkunde, met aandacht voor detail en een angstvrije ervaring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/afspraken" className="dental-btn-primary flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Maak een afspraak</span>
              </Link>
              <Link to="/diensten" className="dental-btn-outline flex items-center justify-center">
                <span>Onze diensten</span>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative rounded-2xl overflow-hidden shadow-xl h-[300px] md:h-[400px] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop')",
                backgroundPosition: "center 30%" 
              }}
            ></div>
            <div className="absolute inset-0 bg-dental-blue-dark/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
