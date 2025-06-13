// src/components/TechStack.jsx
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechCards from "./TechCards";
import { TechIcons } from "./TechIcons";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity:0 },
      {
        y: 0,
        opacity: 1,
        // duration: 0,
        ease: "power2.inOut",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#tech-stack",
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <div id="TechStack" className="mt-40 mb-20">
       
        {/* <div className='flex items-center justify-center gap-4 font-semibold'>
            <span className='text-5xl text-white'>Tech</span>
            <span className='text-pink-300 text-5xl'>Stack</span>
        </div> */}
         <div className='flex items-center justify-center gap-4 font-bold mb-5 animate-fade-in'>
          <span className='text-5xl text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Tech</span>
          <span className='text-pink-400 text-5xl bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent'>Stack</span>
        </div>
        <div className='text-gray-300 text-center mt-5 mb-10'>
        What I bring to the table
        </div>
    <div className="tech-stack" id="tech-stack">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center max-w-6xl mx-auto px-4">
        {TechIcons.map((item) => (
          <TechCards key={item.name} {...item} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default TechStack;
