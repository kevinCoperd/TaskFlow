"use client"; // Este archivo es un componente cliente en Next.js.

import { useRouter } from "next/navigation"; // Importa el hook useRouter para la navegación en la aplicación.
import { FaEdit } from "react-icons/fa"; // Importa un icono de edición desde la librería react-icons.

export default function TaskCard({ task }) {
  const router = useRouter(); // Crea una instancia del router para manejar la navegación.

  // Si no hay una tarea (task), no renderiza nada.
  if (!task) {
    return null;
  }

  return (
    <div
      // Configura el estilo de la tarjeta de la tarea usando clases de Tailwind CSS.
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:cursor-pointer transition-all duration-300 border border-gray-200 hover:border-blue-400"
      // Define el comportamiento de la tarjeta cuando se hace clic. Navega a la página de edición de la tarea.
      onClick={() => {
        router.push("/task/edit/" + task.id);
      }}
    >
      {/* Contenedor flexible que alinea el título de la tarea y el icono de edición */}
      <div className="flex items-center justify-between mb-4">
        {/* Título de la tarea, que se trunca si es demasiado largo */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 truncate">
          {task.title || "Untitled task"}{" "}
          {/* Si no hay título, muestra "Untitled task" */}
        </h3>
        {/* Icono de edición que cambia de color al pasar el ratón */}
        <FaEdit className="text-blue-500 hover:text-blue-700 transition-colors duration-300" />
      </div>

      {/* Descripción de la tarea, limitada a 3 líneas y truncada si es demasiado larga */}
      <p
        className="text-gray-600 mb-4 overflow-hidden"
        style={{
          display: "-webkit-box", // Define que el contenedor es un cuadro flex vertical.
          WebkitLineClamp: 3, // Limita el texto a 3 líneas.
          WebkitBoxOrient: "vertical", // Orienta el cuadro flex de forma vertical.
          textOverflow: "ellipsis", // Agrega puntos suspensivos si el texto es demasiado largo.
          lineHeight: "1.5em", // Altura de la línea para calcular la altura máxima.
          maxHeight: "4.5em", // Establece la altura máxima (3 líneas * 1.5em).
        }}
      >
        {task.description || "No description"}{" "}
        {/* Si no hay descripción, muestra "No description" */}
      </p>

      {/* Fecha de creación de la tarea, formateada o "Date unknown" si no está disponible */}
      <p className="text-blue-500 text-sm font-semibold">
        {task.createdAt
          ? new Date(task.createdAt).toLocaleDateString() // Formatea la fecha si existe.
          : "Date unknown"}{" "}
        {/* Si no hay fecha, muestra "Date unknown" */}
      </p>
    </div>
  );
}
