import Header from './components/Header'
import SkillBar from './components/SkillBar'

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
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
      </div>
    </>
  )
}
