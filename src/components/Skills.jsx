import Section from './Section.jsx'
import habilidades from '../data/habilidades.js'

function Skills() {
    return (
        <Section titulo="Habilidades">
            <ul>
                {habilidades.map((categoria) => (
                    <li key={categoria.id}>
                        <h3>{categoria.seccion}</h3>
                        <ul>
                            {categoria.datos.map((habilidad) => (
                                <li key={habilidad}>{habilidad}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export default Skills