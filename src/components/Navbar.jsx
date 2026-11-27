import { useContext } from "react"
import { IdiomaContext } from "../IdiomaContext.js"
import textos from "../data/textos.js"

const secciones = [
    { id: 'sobre-mi', clave: 'sobreMi' },
    { id: 'experiencia', clave: 'experiencia' },
    { id: 'formacion', clave: 'formacion' },
    { id: 'habilidades', clave: 'habilidades' },
    { id: 'proyectos', clave: 'proyectos' },
    { id: 'contacto', clave: 'contacto' },
]

function Navbar() {
    const idioma = useContext(IdiomaContext)
    const t = textos[idioma]

    return (
        <nav className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
            <ul className="max-w-3xl mx-auto px-6 h-14 flex items-center gap-6 text-sm font-medium">
                {secciones.map((seccion) => (
                    <li key={seccion.id}>
                        <a 
                            href={`#${seccion.id}`}
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {t[seccion.clave]}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar