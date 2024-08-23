import { prisma } from "@/libs/prisma";

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
        <h1 className="text-4xl font-bold text-white mb-2">
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
          <div
            key={task.id}
            className="bg-slate-900 p-5 rounded-lg shadow-lg hover:bg-slate-800 hover:cursor-pointer transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-2">{task.title}</h3>
            <p className="text-gray-400 mb-4">{task.description}</p>
            <p className="text-gray-500 text-sm">
              {new Date(task.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomePage;
