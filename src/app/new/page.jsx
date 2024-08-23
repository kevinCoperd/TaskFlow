"use client"; // Indica que este componente se ejecuta en el lado del cliente

import { useRouter } from "next/navigation"; // Importa useRouter para manejar la navegación en Next.js

// Componente NewPage para crear una nueva tarea
export default function NewPage() {
  const router = useRouter(); // Hook para manejar la navegación después de enviar el formulario

  // Función que se ejecuta cuando el formulario se envía
  const onSubmit = async (e) => {
    e.preventDefault(); // Previene la recarga de la página al enviar el formulario

    // Captura los valores del formulario
    const title = e.target.title.value;
    const description = e.target.description.value;

    // Envío de los datos a la API /api/task para crear una nueva tarea en la base de datos
    const res = await fetch("/api/task", {
      method: "POST", // Indica que es una solicitud POST para crear un nuevo recurso
      body: JSON.stringify({ title, description }), // Convierte los datos a JSON
      headers: {
        "Content-Type": "application/json", // Indica que el contenido es de tipo JSON
      },
    });

    const data = await res.json(); // Recibe la respuesta de la API y la convierte a JSON
    console.log(data); // Muestra la respuesta en la consola (opcional)

    // Navega de vuelta a la página principal una vez que se haya creado la tarea
    router.push("/");
  };

  // JSX del componente que representa el formulario
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form
        className="bg-slate-800 p-10 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={onSubmit} // Asigna la función onSubmit al envío del formulario
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Nueva Tarea
        </h2>

        {/* Campo de texto para el título */}
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
          />
        </div>

        {/* Área de texto para la descripción */}
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
          ></textarea>
        </div>

        {/* Botón para enviar el formulario */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300 ease-in-out"
        >
          Crear
        </button>
      </form>
    </div>
  );
}
