"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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

    const url = params.id ? `/api/task/${params.id}` : "/api/task";
    const method = params.id ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    }
  };

  const onDelete = async () => {
    if (params.id) {
      await fetch(`/api/task/${params.id}`, { method: "DELETE" });
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg md:max-w-xl"
        onSubmit={onSubmit}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {params.id ? "Actualizar Tarea" : "Nueva Tarea"}
        </h2>

        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Título de la tarea
          </label>
          <input
            type="text"
            id="title"
            className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Descripción de la tarea
          </label>
          <textarea
            rows="4"
            id="description"
            className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            placeholder="Describe tu tarea"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-300 ease-in-out w-full"
          >
            <FaSave />
            {params.id ? "Actualizar" : "Crear"}
          </button>

          {params.id && (
            <button
              type="button"
              onClick={onDelete}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-300 ease-in-out w-full"
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
