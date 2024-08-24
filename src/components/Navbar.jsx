import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center py-3">
        <h3 className="font-bold text-3xl">TaskFlow</h3>
        <ul className="flex gap-x-4">
          <li>
            <Link href="/" className="text-white">
              Tareas
            </Link>
          </li>
          <li>
            <Link href="/new" className="text-white">
              Crear tarea
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white">
              Nosotros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
