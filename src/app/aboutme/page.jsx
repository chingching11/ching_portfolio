import React from 'react'
import nextConfig from '../../../next.config.mjs'
import Image from 'next/image'

function Aboutme() {
  return (
    <div className="container about-text">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:pr-4">
          <h1 className="about-text text-4xl lg:text-5xl font-bold mb-4 pt-10">About Me</h1>
          <div className="about-text mb-4">
            <p>Hello! I'm Ching, and I'm passionate about computer science. 
              I love diving into coding and building web apps.  
              Learning new things in tech is like a thrilling adventure for me. I'm always 
              eager to explore the latest trends and improve my skills. Currently, I'm learning 
              machine learning. 
            </p>
          </div>
          <div className="about-text mb-4">
            <p>
            Aside from my tech journey, I also have a keen interest in early childhood education. 
            I believe in creating fun and inclusive learning environments for kids, where they can grow and develop their creativity. 
            Whether it's coding or teaching, I'm driven by a desire to make a positive impact and help others learn and thrive.
            </p>
          </div>
          <div className="about-text">
            <p>Fun Fact: I like travelling and I like baby shark.</p>
          </div>
        </div>
        <div className="lg:pl-4">
          <Image src={`${nextConfig.basePath}/assets/images/lake_tahoe.jpeg`} className="mx-auto d-block image-shadow image-circular" alt="lake tahoe" width={400} height={300} />
        </div>
      </div>
    </div>
  )
}

export default Aboutme