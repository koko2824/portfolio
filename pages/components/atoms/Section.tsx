import React from 'react'

interface sectionProps {
  style?: string
  children: React.ReactNode
}

const Section = (props: sectionProps) => {
  const { style, children } = props

  return (
    <section className={`${style}  w-full h-screen text-white `}>
      <div>{children}</div>
    </section>
  )
}

export default Section
