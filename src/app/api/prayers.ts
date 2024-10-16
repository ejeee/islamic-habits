import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma"; // Sesuaikan dengan path ke prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { content } = req.body;

    try {
      const newPrayer = await prisma.prayer.create({
        data: {
          content,
        },
      });
      res.status(201).json(newPrayer);
    } catch (error) {
      res.status(500).json({ error: "Gagal menambah catatan doa" });
    }
  } else if (req.method === "PUT") {
    const { id, content } = req.body;

    try {
      const updatedPrayer = await prisma.prayer.update({
        where: { id },
        data: { content },
      });
      res.status(200).json(updatedPrayer);
    } catch (error) {
      res.status(500).json({ error: "Gagal mengedit catatan doa" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.body;

    try {
      await prisma.prayer.delete({
        where: { id },
      });
      res.status(204).end(); // No Content
    } catch (error) {
      res.status(500).json({ error: "Gagal menghapus catatan doa" });
    }
  } else {
    res.setHeader("Allow", ["POST", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
