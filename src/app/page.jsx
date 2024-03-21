import Image from "next/image";
import ProjectList from "./components/ProjectList";

export default function Home() {
  return (
    <div className="container top-container">
      <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center lg:items-start px-4 lg:px-0">
              <h5 className="text-lg font-bold text-gray-800">Hello,</h5>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">I'm Ching</h1>
              <h5 className="text-lg font-bold text-gray-800 mb-4">Software Engineer</h5>
              <p className="text-base lg:text-lg leading-relaxed text-gray-700 mb-6">
                  I'm a fresh graduate from San Jose State University with highest distinction.   
                  I'm interested in Web Development, Database Management System and Cybersecurity.
              </p>
              <a href="/about" className="btn btn-outline-light mr-4">About Me</a>
              <a href="/contact" className="btn btn-outline-light mr-4">Contact Me</a>
              <a href="https://docs.google.com/document/d/15zQrsUF0Kw1KxujVgUo5C8GOTaqT_QDbChg7krlsoBA/edit?usp=sharing" target="_blank" className="btn btn-outline-light mr-4">Resume</a>
              <a href="https://github.com/chingching11" target="_blank" className="btn btn-outline-light">GitHub</a>
          </div>
          <div className="flex justify-center items-center">
              <img src="/assets/images/babyshark.jpeg" className="mx-auto" alt="ChingChing" width="300" height="300" /> 
          </div>
      </div>

      <ProjectList />
    </div>
  );
}
