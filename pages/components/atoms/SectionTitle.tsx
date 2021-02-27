import React from 'react'

interface TitleProps {
  title: string
}

const SectionTitle = (props: TitleProps) => {
  const { title } = props
  return (
    <h2 className="text-white text-5xl mb-8">
      <span className="text-light-blue">- </span>
      {title}
      <span className="text-light-blue"> -</span>
    </h2>
  )
}

export default SectionTitle
