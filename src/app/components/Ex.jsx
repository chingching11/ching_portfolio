import React from 'react'

const Ex = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-bold mb-8 pt-5">Experiences</h1>
      <div className="mb-8 container rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Software Engineer | Nisum Technologies, Inc.</h2>
        <ul className="list-disc ml-8 mb-4 text-left pt-4">
          <li>Worked alongside with Order Management System team to implement RESTful APIs in Spring Boot that create, update, and delete orders and inform notifications to Warehouse Management System.</li>
          <li>Built Angular UI components for order management system.</li>
          <li>Collaborated with 2 coworkers and participated in the company’s global Google Cloud Platform theme hackathon and listed as top 10.</li>
          <li>Built an application called shoppers’ grab using Google Cloud Vision AI to improve customers’ shopping experience and promote sale.</li>
        </ul>
      </div>

      <div className="mb-8 container rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Software Developer | Luca Medical Systems</h2>
        <ul className="list-disc ml-8 mb-4 text-left pt-4">
          <li>Successfully implemented a new feature for both frontend and backend:</li>
          <ul className="list-disc ml-8 mb-4">
            <li>Frontend: using React for User Interface.</li>
            <li>Backend: using Flask to handle client’s requests by validating and adding newly configured data to the database (MongoDB).</li>
          </ul>
          <li>Developed robust test suites for automated testing using Jest and Puppeteer:</li>
          <ul className="list-disc ml-8 mb-4">
            <li>Unit tests, Integration tests, End-to-End tests.</li>
          </ul>
          <li>Restructured database for robust test automation by using Mongo queries.</li>
          <li>Created Slack Integration with AWS CloudWatch.</li>
        </ul>
      </div>
    </div>
  )
}

export default Ex