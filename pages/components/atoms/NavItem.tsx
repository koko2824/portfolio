import React from 'react'

interface NavItemProps {
  text: string
  href: string
}

const NavItems = (props: NavItemProps) => {
  const style = "inline-block p-5 hover:text-green"
  return (
    <a href={props.href} className={style}>
      <span className="text-green">-</span> {props.text}
    </a>
  )
}

export default NavItems
