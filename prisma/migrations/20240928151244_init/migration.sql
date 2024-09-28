-- CreateTable
CREATE TABLE "PrayerSchedule" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "fajr" TIMESTAMP(3) NOT NULL,
    "dhuhr" TIMESTAMP(3) NOT NULL,
    "asr" TIMESTAMP(3) NOT NULL,
    "maghrib" TIMESTAMP(3) NOT NULL,
    "isha" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PrayerSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyDua" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "dua" TEXT NOT NULL,

    CONSTRAINT "DailyDua_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AsmaulHusna" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,

    CONSTRAINT "AsmaulHusna_pkey" PRIMARY KEY ("id")
);
