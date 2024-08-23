import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";
// Función para cargar las tareas desde la base de datos
async function loadTask() {
  return await prisma.task.findMany();
}

// Componente principal de la página
async function HomePage() {
  const tasks = await loadTask();

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Título de la página */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-2">
          Tareas Pendientes
        </h1>
        <p className="text-gray-300">
          Aquí puedes visualizar todas las tareas que tienes pendientes. Da clic
          en cualquier tarea para obtener más detalles.
        </p>
      </header>

      {/* Grid para las tarjetas de tareas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
