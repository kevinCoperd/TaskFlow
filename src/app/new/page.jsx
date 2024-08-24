"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// Importa iconos desde FontAwesome o un paquete similar
import { FaTrash, FaSave } from "react-icons/fa";

export default function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/task/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, [params.id]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
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
      const res = await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
    }

    router.push("/");
    router.refresh();
  };

  const onDelete = async () => {
    if (params.id) {
      await fetch(`/api/task/${params.id}`, {
        method: "DELETE",
      });
      router.push("/");
      router.refresh();
    }
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

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 w-full transition duration-300 ease-in-out"
          >
            <FaSave />
            {params.id ? "Actualizar" : "Crear"}
          </button>

          {params.id && (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 ml-4 transition duration-300 ease-in-out"
              type="button"
              onClick={onDelete}
            >
              <FaTrash />
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
