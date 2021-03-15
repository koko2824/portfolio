import React from 'react'
import { cx, css, keyframes } from '@emotion/css'
import Layout from '../components/layout'

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', percent: 90, year: 2 },
    { name: 'JavaScript', percent: 90, year: 2 },
    { name: 'Python', percent: 80, year: 1 },
    { name: 'TypeScript', percent: 70, year: 0 },
    { name: 'Go', percent: 70, year: 0 },
    { name: 'React', percent: 70, year: 0 },
    { name: 'TailwindCSS', percent: 70, year: 0 },
    { name: 'Firebase', percent: 70, year: 0 },
  ]

  const barAnimation = keyframes` from {width: 0%};`

  return (
    <Layout>
      <div className="h-screen py-32">
        <div className="mt-10">
          <h3 className="text-4xl font-bold tracking-wider">My Skills</h3>
          <p className="text-gray text-lg py-2">
            Web Frontendを中心にWeb系の技術を習得しています。
          </p>
        </div>
        <div className="w-full mt-10">
          {skills.map((item, i) => (
            <div
              className={cx(
                'w-1/2 py-8 inline-block tracking-wider',
                i % 2 === 0 ? ' pr-10' : 'pl-10'
              )}
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
                        animation: ${barAnimation} 2s ease;
                        animation-delay: 0.5s;
                      `
                    )}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Skills
