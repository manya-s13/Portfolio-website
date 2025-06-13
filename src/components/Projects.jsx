import React from 'react'
import   ProjectCard from './ProjectCard'
import {motion} from 'framer-motion'

function Projects() {

    const projectData = [
       
      {
        title: "Blogify",
        description: "Site to write and read Blogs",
        dates: "Nov 2024",
        image: "/project2.png",
        link: "https://github.com/manya-s13/blogify.git",
        deploy: "",
        tags: ["React", "NodeJS", "Tailwind", "MongoDB"],
      },
      
        {
          title: "CloudDocs",
          description: "File Sharing and Storing App",
          dates: "Feb 2025",
          image: "/Project1.png",
          link: "https://github.com/manya-s13/cloudDocs.git",
          deploy: "",
          tags: ["NextJS", "Appwrite", "Tailwind", "ShadCN"],
        },
        {
          title: "ChatApp",
          description: "Real Time Chat Application",
          dates: "May 2025",
          image: "/project3.png",
          link:  "https://github.com/manya-s13/ChatApp.git",
          deploy: "",
          tags: ["React", "NodeJS", "Tailwind", "MongoDB"],
        },
         
      ];

      const frontendProjects = [
        {
            title: "DriftUI",
            description: "drift-ui-nine.vercel.app",
            dates: "May 2025",
            image: "/drift.png",
            link: "https://github.com/manya-s13/DriftUI.git",
            deploy: "https://drift-ui-nine.vercel.app",
            tags: ["React", "Tailwind", "Framer"],
          },
          {
            title: "DriftUI",
            description: "Landing Page",
            dates: "May 2025",
            image: "/drift.png",
            link: "https://github.com/manya-s13/DriftUI.git",
            deploy: "https://drift-ui-nine.vercel.app",
            tags: ["React", "Tailwind", "Framer"],
          }
      ]

  return (
    <div id='Projects' className='mt-50 mb-10'>

         <div className='flex items-center justify-center gap-4 font-bold mb-5 animate-fade-in'>
          <span className='text-5xl text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>My</span>
          <span className='text-pink-400 text-5xl bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent'>Projects</span>
        </div>
        <div className='text-gray-300 text-center mt-5'>
        A visual log of my development journey
        </div>
        <div className='text-center mt-5 font-semibold text-pink-300 text-xl'>
            Full-Stack Projects
        </div>
        <div className="mt-10 px-8 md:px-36 grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {projectData.map((project, idx) => (

          <motion.div
          key={idx}
          initial={{opacity:0 , y: 50 }}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 1, delay: idx * 0.5}}
          viewport={{once: true}} >
                    <ProjectCard key={idx} {...project} />
          </motion.div>

          
        ))}
      </div>
      <div className='text-center mt-15 font-semibold text-pink-300 text-xl'>
            Frontend Projects
        </div>
        <div className="mt-10 px-8 md:px-70 grid gap-8 md:grid-cols-1 lg:grid-cols-2 ">
        {frontendProjects.map((project, idx) => (
                 <motion.div
                 key={idx}
                 initial={{opacity:0 , y: 50 }}
                 whileInView={{opacity: 1, y:0}}
                 transition={{duration: 1, delay: idx * 0.5}}
                 viewport={{once: true}} >
                           <ProjectCard key={idx} {...project} />
                 </motion.div>
       
        ))}
      </div>
    </div>
  )
}

export default Projects