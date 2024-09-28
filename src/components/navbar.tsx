// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-lg mx-auto p-4 flex justify-around">
        <Link href="/prayer-schedule" className="hover:text-blue-200">
          Jadwal Sholat
        </Link>
        <Link href="/asmaul-husna" className="hover:text-blue-200">
          Asmaul Husna
        </Link>
        <Link href="/daily-prayers" className="hover:text-blue-200">
          Doa-Doa Harian
        </Link>
      </div>
    </nav>
  );
}
