"use client"; // untuk menggunakan state dan efek

import { useEffect, useState } from "react";

interface Prayer {
  id: number; // atau string
  content: string;
}

const Prayers = () => {
  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [newPrayer, setNewPrayer] = useState<string>("");

  useEffect(() => {
    const fetchPrayers = async () => {
      const res = await fetch("/api/prayers");
      const data: Prayer[] = await res.json();
      setPrayers(data);
    };

    fetchPrayers();
  }, []);

  const handleAddPrayer = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res = await fetch("/api/prayers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: newPrayer }),
    });

    if (res.ok) {
      const addedPrayer = await res.json();
      setPrayers((prev) => [...prev, addedPrayer]);
      setNewPrayer(""); // Reset form input
    }
  };

  const handleEditPrayer = async (id: number) => {
    const updatedContent = prompt("Masukkan konten baru:");
    
    if (updatedContent) {
      const res = await fetch(`/api/prayers/${id}`, { // Menggunakan ID dalam URL
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: updatedContent }),
      });
  
      if (res.ok) {
        const updatedPrayer = await res.json();
        setPrayers((prev) =>
          prev.map((prayer) => (prayer.id === updatedPrayer.id ? updatedPrayer : prayer))
        );
      }
    }
  };

  const handleDeletePrayer = async (id: number) => {
    const confirmDelete = confirm("Apakah Anda yakin ingin menghapus catatan ini?");
    
    if (confirmDelete) {
      const res = await fetch(`/api/prayers/${id}`, { // Menggunakan ID dalam URL
        method: "DELETE",
      });
  
      if (res.ok) {
        setPrayers((prev) => prev.filter((prayer) => prayer.id !== id));
      }
    }
  };

  return (
    <div>
      <h1>Catatan Doa</h1>
      <form onSubmit={handleAddPrayer}>
        <input 
          type="text" 
          value={newPrayer} 
          onChange={(e) => setNewPrayer(e.target.value)} 
          placeholder="Masukkan catatan doa" 
          required 
        />
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {prayers.map((prayer) => (
          <li key={prayer.id}>
            {prayer.content}
            <button onClick={() => handleEditPrayer(prayer.id)}>Edit</button>
            <button onClick={() => handleDeletePrayer(prayer.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prayers;
