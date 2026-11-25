import Tag from './Tag.jsx'
import Section from './Section.jsx'
import proyectos from '../data/proyectos.js'

function Projects() {
    return (
        <Section titulo="Proyectos">
            <ul className='space-y-6'>
                {proyectos.map((proyecto) => (
                    <li key={proyecto.id}>
                        <h3 className='text-lg font-semibold text-gray-900'>{proyecto.nombre}</h3>
                        <p className='mt-2 leading-relaxed'>{proyecto.descripcion}</p>
                        <ul className='flex flex-wrap gap-2 mt-3'>
                            {proyecto.tecnologias.map((tecnologia) => (
                                <Tag key={tecnologia}>{tecnologia}</Tag>
                            ))}
                        </ul>
                        <div className='mt-4 flex gap-4'>
                            <a href={proyecto.repo} target='_blank' rel='noreferrer' className='text-blue-600 font-medium hover:underline'>Ver repositorio en GitHub</a>
                            {proyecto.demo && <a href={proyecto.demo} target='_blank' rel='noreferrer' className='text-blue-600 font-medium hover:underline'>Ver demo</a>}
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export default Projects