const InfoCard = ({ label, value }) => (
  <div className="bg-rose-50 px-4 py-6 rounded-lg text-center shadow w-48">
    <h3 className="text-teal-700 font-bold text-lg mb-1">{label}</h3>
    <p className="text-2xl font-semibold">{value}</p>
  </div>
)

export default InfoCard