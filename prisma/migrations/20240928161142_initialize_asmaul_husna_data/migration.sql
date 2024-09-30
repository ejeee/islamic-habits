/*
  Warnings:

  - You are about to drop the column `asr` on the `PrayerSchedule` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `PrayerSchedule` table. All the data in the column will be lost.
  - You are about to drop the column `dhuhr` on the `PrayerSchedule` table. All the data in the column will be lost.
  - You are about to drop the column `fajr` on the `PrayerSchedule` table. All the data in the column will be lost.
  - You are about to drop the column `isha` on the `PrayerSchedule` table. All the data in the column will be lost.
  - You are about to drop the column `maghrib` on the `PrayerSchedule` table. All the data in the column will be lost.
  - You are about to drop the `DailyDua` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `prayer` to the `PrayerSchedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `PrayerSchedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PrayerSchedule" DROP COLUMN "asr",
DROP COLUMN "city",
DROP COLUMN "dhuhr",
DROP COLUMN "fajr",
DROP COLUMN "isha",
DROP COLUMN "maghrib",
ADD COLUMN     "prayer" TEXT NOT NULL,
ADD COLUMN     "time" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "DailyPrayer" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "DailyPrayer_pkey" PRIMARY KEY ("id")
);
