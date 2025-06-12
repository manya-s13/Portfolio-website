import React from "react";

function ProjectCard({ title, description, dates, tags = [], image }) {
  return (
    <div className="flex flex-col border rounded-xl shadow-md overflow-hidden bg-zinc-900 text-violet-300 hover:shadow-lg transition-all duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover object-top"
        />
      )}
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
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
