import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Projects from './Projects';
import TechStack from './Tech/TechStack';

function Hero() {

    const [text, setText] = useState('');
    const fulltext = "Full-Stack Developer"
    const speed = 100
      
      useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
          if (index <= fulltext.length) {
            setText(fulltext.substring(0, index))
            index++
          } else {
            clearInterval(interval)
          }
        }, speed)
    
        return () => clearInterval(interval)
      }, [])

      function handle(){
        window.open("https://drive.google.com/file/d/1Lk-vj6r_Px-6uCLV-xO0Vtv4zM5nMAbR/view?usp=sharing")
      }

  return (
    <div className='bg-black min-h-screen overflow-hidden'>
<div className='flex flex-col items-center px-4'>
        <h1 className='text-white/60 text-8xl font-bold text-center mt-30 mb-10'>
          Hi! I'm
          <span className='text-pink-400'> Manya.</span>
        </h1>

        <div className='max-w-2xl w-full flex flex-col md:flex-row items-center justify-between gap-4'>
          {/* Text */}
          <p className='text-md text-gray-300 leading-relaxed text-center md:text-left md:w-2/3'>
          I'm a 21-year-old software developer based in India, currently in my final year of Computer Science Engineering.
          Passionate about building meaningful digital experiences, I thrive at the intersection of creativity and code.
          </p>

          <img
            src='/me.jpg'
            alt='Manya'
            className='w-52 h-52 object-cover rounded-full'
          />
        </div>
      </div>

        <h1 className='text-white text-center text-4xl mt-10 font-bold flex justify-center items-center'>
        {text}
        <motion.span
            className='ml-1 bg-pink-400'
            style={{ width: '4px', height: '2.5rem' }} 
            animate={{ opacity: [0, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
        </h1>

        <div className='flex justify-center'>
        <button onClick={handle} className='bg-pink-400 text-white px-8 py-2 text-lg rounded-xl text-center mt-10 cursor-pointer hover:bg-pink-400/70'>Resume</button>
        </div>
        <Projects />
        <TechStack />
    </div>
  )
}

export default Hero