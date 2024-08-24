"use client"; // Indica que este componente se ejecuta en el lado del cliente

import { useRouter } from "next/navigation"; // Importa useRouter para manejar la navegación en Next.js
import { useEffect, useState } from "react";

// Componente NewPage para crear una nueva tarea o actualizar una existente
export default function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Carga los datos de la tarea si se está editando
  useEffect(() => {
    if (params.id) {
      fetch(`/api/task/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, [params.id]); // Dependencia del id para cargar solo al actualizar

  const onSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      // Si hay un id, actualiza la tarea existente
      const res = await fetch(`/api/task/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } else {
      // Si no hay un id, crea una nueva tarea
      const res = await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
    }

    // Refresca la página para ver los cambios sin actualizar manualmente
    router.push("/"); // Redirige a la página principal
    router.refresh(); // Fuerza un refresco de los datos
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form
        className="bg-slate-800 p-10 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={onSubmit}
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
            onChange={(e) => setTitle(e.target.value)}
            value={title}
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
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300 ease-in-out"
        >
          {params.id ? "Actualizar" : "Crear"}
        </button>

        {params.id && (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded ml-4"
            type="button"
          >
            Eliminar
          </button>
        )}
      </form>
    </div>
  );
}
