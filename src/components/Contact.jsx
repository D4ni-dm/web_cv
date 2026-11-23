import contactos from '../data/contactos.js';

function Contact() {
    return (
        <section>
            <h2>Contacto</h2>
            <ul>
                {contactos.map((contacto) => (
                    <li key={contacto.id}>
                        <a href={contacto.url} target='_blank' rel='noreferrer'>{contacto.nombre}</a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Contact;