import React from 'react'
import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { SkillList } from '../components/skills'
import type { Skill } from '../models/skill'

const skills: Skill[] = [
  { name: 'Python', percent: 60, start: '2019/12', end: '2020/8' },
  { name: 'TypeScript', percent: 80, start: '2021/1' },
  { name: 'Go', percent: 70, start: '2020/9', end: '2021/3' },
  { name: 'React', percent: 80, start: '2020/11' },
  { name: 'TailwindCSS', percent: 80, start: '2021/1' },
  { name: 'Firebase', percent: 70, start: '2021/1', end: '2022/2' },
]

const Skills: NextPage<{ items: Skill[] }> = ({ items = skills }) => {
  return (
    <Layout>
      <div className="h-screen py-32">
        <div className="mt-10">
          <h3 className="text-4xl font-bold tracking-wider">My Skills</h3>
          <p className="text-gray text-lg py-2">
            Web Frontendを中心にWeb系の技術を習得しています。
          </p>
        </div>
        <SkillList skills={items} />
      </div>
    </Layout>
  )
}

export default Skills
