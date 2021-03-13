import React, { useState } from 'react'
import Sidebar from '../components/sidebar'

export default function Index() {
  const [show, setShow] = useState(false)
  return (
    <Sidebar>
      <>
        <div className="flex flex-col justify-center items-center w-screen h-screen text-center">
          <h1 className="text-5xl w-full mx-auto">Koki's portfolio site</h1>
          <p className="text-3xl mt-10 text-dark-blue">
            I'm a fledgling web developer in high school.
          </p>
        </div>
        <div className="h-screen">hello world</div>
        <div className="h-screen">hello world</div>
        <div className="h-screen">hello world</div>
        <div className="h-screen">hello world</div>
        <div className="h-screen">hello world</div>
        <div className="h-screen">hello world</div>
        <div className="h-screen">hello world</div>
      </>
    </Sidebar>
  )
}
