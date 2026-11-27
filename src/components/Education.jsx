import { useContext } from 'react'
import textos from '../data/textos.js'
import { IdiomaContext } from '../IdiomaContext.js'
import Section from './Section.jsx'
import formaciones from '../data/formacion.js'
import Card from './Card.jsx'

function Education() {
    const idioma = useContext(IdiomaContext)
    const t = textos[idioma]

    return (
        <Section id="formacion" titulo={t.formacion}>
            <ul className='space-y-6 border-l-2 border-blue-600/30 dark:border-blue-400/30 ml-3 pl-8'>
                {formaciones.map((formacion) => (
                    <Card key={formacion.id}>
                        <span aria-hidden="true" className="absolute -left-10.5 top-7 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-gray-50 dark:ring-gray-900" />
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{formacion.titulo[idioma]}</h3>
                        <p className='text-blue-600 font-medium dark:text-blue-400'>{formacion.centro}</p>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>{formacion.inicio} - {formacion.fin ?? t.enCurso}</p>
                    </Card>
                ))}
            </ul>
        </Section>
    )
}

export default Education