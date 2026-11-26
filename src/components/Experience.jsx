import { useContext } from 'react'
import textos from '../data/textos.js'
import { IdiomaContext } from '../IdiomaContext.js'
import Section from './Section.jsx'
import experiencias from '../data/experiencia.js'

function Experience() {
    const idioma = useContext(IdiomaContext)
    const t = textos[idioma]
    
    return (
        <Section titulo={t.experiencia}>
            <ul className='space-y-8'>
                {experiencias.map((experiencia) => (
                    <li key={experiencia.id}>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{experiencia.puesto[idioma]}</h3>
                        <p className='text-blue-600 font-medium dark:text-blue-400'>{experiencia.empresa}</p>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>{experiencia.inicio[idioma]} - {experiencia.fin[idioma]}</p>
                        <ul className='mt-3 list-disc pl-5 space-y-1'>
                            {experiencia.tareas[idioma].map((tarea) => (
                                <li key={tarea}>{tarea}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export default Experience