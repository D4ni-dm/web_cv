function ThemeToggle({ oscuro, cambiarTema }) {
    return (
        <button 
            onClick={cambiarTema} 
            aria-label={oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'} 
            className="fixed top-4 right-4 p-2 rounded-full text-2xl hover:bg-gray-200 dark:hover:bg-gray-800"
        >
            {oscuro ? '☀️' : '🌙'}
        </button>
    )
}

export default ThemeToggle