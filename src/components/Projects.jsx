import { useContext } from 'react'
import textos from '../data/textos.js'
import { IdiomaContext } from '../IdiomaContext.js'
import Tag from './Tag.jsx'
import Section from './Section.jsx'
import proyectos from '../data/proyectos.js'

function Projects() {
    const idioma = useContext(IdiomaContext)
    const t = textos[idioma]

    return (
        <Section titulo={t.proyectos}>
            <ul className='space-y-6'>
                {proyectos.map((proyecto) => (
                    <li key={proyecto.id}>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{proyecto.nombre}</h3>
                        <p className='mt-2 leading-relaxed'>{proyecto.descripcion}</p>
                        <ul className='flex flex-wrap gap-2 mt-3'>
                            {proyecto.tecnologias.map((tecnologia) => (
                                <Tag key={tecnologia}>{tecnologia}</Tag>
                            ))}
                        </ul>
                        <div className='mt-4 flex gap-4'>
                            <a href={proyecto.repo} target='_blank' rel='noreferrer' className='text-blue-600 font-medium hover:underline dark:text-blue-400'>{t.verRepo}</a>
                            {proyecto.demo && <a href={proyecto.demo} target='_blank' rel='noreferrer' className='text-blue-600 font-medium hover:underline dark:text-blue-400'>{t.verDemo}</a>}
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export default Projects