import { NextResponse } from "next/server"; // Importa NextResponse para manejar las respuestas HTTP
import { prisma, Prisma } from "@/libs/prisma"; // Importa Prisma y el cliente Prisma desde tu configuración

// Función para obtener una tarea específica por su ID
export async function GET(request, { params }) {
  // Busca una tarea en la base de datos usando Prisma con el ID que viene en los parámetros
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id), // Convierte el ID a número para asegurarse que sea el tipo correcto
    },
  });

  console.log(task); // Muestra la tarea encontrada en la consola

  // Retorna la tarea encontrada en formato JSON
  return NextResponse.json(task);
}

// Función para actualizar una tarea existente
export async function PUT(request, { params }) {
  const data = await request.json(); // Obtiene los datos enviados en la solicitud (nueva información de la tarea)

  // Actualiza la tarea en la base de datos usando Prisma
  const taskUpdate = await prisma.task.update({
    where: {
      id: Number(params.id), // Usa el ID de los parámetros para encontrar la tarea a actualizar
    },
    data: data, // Los nuevos datos que se utilizarán para actualizar la tarea
  });

  // Retorna la tarea actualizada en formato JSON
  return NextResponse.json(taskUpdate);
}

// Función para eliminar una tarea específica
export async function DELETE(request, { params }) {
  try {
    // Elimina la tarea de la base de datos usando Prisma
    const taskRemove = await prisma.task.delete({
      where: {
        id: Number(params.id), // Usa el ID de los parámetros para encontrar la tarea a eliminar
      },
    });

    // Retorna la tarea eliminada en formato JSON
    return NextResponse.json(taskRemove);
  } catch (error) {
    // En caso de error, retorna el mensaje de error
    return NextResponse.json(error.message);
  }
}
