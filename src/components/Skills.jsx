import Tag from './Tag.jsx'
import Section from './Section.jsx'
import habilidades from '../data/habilidades.js'

function Skills() {
    return (
        <Section titulo="Habilidades">
            <ul className='space-y-6'>
                {habilidades.map((categoria) => (
                    <li key={categoria.id}>
                        <h3 className='font-semibold text-gray-900 mb-2 dark:text-white'>{categoria.seccion}</h3>
                        <ul className='flex flex-wrap gap-2'>
                            {categoria.datos.map((habilidad) => (
                                <Tag key={habilidad}>{habilidad}</Tag>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export default Skills