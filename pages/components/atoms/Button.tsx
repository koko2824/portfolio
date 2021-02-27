import React from 'react'

interface ButtonProps {
  text: string
  href?: string
  style?: string
}

const Button = (props: ButtonProps) => {
  const { text, href, style } = props
  const buttonStyle =
    'inline-flex px-3 py-2 text-light-blue text-center border border-light-blue rounded'
  return <span className={`${style} ${buttonStyle}`}>{text}</span>
}

export default Button
