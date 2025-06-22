// const PreguntaCard = ({
//   pregunta,
//   index,
//   onChangeText,
//   onChangeOption,
//   onAddOption,
//   onRemoveOption,
//   onToggleType,
//   onDelete,
// }) => {
//   return (
//     <div className="bg-gray-50 border p-4 rounded-xl shadow relative">
//       <label className="block font-bold mb-1">Pregunta {index + 1}</label>
//       <input
//         type="text"
//         placeholder="Escribe la pregunta aquí"
//         value={pregunta.question}
//         onChange={(e) => onChangeText(pregunta.id, e.target.value)}
//         className="w-full mb-3 border px-3 py-2 rounded-lg"
//       />

//       {pregunta.type === 'options' ? (
//         <>
//           <div className="space-y-2 mb-3">
//             {pregunta.options.map((opt, i) => (
//               <div key={i} className="flex items-center gap-2">
//                 <input type="radio" disabled />
//                 <input
//                   type="text"
//                   value={opt}
//                   onChange={(e) => onChangeOption(pregunta.id, i, e.target.value)}
//                   className="flex-1 px-2 py-1 border rounded"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => onRemoveOption(pregunta.id, i)}
//                   className="text-red-500 text-lg font-bold"
//                 >
//                   ×
//                 </button>
//               </div>
//             ))}
//           </div>
//           <button
//             type="button"
//             onClick={() => onAddOption(pregunta.id)}
//             className="bg-gray-300 text-sm px-3 py-1 rounded hover:bg-gray-400"
//           >
//             Agregar opción
//           </button>
//         </>
//       ) : (
//         <textarea
//           disabled
//           rows={3}
//           className="w-full p-2 border rounded text-gray-500"
//           placeholder="Respuesta larga"
//         />
//       )}

//       <div className="mt-4 flex gap-4 justify-end">
//         <button
//           type="button"
//           onClick={() => onToggleType(pregunta.id)}
//           className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
//         >
//           Cambiar a {pregunta.type === 'options' ? 'texto' : 'opciones'}
//         </button>
//         <button
//           type="button"
//           onClick={() => onDelete(pregunta.id)}
//           className="text-sm text-red-600 hover:underline"
//         >
//           Eliminar pregunta
//         </button>
//       </div>
//     </div>
//   )
// }

// export default PreguntaCard