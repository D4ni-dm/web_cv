import { useEffect, useState } from "react"
import Section from "./Section.jsx"
import Tag from "./Tag.jsx"

function GitHubRepos() {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        async function cargar() {
            const respuesta = await fetch('https://api.github.com/users/D4ni-dm/repos?sort=updated')
            const datos = await respuesta.json()

            setRepos(datos)
        }
        cargar()
    }, [])

    return (
        <Section titulo="Repositorios de GitHub">
            <ul className="space-y-6">
                {repos.filter((repo) => !repo.fork).map((repo) => (
                    <li key={repo.id}>
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
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export default GitHubRepos