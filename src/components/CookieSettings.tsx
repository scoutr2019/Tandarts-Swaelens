
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: any) => void;
}

const CookieSettings = ({ isOpen, onClose, onSave }: CookieSettingsProps) => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return; // Necessary cookies cannot be disabled
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    onSave(preferences);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    setPreferences(allAccepted);
    onSave(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    setPreferences(onlyNecessary);
    onSave(onlyNecessary);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cookie Instellingen</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Sluit instellingen"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
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

            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
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
                  aria-label={`Functionele cookies ${preferences.functional ? 'uitschakelen' : 'inschakelen'}`}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
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
                  aria-label={`Analytische cookies ${preferences.analytics ? 'uitschakelen' : 'inschakelen'}`}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white">Marketing cookies</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Gebruikt voor gepersonaliseerde advertenties en marketing.
                </p>
              </div>
              <div className="flex-shrink-0 ml-4">
                <button
                  onClick={() => togglePreference('marketing')}
                  className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                    preferences.marketing ? 'bg-[#19A0D1] justify-end' : 'bg-gray-300 dark:bg-gray-600 justify-start'
                  }`}
                  aria-label={`Marketing cookies ${preferences.marketing ? 'uitschakelen' : 'inschakelen'}`}
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
              onClick={handleSave}
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
      </div>
    </div>
  );
};

export default CookieSettings;
