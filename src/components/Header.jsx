function Header({ nombre, titulo }) {
    return (
        <header className='bg-linear-to-br from-blue-600 to-indigo-800 text-white'>
            <div className="max-w-3xl mx-auto px-6 py-24 text-center">
                <h1 className='text-4xl sm:text-6xl font-extrabold tracking-tight'>{nombre}</h1>
                <p className='mt-4 text-xl sm:text-2xl text-blue-100 font-medium'>{titulo}</p>
            </div>
        </header>
    )
}

export default Header