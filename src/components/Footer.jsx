import React, {useState} from 'react'
import {Linkedin, Github, Twitter, CodeXml} from 'lucide-react'

function Footer() {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const socials = [
        {
            icon: <Github className="w-6 h-6 text-white" />,
            name: 'GitHub',
            url: 'https://github.com/manya-s13',
          },
          {
            icon: <Twitter className="w-6 h-6 text-white" />,
            name: 'Twitter',
            url: 'https://x.com/cinamonn_girll',
          },
          {
            icon: <CodeXml className="w-6 h-6 text-white" />,
            name: 'Leetcode',
            url: 'https://leetcode.com/manya13',
          },
          {
            icon: <Linkedin className="w-6 h-6 text-white" />,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/manyas13',
          },    
         
    ]

    const getTransform = (index) => {
        if (hoveredIndex === null) return 'scale-100 translate-y-0';
        
        const distance = Math.abs(index - hoveredIndex);
        if (distance === 0) return 'scale-150 -translate-y-4'; 
        if (distance === 1) return 'scale-115 -translate-y-2'; 
        return 'scale-100 translate-y-0';
      };

  return (
    <div className='bg-black overflow-hidden'>
      <div className='flex items-center justify-center'>
        <div className='flex gap-8 px-6 py-4 border border-white rounded-2xl'>
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className='relative group'
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
               
              <span className={`bg-pink-400 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform ${getTransform(i)}`}>
                {social.icon}
              </span>
              <span className="absolute top-[2.5rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer