import { useState } from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'

function App() {
  const [oscuro, setOscuro] = useState(false)
  
  return (
    <div className={`min-h-screen bg-gray-50 text-gray-800 ${oscuro ? 'dark' : ''} dark:bg-gray-900 dark:text-gray-300`}>

      <ThemeToggle oscuro={oscuro} cambiarTema={() => setOscuro(!oscuro)} />

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