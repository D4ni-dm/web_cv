import { useContext } from 'react'
import textos from '../data/textos.js'
import { IdiomaContext } from '../IdiomaContext.js'
import Section from './Section.jsx'

function About() {
    const idioma = useContext(IdiomaContext)
    const t = textos[idioma]
    
    return (
        <Section titulo={t.sobreMi}>
            <div className='space-y-4 leading-relaxed'>
                <p>Soy un desarrollador web, con el ciclo superior de Desarrollo de Aplicaciones Web terminado, y actualmente cursando el de Desarrollo de Aplicaciones Multiplataforma.</p>
                <p>He aprendido sobre diferentes lenguajes de programación: JavaScript, Java, PHP...; y frameworks como React, con el cual disfruto especialmente.</p>
                <p>Busco mi primera oportunidad para poder trabajar en un equipo, seguir aprendiendo y crecer como desarrollador.</p>
            </div>
        </Section>
    )
}

export default About