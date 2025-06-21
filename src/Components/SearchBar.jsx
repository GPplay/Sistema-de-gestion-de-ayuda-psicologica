const SearchBar = ({ onChange }) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 mb-6">
      <span className="text-xl mr-2">🔍</span>
      <input
        type="text"
        placeholder="Escribir Título De La Encuesta..."
        onChange={onChange}
        className="outline-none flex-1 bg-transparent"
      />
    </div>
  )
}

export default SearchBar