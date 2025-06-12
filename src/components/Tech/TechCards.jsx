import React from "react";

const TechCards = ({ name, icon }) => {
  return (
    <div className="tech-card group relative w-full max-w-[200px] aspect-square p-2 rounded-2xl bg-zinc-900 border border-gray-700 transition-all duration-300 hover:border-gray-500 overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-purple-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
      

      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
        <div className="w-16 h-16 flex items-center justify-center">
          <img 
            src={icon} 
            alt={name} 
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
          />
        </div>
        <p className="text-white text-sm font-medium text-center group-hover:text-white transition-colors duration-300">
          {name}
        </p>
      </div>
    </div>
  );
};

export default TechCards;