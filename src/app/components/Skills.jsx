import React from 'react';

const Skills = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-bold mb-8 pt-5">Skills</h1>
      <div className="flex flex-col lg:flex-row rounded-lg shadow-lg p-5">
        <div className="lg:w-1/2 mb-4 lg:mb-0 pb-5">
          <ul className="skills-list">
            <li>React</li>
            <li>Next js</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>    
            <li>AWS</li>
            <li>Docker</li>
            
          </ul>
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <ul className="skills-list">
            <li>MySQL</li>
            <li>NoSQL</li>
            <li>Solidity</li>
            <li>Spring Boot</li>
            <li>Cypress</li>
            <li>PHP</li>
            <li>C Programming</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
