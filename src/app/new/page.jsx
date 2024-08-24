"use client"; // Indica que este componente se ejecuta en el lado del cliente

import { useRouter } from "next/navigation"; // Importa useRouter para manejar la navegación en Next.js
import { useEffect, useState } from "react"; // Importa useEffect y useState de React para manejar estado y efectos secundarios
import { FaTrash, FaSave } from "react-icons/fa"; // Importa iconos desde react-icons/fa (FontAwesome)

export default function NewPage({ params }) {
  const router = useRouter(); // Inicializa el enrutador de Next.js para redireccionar
  const [title, setTitle] = useState(""); // Estado para almacenar el título de la tarea
  const [description, setDescription] = useState(""); // Estado para almacenar la descripción de la tarea

  useEffect(() => {
    if (params.id) {
      // Si hay un id en los parámetros, significa que estamos editando una tarea existente
      fetch(`/api/task/${params.id}`) // Hace una solicitud para obtener los datos de la tarea
        .then((res) => res.json()) // Convierte la respuesta en JSON
        .then((data) => {
          setTitle(data.title); // Establece el título de la tarea
          setDescription(data.description); // Establece la descripción de la tarea
        });
    }
  }, [params.id]); // Solo se ejecuta cuando cambia el id

  const onSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recarga de página)

    if (params.id) {
      // Si hay un id, actualiza la tarea existente
      const res = await fetch(`/api/task/${params.id}`, {
        method: "PUT", // Método para actualizar la tarea
        body: JSON.stringify({ title, description }), // Datos de la tarea en formato JSON
        headers: {
          "Content-Type": "application/json", // Tipo de contenido JSON
        },
      });
      const data = await res.json(); // Convierte la respuesta en JSON
      console.log(data); // Muestra los datos en la consola (opcional)
    } else {
      // Si no hay un id, crea una nueva tarea
      const res = await fetch("/api/task", {
        method: "POST", // Método para crear una nueva tarea
        body: JSON.stringify({ title, description }), // Datos de la tarea en formato JSON
        headers: {
          "Content-Type": "application/json", // Tipo de contenido JSON
        },
      });
      const data = await res.json(); // Convierte la respuesta en JSON
    }

    router.push("/"); // Redirige a la página principal después de la operación
    router.refresh(); // Fuerza un refresco de los datos en la página principal
  };

  const onDelete = async () => {
    if (params.id) {
      // Si hay un id, elimina la tarea existente
      await fetch(`/api/task/${params.id}`, {
        method: "DELETE", // Método para eliminar la tarea
      });
      router.push("/"); // Redirige a la página principal después de eliminar
      router.refresh(); // Fuerza un refresco de los datos en la página principal
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form
        className="bg-slate-800 p-10 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={onSubmit} // Maneja el evento de envío del formulario
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          {params.id ? "Actualizar Tarea" : "Nueva Tarea"}
        </h2>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="font-bold text-sm text-white block mb-1"
          >
            Título de la tarea
          </label>
          <input
            type="text"
            id="title"
            className="border border-gray-400 p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)} // Actualiza el estado del título
            value={title} // Valor del campo del formulario
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="font-bold text-sm text-white block mb-1"
          >
            Descripción de la tarea
          </label>
          <textarea
            rows="3"
            id="description"
            className="border border-gray-400 p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Describe tu tarea"
            onChange={(e) => setDescription(e.target.value)} // Actualiza el estado de la descripción
            value={description} // Valor del campo del formulario
          ></textarea>
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 w-full transition duration-300 ease-in-out"
          >
            <FaSave /> {/* Icono de guardar */}
            {params.id ? "Actualizar" : "Crear"}{" "}
            {/* Texto del botón basado en si estamos editando o creando */}
          </button>

          {params.id && (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 ml-4 transition duration-300 ease-in-out"
              type="button"
              onClick={onDelete} // Maneja el evento de clic para eliminar
            >
              <FaTrash /> {/* Icono de eliminar */}
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
