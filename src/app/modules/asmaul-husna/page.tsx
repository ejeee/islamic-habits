// src/app/asmaul-husna/page.tsx
import React from 'react';

const asmaulHusna = [
  { name: 'Ar-Rahman', meaning: 'Yang Maha Pemurah' },
  { name: 'Ar-Rahim', meaning: 'Yang Maha Penyayang' },
  { name: 'Al-Malik', meaning: 'Yang Maha Merajai' },
  { name: 'Al-Quddus', meaning: 'Yang Maha Suci' },
  { name: 'As-Salam', meaning: 'Yang Maha Sejahtera' },
  // Tambahkan nama-nama lainnya
];

export default function AsmaulHusna() {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Asmaul Husna</h1>
      <ul className="space-y-4">
        {asmaulHusna.map((asma, index) => (
          <li key={index} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-semibold text-gray-700">{asma.name}</h2>
            <p className="text-lg text-gray-500">{asma.meaning}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
