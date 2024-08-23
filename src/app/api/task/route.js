import { NextResponse } from "next/server"; // Importa NextResponse para manejar las respuestas HTTP en Next.js
import { prisma } from "@/libs/prisma"; // Importa Prisma desde la configuración para interactuar con la base de datos

// Función para obtener todas las tareas (GET request)
export async function GET() {
  // Usa Prisma para obtener todas las tareas desde la base de datos
  const task = await prisma.task.findMany();

  // Retorna todas las tareas en formato JSON
  return NextResponse.json(task);
}

// Función para crear una nueva tarea (POST request)
export async function POST(request) {
  // Extrae los datos del cuerpo de la solicitud en formato JSON
  const { title, description } = await request.json();

  // Crea una nueva tarea en la base de datos usando Prisma
  const newTask = await prisma.task.create({
    data: {
      title, // Título de la nueva tarea
      description, // Descripción de la nueva tarea
    },
  });

  // Retorna la nueva tarea creada en formato JSON
  return NextResponse.json(newTask);
}
