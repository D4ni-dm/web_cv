import Section from './Section.jsx'
import contactos from '../data/contactos.js'

function Contact() {
    return (
        <Section titulo="Contacto">
            <ul className='flex flex-wrap gap-4'>
                {contactos.map((contacto) => (
                    <li key={contacto.id}>
                        <a href={contacto.url} target='_blank' rel='noreferrer' className='inline-block px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors'>{contacto.nombre}</a>
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export default Contact