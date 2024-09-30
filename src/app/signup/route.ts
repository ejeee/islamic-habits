import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  // Cek apakah pengguna sudah ada
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return new Response('User already exists', { status: 400 });
  }

  // Simpan pengguna baru
  await prisma.user.create({
    data: {
      email,
      password,
      name,
    },
  });

  return new Response('User created successfully', { status: 201 });
}
