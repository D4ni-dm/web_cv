import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-800'>
      <Header nombre="Daniel Díaz Millán" titulo="Desarrollador Web" />
      <main className='max-w-3xl mx-auto px-6 pb-16'>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )

}

export default App