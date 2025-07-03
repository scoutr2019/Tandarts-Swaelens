
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CookieSettings from "./CookieSettings";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const preferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const preferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  const saveSettings = (preferences: any) => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50 p-4">
        <div className="dental-container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🍪 Cookie Toestemming</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                We gebruiken cookies om uw ervaring te verbeteren, websiteverkeer te analyseren en voor marketingdoeleinden. 
                Door op "Alles accepteren" te klikken, stemt u in met ons gebruik van cookies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
              <Button
                onClick={openSettings}
                variant="outline"
                size="sm"
                className="text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600"
              >
                Instellingen
              </Button>
              <Button
                onClick={acceptNecessary}
                variant="outline"
                size="sm"
                className="text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600"
              >
                Alleen noodzakelijk
              </Button>
              <Button
                onClick={acceptAll}
                size="sm"
                className="bg-[#19A0D1] hover:bg-[#19A0D1]/90 text-white"
              >
                Alles accepteren
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CookieSettings 
        isOpen={showSettings}
        onClose={closeSettings}
        onSave={saveSettings}
      />
    </>
  );
};

export default CookieConsent;
