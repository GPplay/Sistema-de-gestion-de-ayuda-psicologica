import { Link } from "react-router-dom"
import { logout } from "../utils/auth"

const Sidebar = () => {
  return (
    <aside className="w-60 bg-teal-700 text-white h-screen p-4 flex flex-col justify-between">
      <div>
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="w-20 h-20 rounded-full bg-white text-teal-700 flex items-center justify-center text-4xl font-bold">
            R
          </div>
          <div className="text-center">
            <p className="text-sm">Rector:</p>
            <p className="font-semibold">María Bonfante</p>
          </div>
        </div>
        <nav className="space-y-2">
          <Link to="/rector/dashboard" className="block hover:bg-teal-800 px-3 py-2 rounded">Home</Link>
          <Link to="rector/dashboard/registro/estudiante" className="block hover:bg-teal-800 px-3 py-2 rounded">Registrar Estudiante</Link>
        </nav>
      </div>
      <button onClick={logout} className="bg-red-600 hover:bg-red-700 w-full py-2 rounded text-white mt-8">
        Exit
      </button>
    </aside>
  )
}

export default Sidebar