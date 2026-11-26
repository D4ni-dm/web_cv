function LanguageToggle({ idioma, cambiarIdioma }) {
    return (
        <button
            onClick={cambiarIdioma}
            aria-label={idioma === 'es' ? 'Switch to English' : 'Cambiar a español'}
            className="fixed top-4 right-16 p-2 rounded-full text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-800"
        >
            {idioma === 'es' ? 'EN' : 'ES'}
        </button>
    )
}

export default LanguageToggle