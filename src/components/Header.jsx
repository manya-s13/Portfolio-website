// import React from 'react'

// function Header() {
//   return (
//     <div className='bg-black py-10'>
//         <div className='flex justify-between items-center px-14'>
//             <div className='text-white text-xl font-semibold'>Manya Sharma</div>
            
//             <div className='absolute left-1/2 transform -translate-x-1/2 flex gap-6 text-white text-center text-lg'>
//           <span className='hover:underline cursor-pointer'>Projects</span>
//           <span className='hover:underline cursor-pointer'>Skills</span>
//         </div>
//         <button className='bg-white text-black rounded-lg px-6 py-2 hover:bg-zinc-900 hover:text-white cursor-pointer'>Contact Me</button>
//         </div>
//     </div>
//   )
// }

// export default Header

import React from 'react'

function Header() {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className='bg-black py-4 sticky top-0 z-50'>
      <div className='flex justify-between items-center px-14'>
        <div className='text-white text-xl font-semibold'>Manya Sharma</div>
        
        <div className='absolute left-1/2 transform -translate-x-1/2 flex  hidden md:flex md:gap-6 text-white text-center text-lg'>
          <span 
            className='hover:underline cursor-pointer transition-all duration-200 hover:text-pink-300'
            onClick={() => scrollToSection('Projects')}
          >
            Projects
          </span>
          <span 
            className='hover:underline cursor-pointer transition-all duration-200 hover:text-pink-300'
            onClick={() => scrollToSection('TechStack')}
          >
            Skills
          </span>
          <span 
            className='hover:underline cursor-pointer transition-all duration-200 hover:text-pink-300'
            onClick={() => window.open("https://manyaa.substack.com")}
          >
            Blogs
          </span>
        </div>
        
        <button 
          className='bg-white text-black rounded-lg px-6 py-2 hover:bg-zinc-900 hover:text-white cursor-pointer transition-all duration-200'
          onClick={() => scrollToSection('contact')}
        >
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default Header