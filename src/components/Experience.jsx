import Section from './Section.jsx'
import experiencias from '../data/experiencia.js'

function Experience() {
    return (
        <Section titulo="Experiencia">
            <ul>
                {experiencias.map((experiencia) => (
                    <li key={experiencia.id}>
                        <h3>{experiencia.puesto}</h3>
                        <p>{experiencia.empresa}</p>
                        <p>{experiencia.inicio} - {experiencia.fin}</p>
                        <ul>
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