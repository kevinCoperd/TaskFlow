"use client"; // Indica que este código debe ejecutarse en el cliente

import { useRouter } from "next/navigation"; // Importa useRouter para la navegación de Next.js
import { useEffect, useState } from "react"; // Importa useEffect y useState de React
import { FaTrash, FaSave } from "react-icons/fa"; // Importa iconos de react-icons para usar en botones

// Componente NewPage para crear o actualizar una tarea
export default function NewPage({ params }) {
  const router = useRouter(); // Hook para manejar la navegación
  const [title, setTitle] = useState(""); // Estado para almacenar el título de la tarea
  const [description, setDescription] = useState(""); // Estado para almacenar la descripción de la tarea

  // useEffect para cargar los datos de la tarea si `params.id` está presente
  useEffect(() => {
    if (params.id) {
      fetch(`/api/task/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title); // Actualiza el título con los datos recibidos
          setDescription(data.description); // Actualiza la descripción con los datos recibidos
        });
    }
  }, [params.id]); // Dependencia: se ejecuta cuando `params.id` cambia

  // Función para manejar el envío del formulario
  const onSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Define la URL y el método HTTP según si se está actualizando o creando una nueva tarea
    const url = params.id ? `/api/task/${params.id}` : "/api/task";
    const method = params.id ? "PUT" : "POST";

    // Envía la solicitud al servidor con los datos del formulario
    const res = await fetch(url, {
      method,
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/"); // Redirige a la página principal si la solicitud fue exitosa
      router.refresh(); // Refresca la página
    }
  };

  // Función para manejar la eliminación de la tarea
  const onDelete = async () => {
    if (params.id) {
      await fetch(`/api/task/${params.id}`, { method: "DELETE" });
      router.push("/"); // Redirige a la página principal
      router.refresh(); // Refresca la página
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg md:max-w-xl"
        onSubmit={onSubmit}
      >
        {/* Título del formulario */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {params.id ? "Update Task" : "New Task"}{" "}
          {/* Muestra "Update Task" si hay un ID, de lo contrario, muestra "New Task" */}
        </h2>

        {/* Campo para el título de la tarea */}
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Task title
          </label>
          <input
            type="text"
            id="title"
            className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)} // Actualiza el estado del título al cambiar el valor
            value={title}
          />
        </div>

        {/* Campo para la descripción de la tarea */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Task description
          </label>
          <textarea
            rows="4"
            id="description"
            className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            placeholder="Describe your task"
            onChange={(e) => setDescription(e.target.value)} // Actualiza el estado de la descripción al cambiar el valor
            value={description}
          ></textarea>
        </div>

        {/* Botones para enviar o eliminar la tarea */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-300 ease-in-out w-full"
          >
            <FaSave /> {/* Icono de guardar */}
            {params.id ? "Update" : "Create"}{" "}
            {/* Muestra "Update" si hay un ID, de lo contrario, muestra "Create" */}
          </button>

          {params.id && (
            <button
              type="button"
              onClick={onDelete} // Llama a la función onDelete cuando se hace clic
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-300 ease-in-out w-full"
            >
              <FaTrash /> {/* Icono de eliminar */}
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
