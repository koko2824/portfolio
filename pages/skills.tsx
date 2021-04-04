import React from 'react'
import type { NextPage } from 'next'
import Layout from '../components/layout'
import { SkillList } from '../components/skills'
import type { Skill } from '../models/skill'

const skills: Skill[] = [
  { name: 'HTML/CSS', percent: 90, year: 2 },
  { name: 'JavaScript', percent: 90, year: 2 },
  { name: 'Python', percent: 80, year: 1 },
  { name: 'TypeScript', percent: 70, year: 0 },
  { name: 'Go', percent: 70, year: 0 },
  { name: 'React', percent: 70, year: 0 },
  { name: 'TailwindCSS', percent: 70, year: 0 },
  { name: 'Firebase', percent: 70, year: 0 },
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
