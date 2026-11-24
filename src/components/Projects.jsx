import Section from './Section.jsx'
import proyectos from '../data/proyectos.js'

function Projects() {
    return (
        <Section titulo="Proyectos">
            <ul>
                {proyectos.map((proyecto) => (
                    <li key={proyecto.id}>
                        <h3>{proyecto.nombre}</h3>
                        <p>{proyecto.descripcion}</p>
                        <ul>
                            {proyecto.tecnologias.map((tecnologia) => (
                                <li key={tecnologia}>{tecnologia}</li>
                            ))}
                        </ul>
                        <a href={proyecto.repo} target='_blank' rel='noreferrer'>Ver repositorio en GitHub</a>
                        {proyecto.demo && <a href={proyecto.demo} target='_blank' rel='noreferrer'>Ver demo</a>}
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export default Projects