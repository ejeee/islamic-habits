// script.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Menambahkan data jadwal sholat
  await prisma.prayerSchedule.createMany({
    data: [
      { time: '05:00', prayer: 'Subuh' },
      { time: '06:30', prayer: 'Dhuhr' },
      { time: '15:00', prayer: 'Ashar' },
      { time: '17:30', prayer: 'Maghrib' },
      { time: '19:00', prayer: 'Isya' },
    ],
  });

  // Menambahkan data Asmaul Husna
  await prisma.asmaulHusna.createMany({
    data: [
      { name: 'Ar-Rahman', meaning: 'Yang Maha Pengasih' },
      { name: 'Ar-Rahim', meaning: 'Yang Maha Penyayang' },
      // Tambahkan nama-nama lainnya
    ],
  });

  // Menambahkan data doa harian
  await prisma.dailyPrayers.createMany({
    data: [
      { title: 'Doa Sebelum Tidur', text: 'اللّهُمّ إنّي أسأَلُكَ خَيْرَ هذِهِ اللّيْلَةِ، وَأعوذُ بِكَ مِن شَرِّها' },
      { title: 'Doa Setelah Sholat', text: 'أستغفر الله، أستغفر الله، أستغفر الله' },
      // Tambahkan doa-doa lainnya
    ],
  });

  console.log('Data berhasil ditambahkan.');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
