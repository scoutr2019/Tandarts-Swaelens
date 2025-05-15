
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  details: string[];
}

const ServiceCard = ({ title, description, icon, details }: ServiceCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-dental-blue-light dark:bg-dental-blue-dark/30 rounded-lg text-dental-blue-dark dark:text-dental-blue-light">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-dental-blue-dark dark:text-dental-blue-light">{title}</h3>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <ul className="mt-auto space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-dental-blue-medium dark:text-dental-blue-light mr-2">•</span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
