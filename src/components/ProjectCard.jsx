import React from "react";
import { ExternalLink, Eye } from 'lucide-react'

function ProjectCard({ title, description, dates, tags, link, deploy = [], image }) {
  return (
    <div className="flex flex-col rounded-xl shadow-xl overflow-hidden bg-zinc-900 text-gray-400 hover:text-blue-400 hover:scale-105 transition-all duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="h-50 w-full object-cover object-top"
        />
      )}
      <div className="p-4 flex flex-col justify-between h-full ">
        <div>
          {/* <h3 className="text-lg font-semibold">{title}</h3> */}
          <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex gap-3">
          {/* Eye Icon Link */}
          {deploy && (
            <a
              href={deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Eye size={18} />
            </a>
          )}
          {/* External Link Icon */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
          <p className="text-xs text-gray-200">{dates}</p>
          <p className="mt-2 text-sm text-gray-200">{description}</p>
        </div>
        
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-800 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard
