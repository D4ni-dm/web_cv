function Card({ children }) {
    return (
        <li className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
            {children}
        </li>
    )
}

export default Card