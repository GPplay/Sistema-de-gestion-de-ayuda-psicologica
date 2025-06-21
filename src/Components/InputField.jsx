const InputField = ({ label, value, onChange, type = "text" }) => (
  <div className="flex items-center justify-between gap-4 mb-3">
    <label className="w-1/3 font-semibold">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-2/3 px-3 py-2 border rounded-xl bg-white rounded-lg px-4 py-2"
    />
  </div>
)

export default InputField