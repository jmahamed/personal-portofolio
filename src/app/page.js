import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


export default function Home() {
  return (
    <main>
    <div className="blur-bg1"></div>
    <div className="blur-bg2"></div>
    <Navbar />
    <Hero />
    <Projects />
    <Contact />
    </main>
  )
}
