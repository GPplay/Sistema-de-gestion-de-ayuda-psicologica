const TextAreaField = ({ pregunta, value, setValue }) => (
  <div className="bg-gray-200 p-4 rounded-lg mb-4 shadow">
    <h3 className="font-semibold mb-2">{pregunta}</h3>
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Escriba su respuesta aquí..."
      className="w-2/3 px-3 py-2 border rounded-xl bg-white w-full p-2 rounded-lg "
      rows="4"
    />
  </div>
)

export default TextAreaField