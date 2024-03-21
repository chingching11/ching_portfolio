import React from 'react'

async function fetchProjects() {
    const response = await fetch(`http://localhost:3000/api/projects`, {
        cache: "no-cache"
    }) 
    const info = await response.json()
    return info
}

const ProjectList = async() => {
    const projects = await fetchProjects()
    console.log(projects);
  return (
    <div>ProjectList</div>
  )
}

export default ProjectList