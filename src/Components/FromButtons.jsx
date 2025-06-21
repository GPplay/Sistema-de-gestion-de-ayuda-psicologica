const FormButtons = ({ onRegister, onUpload }) => (
  <div className="flex justify-around mt-6">
    <button
      onClick={onUpload}
      className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-900 transition flex items-center gap-2"
    >
      Subir Excel ⬆️
    </button>
    <button
      onClick={onRegister}
      className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-900 transition flex items-center gap-2"
    >
      Registrar
    </button>
  </div>
)

export default FormButtons