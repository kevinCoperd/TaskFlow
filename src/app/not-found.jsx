"use client"; // Esto indica que el componente es un Client Component

import React from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center  text-white px-4 h-[calc(100vh-7rem)]">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-4 text-red-500">
        404
      </h1>
      <h2 className="text-xl md:text-3xl font-semibold mb-6 text-center">
        Oops! La página que buscas no fue encontrada.
      </h2>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        Es posible que la página haya sido eliminada, cambiada de nombre o esté
        temporalmente fuera de servicio.
      </p>
      <button
        onClick={() => router.push("/")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm md:text-base"
      >
        Volver al Inicio
      </button>
    </div>
  );
}
