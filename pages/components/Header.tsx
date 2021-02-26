import React from 'react'
import NavItem from './atoms/NavItem'

const Header: React.FC = () => {
  return (
    <header className="w-11/12 h-20 mx-auto flex items-center justify-between">
      <div className="">logo</div>
      <nav className="text-white font-extralight text-lg">
        <NavItem href="#" text="top" />
        <NavItem href="#" text="about" />
        <NavItem href="#" text="work" />
        <NavItem href="#" text="contact" />
      </nav>
    </header>
  )
}

export default Header
