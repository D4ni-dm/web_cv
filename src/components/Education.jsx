import formaciones from '../data/formacion.js'

function Education() {
    return (
        <section>
            <h2>Formación</h2>
            <ul>
                {formaciones.map((formacion) => (
                    <li key={formacion.id}>
                        <h3>{formacion.titulo}</h3>
                        <p>{formacion.centro}</p>
                        <p>{formacion.inicio} - {formacion.fin}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Education