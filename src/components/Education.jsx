import { useContext } from 'react'
import textos from '../data/textos.js'
import { IdiomaContext } from '../IdiomaContext.js'
import Section from './Section.jsx'
import formaciones from '../data/formacion.js'

function Education() {
    const idioma = useContext(IdiomaContext)
    const t = textos[idioma]

    return (
        <Section titulo={t.formacion}>
            <ul className='space-y-8'>
                {formaciones.map((formacion) => (
                    <li key={formacion.id}>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{formacion.titulo[idioma]}</h3>
                        <p className='text-blue-600 font-medium dark:text-blue-400'>{formacion.centro}</p>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>{formacion.inicio} - {formacion.fin ?? t.enCurso}</p>
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export default Education