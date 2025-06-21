const RadioGroupField = ({ pregunta, name, selected, setSelected, opciones }) => (
  <div className="bg-gray-200 p-4 rounded-lg mb-4 shadow">
    <h3 className="font-semibold mb-2">{pregunta}</h3>
    {opciones.map((opcion) => (
      <label key={opcion} className="block mb-1">
        <input
          type="radio"
          name={name}
          value={opcion}
          checked={selected === opcion}
          onChange={(e) => setSelected(e.target.value)}
          className="mr-2"
        />
        {opcion}
      </label>
    ))}
  </div>
)

export default RadioGroupField