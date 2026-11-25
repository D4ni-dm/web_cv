import { useState } from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import GitHubRepos from './components/GitHubRepos.jsx'

function App() {
  const [oscuro, setOscuro] = useState(() => {
    const guardado = localStorage.getItem('tema')

    if (guardado !== null) {
      return guardado === 'oscuro'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  function cambiarTema() {
    const nuevo = !oscuro
    setOscuro(nuevo)
    localStorage.setItem('tema', nuevo ? 'oscuro' : 'claro')
  }
  
  return (
    <div className={`min-h-screen bg-gray-50 text-gray-800 ${oscuro ? 'dark' : ''} dark:bg-gray-900 dark:text-gray-300`}>

      <ThemeToggle oscuro={oscuro} cambiarTema={cambiarTema} />

      <Header nombre="Daniel Díaz Millán" titulo="Desarrollador Web" />
      <main className='max-w-3xl mx-auto px-6 pb-16'>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <GitHubRepos />
        <Contact />
      </main>
    </div>
  )

}

export default App