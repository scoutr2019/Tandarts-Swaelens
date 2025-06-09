
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dental-offwhite to-white dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="text-6xl md:text-8xl font-bold text-dental-blue-medium mb-4">404</div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Pagina niet gevonden
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm md:text-base">
            Sorry, de pagina die u zoekt bestaat niet of is verplaatst.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="bg-[#19A0D1] hover:bg-[#19A0D1]/80 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 shadow-lg"
          >
            <Home className="h-4 w-4" />
            Terug naar home
          </Link>
          
          <div className="block">
            <button 
              onClick={() => window.history.back()}
              className="text-dental-blue-medium hover:text-dental-blue-dark dark:hover:text-dental-blue-light font-medium inline-flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Ga terug
            </button>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p>Als u denkt dat dit een fout is, neem dan contact met ons op via:</p>
          <a 
            href="tel:+3292221213" 
            className="text-dental-blue-medium hover:underline"
          >
            09 222 12 13
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
