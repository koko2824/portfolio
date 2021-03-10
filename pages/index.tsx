import React, { useState } from 'react'
import Sidebar from '../components/sidebar'

export default function Index() {
  const [show, setShow] = useState(false)
  return (
    <Sidebar>
      <>
        <div className="h-screen">hello world</div>
        <div className="h-screen">hello world</div>
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
