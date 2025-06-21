const CreateButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 bg-teal-700 text-white px-6 py-3 rounded-full shadow hover:bg-teal-800 flex items-center gap-2"
  >
    Crear encuesta ✈️
  </button>
)

export default CreateButton