import Section from './Section.jsx'
import contactos from '../data/contactos.js'

function Contact() {
    return (
        <Section titulo="Contacto">
            <ul>
                {contactos.map((contacto) => (
                    <li key={contacto.id}>
                        <a href={contacto.url} target='_blank' rel='noreferrer'>{contacto.nombre}</a>
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export default Contact