import React from 'react'
import projects from './projects'
import Image from 'next/image'
import nextConfig from '../../../next.config.mjs'

const ProjectList = () => {
    
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-bold mb-8">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="container mx-auto rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-4 lg:mb-0">
              <Image src={`${nextConfig.basePath}${project.pImage}`} alt={project.pAlt} className="rounded-lg object-cover w-full h-64 lg:h-auto" width={300} height={300} />
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <h3 className="text-xl font-bold mb-2">{project.pName}</h3>
              <p className="mb-4 pt-2">{project.pDescription}</p>
              <ul className="mb-4">
                {project.pStack.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {project.pSite && (
                <div className="mb-4">
                  <a href={project.pSite} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Visit Website</a>
                </div>
              )}
              <div>
                <a href={project.pGitHubRepo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    
  )
}

export default ProjectList