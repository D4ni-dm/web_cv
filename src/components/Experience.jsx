import experiencias from '../data/experiencia.js'

function Experience() {
    return (
        <section>
            <h2>Experiencia</h2>
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
        </section>
    )
}

export default Experience