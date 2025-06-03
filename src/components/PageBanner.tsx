
import { ReactNode } from "react";

interface PageBannerProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

const PageBanner = ({ title, description, children }: PageBannerProps) => {
  return (
    <section className="relative h-[300px] md:h-[400px]">
      {/* Full-width background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/fc4781a1-37b7-475e-b988-d6750954400f.png')"
        }}
      >
        <div className="absolute inset-0 bg-[#19A0D1]/70 dark:bg-[#19A0D1]/80"></div>
      </div>

      {/* Content overlay */}
      <div className="dental-container relative h-full flex flex-col justify-center">
        <div className="text-white max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h1>
          {description && (
            <p className="text-lg md:text-xl mb-8 text-white">{description}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
