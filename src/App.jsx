import './App.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'

function App() {
  return (
    <>
      <Header nombre="Daniel Díaz Millán" titulo="Desarrollador Web" />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
      </main>
    </>
  )

}

export default App