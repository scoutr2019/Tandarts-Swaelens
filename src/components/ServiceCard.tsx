
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  details: string[];
}

const ServiceCard = ({ title, description, icon, details }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-dental-blue-light rounded-lg text-dental-blue-dark">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-dental-blue-dark">{title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="mt-auto space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-dental-blue-medium mr-2">•</span>
            <span className="text-gray-600 text-sm">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
