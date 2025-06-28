
import { useState, useEffect } from "react";
import { Cookie, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import CookieSettings from "./CookieSettings";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
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
      marketing: true,
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
      marketing: false,
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
    if (key === 'necessary') return;
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
          <CookieSettings
            preferences={preferences}
            onTogglePreference={togglePreference}
            onSavePreferences={handleSavePreferences}
            onRejectAll={handleRejectAll}
            onAcceptAll={handleAcceptAll}
            onClose={() => setShowDetails(false)}
          />
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
