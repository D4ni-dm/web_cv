function LanguageToggle({ idioma, cambiarIdioma }) {
    return (
        <button
            onClick={cambiarIdioma}
            aria-label={idioma === 'es' ? 'Switch to English' : 'Cambiar a español'}
            className="fixed top-4 right-16 w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold bg-white/20 hover:bg-white/30 text-white backdrop-blur"
        >
            {idioma === 'es' ? 'EN' : 'ES'}
        </button>
    )
}

export default LanguageToggle