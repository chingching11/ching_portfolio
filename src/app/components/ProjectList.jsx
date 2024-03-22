import React from 'react'
import projects from './projects'

const ProjectList = async() => {
    console.log(projects);
  return (
    <div>
      ProjectList
      <pre>{JSON.stringify(projects, null, 2)}</pre>  
    </div>
    
  )
}

export default ProjectList