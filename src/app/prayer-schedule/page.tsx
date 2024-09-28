// src/app/prayer-schedule/page.tsx
import React from 'react';

const prayerTimes = [
  { time: '05:00', prayer: 'Subuh' },
  { time: '06:30', prayer: 'Dhuhr' },
  { time: '15:00', prayer: 'Ashar' },
  { time: '17:30', prayer: 'Maghrib' },
  { time: '19:00', prayer: 'Isya' },
];

export default function PrayerSchedule() {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Jadwal Sholat</h1>
      <div className="grid grid-cols-2 gap-4">
        {prayerTimes.map((prayer, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 text-center transform transition hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-gray-700">{prayer.time}</h2>
            <p className="text-lg text-blue-600">{prayer.prayer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
