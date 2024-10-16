/*
  Warnings:

  - You are about to drop the `DailyPrayer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PrayerSchedule` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "DailyPrayer";

-- DropTable
DROP TABLE "PrayerSchedule";

-- CreateTable
CREATE TABLE "JadwalSholat" (
    "id" SERIAL NOT NULL,
    "time" TEXT NOT NULL,
    "prayer" TEXT NOT NULL,

    CONSTRAINT "JadwalSholat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoaHarian" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "DoaHarian_pkey" PRIMARY KEY ("id")
);
