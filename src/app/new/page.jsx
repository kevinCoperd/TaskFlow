"use client"; // Indica que este componente se ejecuta en el lado del cliente

import { useRouter } from "next/navigation"; // Importa useRouter para manejar la navegación en Next.js
import { useEffect, useState } from "react";

// Componente NewPage para crear una nueva tarea
export default function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`/api/task/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/task", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

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
            onChange={(e) => setTitle(e.target.value)}
            value={title}
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
            onChange={(e) => setDescription(e.target.vale)}
            value={description}
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
