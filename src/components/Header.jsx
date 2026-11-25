function Header({ nombre, titulo }) {
    return (
        <header className='max-w-3xl mx-auto px-6 py-16 text-center'>
            <h1 className='text-5xl font-bold tracking-tight text-gray-900 dark:text-white'>{nombre}</h1>
            <p className='mt-3 text-xl text-blue-600 font-medium dark:text-blue-400'>{titulo}</p>
        </header>
    )
}

export default Header