import Header from './components/Header'
import SkillBar from './components/SkillBar'
import Button from './components/atoms/Button'
import Section from './components/atoms/Section'

export default function Home() {
  return (
    <>
      <Header />
      <div className="container w-8/12 mx-auto tracking-wide text-xl">
        <Section style="flex items-center">
          <p className="text-light-blue pb-7">Hi! my name is </p>
          <h1 className="text-5xl pb-1 tracking-wider">koki oshima : )</h1>
          <h1 className="text-5xl pb-7 tracking-wider">I’m a fledgling web engineer. </h1>
          <p>I’m a high school student living in Japan!</p>
          <p>I’m studying to become a web developer.</p>
          <p>I’m not very good at English, so please let me know if I’m wrong.</p>
          <Button text="Try To Talk" style="mt-7" />
        </Section>
        <Section>
          <SkillBar
            rows={[
              { title: 'HTML', percent: 90 },
              { title: 'TypeScript', percent: 50 },
              { title: 'Node.js', percent: 70 },
              { title: 'React.js', percent: 60 },
              { title: 'tailwindcss', percent: 70 },
              { title: 'Golang', percent: 70 },
              { title: 'Firebase', percent: 60 },
            ]}
          />
        </Section>
      </div>
    </>
  )
}
