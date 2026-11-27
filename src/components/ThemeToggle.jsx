function ThemeToggle({ oscuro, cambiarTema }) {
    return (
        <button 
            onClick={cambiarTema} 
            aria-label={oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'} 
            className="fixed top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-xl bg-white/20 hover:bg-white/30 text-white backdrop-blur"
        >
            {oscuro ? '☀️' : '🌙'}
        </button>
    )
}

export default ThemeToggle