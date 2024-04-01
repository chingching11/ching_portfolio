import React from 'react'
import nextConfig from '../../../next.config.mjs'

const Intro = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg shadow-lg">
        <div className="lg:pr-4 container">
          <h5 className="hello-box text-2xl lg:text-3xl font-bold">Hello,</h5>
          <h1 className="text-4xl lg:text-5xl font-bold">I'm Ching</h1>
          <h5 className="text-xl lg:text-2xl font-semibold pt-5">Software Engineer</h5>
          <p className="lead text-box text-lg lg:text-xl mt-4">
            I like coding.
          </p>
        </div>
        <div className="lg:pl-4">
          <img src="/assets/images/profile.png" className="mx-auto d-block" alt="ChingChing" width="300" height="300" /> 
        </div>
      </div>
    </div>
  )
}

export default Intro