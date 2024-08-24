import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

// Función para cargar las tareas desde la base de datos
async function loadTask() {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export const dynamic = "force-dynamic";

// Componente principal de la página
async function HomePage() {
  const tasks = await loadTask();

  return (
    <section className="container mx-auto px-4 py-6 min-h-[80vh] flex flex-col">
      <div className="flex-grow">
        {/* Título de la página */}
        <header className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-2">
            Tareas Pendientes
          </h1>
          <p className="text-gray-300 mb-4">
            {tasks.length > 0
              ? "Aquí puedes visualizar todas las tareas que tienes pendientes. Da clic en cualquier tarea para obtener más detalles."
              : "No tienes tareas pendientes. ¡Comienza creando una nueva tarea!"}
          </p>
          <Link
            href="/new"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            <PlusCircle className="mr-2" size={20} />
            {tasks.length > 0 ? "Crear Nueva Tarea" : "Crear Tu Primera Tarea"}
          </Link>
        </header>

        {/* Grid para las tarjetas de tareas */}
        {tasks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <TaskCard task={task} key={task.id} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-400 text-xl">
              ¡Estás al día! No tienes tareas pendientes.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default HomePage;
