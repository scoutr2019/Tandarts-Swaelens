
import { useState, useEffect } from "react";
import { Cookie, X, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
  });

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
    };
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
    };
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyNecessary));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', 'customized');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Necessary cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="dental-container py-4">
        {!showDetails ? (
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-5 w-5 text-[#19A0D1] flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-2">
                  Deze website gebruikt cookies om uw ervaring te verbeteren en onze diensten te analyseren. 
                  U kunt uw voorkeuren aanpassen of alle cookies accepteren.
                </p>
                <p>
                  Meer informatie in ons{" "}
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
                onClick={() => setShowDetails(true)}
                className="text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Settings className="h-4 w-4 mr-2" />
                Instellingen
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectAll}
                className="text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Alleen noodzakelijke
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="bg-[#19A0D1] hover:bg-[#1489B8] text-white"
              >
                Alle accepteren
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cookie Instellingen</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">Noodzakelijke cookies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Essentieel voor het functioneren van de website. Kunnen niet worden uitgeschakeld.
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="w-12 h-6 bg-[#19A0D1] rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">Functionele cookies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Verbeteren de functionaliteit en personalisatie van de website.
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <button
                    onClick={() => togglePreference('functional')}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.functional ? 'bg-[#19A0D1] justify-end' : 'bg-gray-300 dark:bg-gray-600 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">Analytische cookies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Helpen ons begrijpen hoe bezoekers de website gebruiken.
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <button
                    onClick={() => togglePreference('analytics')}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.analytics ? 'bg-[#19A0D1] justify-end' : 'bg-gray-300 dark:bg-gray-600 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-gray-200 dark:border-gray-600">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectAll}
                className="text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Alleen noodzakelijke
              </Button>
              <Button
                size="sm"
                onClick={handleSavePreferences}
                className="bg-[#19A0D1] hover:bg-[#1489B8] text-white"
              >
                Voorkeuren opslaan
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="bg-[#19A0D1] hover:bg-[#1489B8] text-white"
              >
                Alle accepteren
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
