import Section from './Section.jsx'
import experiencias from '../data/experiencia.js'

function Experience() {
    return (
        <Section titulo="Experiencia">
            <ul className='space-y-8'>
                {experiencias.map((experiencia) => (
                    <li key={experiencia.id}>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{experiencia.puesto}</h3>
                        <p className='text-blue-600 font-medium dark:text-blue-400'>{experiencia.empresa}</p>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>{experiencia.inicio} - {experiencia.fin}</p>
                        <ul className='mt-3 list-disc pl-5 space-y-1'>
                            {experiencia.tareas.map((tarea) => (
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