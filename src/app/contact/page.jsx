import React from 'react'
import Link from 'next/link'

function Contact() {
  return (
    <div className="container">
      <h1 className='text-2xl'>Contact</h1>
        <div>
          <p className='py-5'>email: <strong>chingching.kao11@gmail.com</strong></p>
          <Link href="/destination" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Github
          </Link>
        </div>
    </div>
  )
}

export default Contact