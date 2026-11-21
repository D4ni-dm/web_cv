import './App.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'

function App() {
  return (
    <>
      <Header nombre="Daniel Díaz Millán" titulo="Desarrollador Web" />
      <main>
        <About />
      </main>
    </>
  )

}

export default App