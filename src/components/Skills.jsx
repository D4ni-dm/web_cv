import habilidades from '../data/habilidades.js'

function Skills() {
    return (
        <section>
            <h2>Habilidades</h2>
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
        </section>
    )
}

export default Skills