import React from 'react'
import SectionTitle from './atoms/SectionTitle'

interface skillRow {
  rows: {
    title: string
    percent: number
  }[]
  style?: string
}

const SkillBar = (props: skillRow) => {
  const { rows, style } = props
  const textStyle = 'w-1/10 py-2 text-center border border-light-blue rounded'
  const circles = new Array(11).fill(<div className={` w-2 h-2 rounded-full bg-dark-white `}></div>)

  return (
    <section className={style ? style : 'w-full'}>
      <div className="container text-white mx-auto">
        <SectionTitle title="My Skills" />
        {rows.map((row, i) => (
          <div className="container flex justify-between items-center py-3" key={i}>
            <div className={textStyle}>{row.title}</div>
            <div className=" h-px w-9/12 bg-light-black static z-0">
              <div
                className={`h-px w-${row.percent / 10}/10 bg-light-blue relative top-0 left-0 z-30`}
              ></div>
              <div className="relative -top-1 left-0 z-50">
                <div className="flex justify-between">{circles}</div>
              </div>
            </div>
            <div className={`italic ${textStyle}`}>{row.percent}%</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillBar
