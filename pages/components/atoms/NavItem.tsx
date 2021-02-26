import React from 'react'

interface NavItemProps {
  text: string
  href: string
}

const NavItems = (props: NavItemProps) => {
  return (
    <a href={props.href} className=" block p-5 hover:text-light-blue ">
      <span className=" text-light-blue">-</span> {props.text}
    </a>
  )
}

export default NavItems
