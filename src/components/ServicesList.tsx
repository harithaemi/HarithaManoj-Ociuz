import { useState } from "react";

type Service = {
  id: number;
  title: string;
  image: string;
  staff: string[];
};

type ServicesListProps = {
  services: Service[];
  darkMode: boolean;
};

const ServicesList = ({ services, darkMode }: ServicesListProps) => {
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setSelectedServiceId((prev) => (prev === id ? null : id)); // toggle
  };

  return (
    <div
      className={`flex flex-wrap sm:flex-wrap md:flex-nowrap justify-center gap-4 p-4 mt-auto ${
        darkMode ? "bg-[#8F6D00]" : "bg-[#E0BFB8]"
      }`}
    >
      {services.map((service) => (
        <div
          key={service.id}
          onClick={() => handleClick(service.id)}
          className="relative flex-1 min-w-[45%] sm:min-w-[30%] md:min-w-[150px] 
                     h-24 sm:h-32 md:h-40 rounded-xl overflow-hidden bg-cover bg-center  
                     hover:scale-105 transition cursor-pointer"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-2">
            {selectedServiceId === service.id ? (
              <>
                <h1 className="text-white text-sm font-semibold mb-2">
                  Available staff for {service.title}
                </h1>
                <ul className="text-white text-sm text-center space-y-1">
                  {service.staff.map((person, index) => (
                    <li key={index}>{person}</li>
                  ))}
                </ul>
              </>
            ) : (
              <h1 className="text-xs sm:text-sm md:text-lg font-bold text-white text-center">
                {service.title}
              </h1>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;


