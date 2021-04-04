import React from 'react'
import { cx, css, keyframes } from '@emotion/css'
import type { Skill as SkillType } from '../../models/skill'

interface Props {
  skills: SkillType[]
}

export const SkillList: React.VFC<Props> = (props) => {
  const { skills } = props
  const barAnimation = keyframes` from {width: 0%};`

  return (
    <div className="w-full mt-10">
      {skills.map((item, i) => (
        <div
          className={cx('w-1/2 py-8 inline-block tracking-wider', i % 2 === 0 ? ' pr-10' : 'pl-10')}
        >
          <div className="flex">
            <p className="text-2xl mb-2 w-1/2">
              {item.name}
              <span className="text-base font-light text-gray ml-4">{item.year}YEAR</span>
            </p>
            <p className="text-2xl ml-auto">{item.percent}%</p>
          </div>
          <div className="">
            <div className="relative -top-1 left-0 h-px">
              <div
                className={cx(
                  `relative top-0 left-0 h-px w-${item.percent / 10}/10 bg-primary-main`,
                  css`
                    animation: ${barAnimation} 1.5s ease;
                    animation-delay: 0.5s;
                  `
                )}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
