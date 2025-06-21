import { useNavigate } from "react-router-dom"

const CreateButton = ({ to, children }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (to) navigate(to)
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-teal-700 text-white px-6 py-3 rounded-full shadow hover:bg-teal-800 flex items-center gap-2"
    >
      {children || "Crear"}
    </button>
  )
}

export default CreateButton