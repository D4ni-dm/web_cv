import { useContext } from 'react'
import textos from '../data/textos.js'
import { IdiomaContext } from '../IdiomaContext.js'
import Section from './Section.jsx'

function About() {
    const idioma = useContext(IdiomaContext)
    const t = textos[idioma]
    
    return (
        <Section id="sobre-mi" titulo={t.sobreMi}>
            <div className='space-y-4 leading-relaxed'>
                {t.sobreMiTexto.map((parrafo) => (
                    <p key={parrafo}>{parrafo}</p>
                ))}
            </div>
        </Section>
    )
}

export default About