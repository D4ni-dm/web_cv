import './App.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'

function App() {
  return (
    <>
      <Header nombre="Daniel Díaz Millán" titulo="Desarrollador Web" />
      <main>
        <About />
        <Education />
      </main>
    </>
  )

}

export default App