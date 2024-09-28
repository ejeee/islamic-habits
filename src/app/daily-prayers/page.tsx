// src/app/daily-prayers/page.tsx
import React from 'react';

const dailyPrayers = [
  { title: 'Doa Sebelum Tidur', text: 'اللّهُمّ إنّي أسأَلُكَ خَيْرَ هذِهِ اللّيْلَةِ، وَأعوذُ بِكَ مِن شَرِّها' },
  { title: 'Doa Setelah Sholat', text: 'أستغفر الله، أستغفر الله، أستغفر الله' },
  // Tambahkan doa-doa lainnya
];

export default function DailyPrayers() {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Doa-Doa Harian</h1>
      <ul className="space-y-4">
        {dailyPrayers.map((prayer, index) => (
          <li key={index} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-semibold text-gray-700">{prayer.title}</h2>
            <p className="text-lg text-gray-500">{prayer.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
