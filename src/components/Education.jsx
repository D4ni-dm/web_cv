import Section from './Section.jsx'
import formaciones from '../data/formacion.js'

function Education() {
    return (
        <Section titulo="Formación">
            <ul>
                {formaciones.map((formacion) => (
                    <li key={formacion.id}>
                        <h3>{formacion.titulo}</h3>
                        <p>{formacion.centro}</p>
                        <p>{formacion.inicio} - {formacion.fin}</p>
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export default Education