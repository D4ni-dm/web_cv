import { useContext } from 'react'
import textos from '../data/textos.js'
import { IdiomaContext } from '../IdiomaContext.js'
import { useEffect, useState } from "react"
import Section from "./Section.jsx"
import Tag from "./Tag.jsx"
import proyectos from '../data/proyectos.js'
import Card from './Card.jsx'

function GitHubRepos() {
    const [repos, setRepos] = useState([])

    const [cargando, setCargando] = useState(true)

    const [error, setError] = useState(null)

    useEffect(() => {
        async function cargar() {
            try {
                const respuesta = await fetch('https://api.github.com/users/D4ni-dm/repos?sort=updated')

                if (!respuesta.ok) {
                    throw new Error(`GitHub respondió con el código ${respuesta.status}`)
                }
                const datos = await respuesta.json()
                setRepos(datos)
            } catch (e) {
                setError(e.message)
            } finally {
                setCargando(false)
            }
        }
        cargar()
    }, [])

    const idioma = useContext(IdiomaContext)
    const t = textos[idioma]

    return (
        <Section titulo={t.repositorios}>
            {cargando && <p>{t.cargando}</p>}
            {error && <p className="text-red-600 dark:text-red-400">{t.errorRepos} {error}</p>}
            {!cargando && !error && (
                <ul className="space-y-6">  
                    {repos.filter((repo) => !repo.fork && !proyectos.some((proyecto) => proyecto.repo === repo.html_url)).map((repo) => (
                        <Card key={repo.id}>
                            <h3 className="text-lg font-semibold">
                                <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
                                    {repo.name}
                                </a>
                            </h3>
                            {repo.description && <p className="mt-1">{repo.description}</p>}
                            {repo.language && (
                                <ul className="mt-2 flex gap-2">
                                    <Tag>{repo.language}</Tag>
                                </ul>
                            )}
                        </Card>
                    ))}
                </ul>
            )}
        </Section>
    )
}

export default GitHubRepos