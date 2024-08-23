"use client";

import { useRouter } from "next/navigation";

export default function TaskCard({ task }) {
  const router = useRouter();

  return (
    <div
      className="bg-gray-100 p-6 rounded-md shadow-lg transform  hover:shadow-2xl hover:bg-gray-200 hover:cursor-pointer transition-all duration-300 border-2 border-transparent hover:border-blue-400"
      onClick={() => {
        router.push("/task/edit/" + task.id);
      }}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{task.title}</h3>
      <p className="text-gray-600 mb-4">{task.description}</p>
      <p className="text-gray-500 text-sm">
        {new Date(task.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
