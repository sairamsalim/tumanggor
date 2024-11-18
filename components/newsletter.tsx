"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Terima kasih telah berlangganan!",
      description: "Anda akan segera menerima pembaruan buletin kami.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Tetap Terinformasi
          </h2>
          <p className="text-gray-600 mb-8">
            Berlangganan buletin kami untuk mendapatkan wawasan hukum, pembaruan firma,
            dan berita industri.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit">Berlangganan</Button>
          </form>
        </div>
      </div>
    </section>
  );
}