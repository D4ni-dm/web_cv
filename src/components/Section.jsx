function Section({ titulo, children }) {
    return (
        <section className='mt-12'>
            <h2 className='text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-6 dark:text-white dark:border-blue-400'>{titulo}</h2>
            {children}
        </section>
    )
}

export default Section