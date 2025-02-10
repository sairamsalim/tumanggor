"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="relative h-screen min-h-[600px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3")'
        }}
      >
        <div className="hero-overlay" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Keunggulan dalam Layanan Hukum
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Melindungi Hak Anda dengan Dedikasi dan Keahlian
          </p>
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-primary font-semibold"
            onClick={() => {
              const newWindow = window.open("https://wa.me/60145830062", '_blank');
              if (newWindow) {
                newWindow.focus();
              }
            }}
          >
            Jadwalkan Konsultasi
          </Button>
        </motion.div>
      </div>
    </div>
  );
}