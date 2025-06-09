
import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="dental-container py-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-5 w-5 text-[#19A0D1] flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700 dark:text-gray-300">
              <p className="mb-2">
                Deze website maakt gebruik van cookies om uw ervaring te verbeteren en om onze diensten te analyseren. 
                Door verder te gaan op deze website, gaat u akkoord met het gebruik van cookies.
              </p>
              <p>
                Lees meer in ons{" "}
                <Link to="/cookies" className="text-[#19A0D1] hover:underline font-medium">
                  cookiebeleid
                </Link>
                {" "}en{" "}
                <Link to="/privacy" className="text-[#19A0D1] hover:underline font-medium">
                  privacybeleid
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 md:flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Weigeren
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="bg-[#19A0D1] hover:bg-[#1489B8] text-white"
            >
              Accepteren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
