import { useNavigate } from 'react-router-dom'

const HeaderBack = ({ title }) => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center mb-6">
      <button onClick={() => navigate(-1)} className="text-3xl mr-3">{'←'}</button>
      <h1 className="text-2xl font-bold text-teal-800">{title}</h1>
    </div>
  )
}

export default HeaderBack