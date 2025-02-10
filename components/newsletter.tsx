"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Terima kasih telah berlangganan!", {
      description: "Anda akan segera menerima pembaruan buletin kami."
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
          Ada pertanyaan atau butuh bantuan?
          </h2>
          <p className="text-gray-600 mb-8">
          Klik di sini untuk chat langsung dengan kami via WhatsApp!
          </p>
          <Button
            type="submit"
            onClick={() => {
              const newWindow = window.open("https://wa.me/60145830062", '_blank');
              if (newWindow) {
                newWindow.focus();
              }
            }}
          >Hubungi Kami</Button>
        </div>
      </div>
    </section>
  );
}