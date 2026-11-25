function Tag({ children }) {
    return (
        <li className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            {children}
        </li>
    )
}

export default Tag