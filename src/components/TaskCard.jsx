"use client";
import { useRouter } from "next/navigation";
import { FaEdit } from "react-icons/fa";

export default function TaskCard({ task }) {
  const router = useRouter();

  if (!task) {
    return null;
  }

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl  hover:cursor-pointer transition-all duration-300 border border-gray-200 hover:border-blue-400"
      onClick={() => {
        router.push("/task/edit/" + task.id);
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 truncate">
          {task.title || "Untitled Task"}
        </h3>
        <FaEdit className="text-blue-500 hover:text-blue-700 transition-colors duration-300" />
      </div>
      <p
        className="text-gray-600 mb-4 overflow-hidden"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          textOverflow: "ellipsis",
          lineHeight: "1.5em",
          maxHeight: "4.5em", // 3 líneas * 1.5em de altura de línea
        }}
      >
        {task.description || "No description"}
      </p>
      <p className="text-blue-500 text-sm font-semibold">
        {task.createdAt
          ? new Date(task.createdAt).toLocaleDateString()
          : "Date unknown"}
      </p>
    </div>
  );
}
