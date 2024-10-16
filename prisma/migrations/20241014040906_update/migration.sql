/*
  Warnings:

  - You are about to drop the `AsmaulHusna` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DoaHarian` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JadwalSholat` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "AsmaulHusna";

-- DropTable
DROP TABLE "DoaHarian";

-- DropTable
DROP TABLE "JadwalSholat";

-- CreateTable
CREATE TABLE "jadwalSholat" (
    "id" SERIAL NOT NULL,
    "time" TEXT NOT NULL,
    "prayer" TEXT NOT NULL,

    CONSTRAINT "jadwalSholat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asmaulHusna" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,

    CONSTRAINT "asmaulHusna_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doaHarian" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "doaHarian_pkey" PRIMARY KEY ("id")
);
