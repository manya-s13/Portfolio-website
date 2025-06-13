import React from 'react'
import   ProjectCard   from './ProjectCard'

function Projects() {

    const projectData = [
        {
          title: "CloudDocs",
          description: "File Sharing and Storing Project",
          dates: "Feb 2025",
          image: "/Project1.png",
          tags: ["NextJS", "Appwrite", "Tailwind", "ShadCN"],
        },
          {
            title: "ChatApp",
            description: "Real Time Chat Application",
            dates: "May 2025",
            image: "/project3.png",
            tags: ["React", "NodeJS", "Tailwind", "MongoDB"],
          },
        {
            title: "Blogify",
            description: "Site to write and read Blogs",
            dates: "Nov 2024",
            image: "/project2.png",
            tags: ["React", "NodeJS", "Tailwind", "MongoDB"],
          },
         
      ];

      const frontendProjects = [
        {
            title: "DriftUI",
            description: "drift-ui-nine.vercel.app",
            dates: "May 2025",
            image: "/drift.png",
            tags: ["React", "Tailwind", "Framer"],
          },
          {
            title: "DriftUI",
            description: "Landing Page",
            dates: "May 2025",
            image: "/drift.png",
            tags: ["React", "Tailwind", "Framer"],
          }
      ]

  return (
    <div id='Projects' className='mt-50 mb-10'>
        {/* <div className='flex items-center justify-center gap-4 font-semibold'>
            <span className='text-5xl text-white'>My</span>
            <span className='text-pink-300 text-5xl'>Projects</span>
        </div> */}
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
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
      <div className='text-center mt-15 font-semibold text-pink-300 text-xl'>
            Frontend Projects
        </div>
        <div className="mt-10 px-8 md:px-70 grid gap-8 md:grid-cols-1 lg:grid-cols-2 ">
        {frontendProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects