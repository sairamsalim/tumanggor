"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const images = [
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
    alt: "Office workspace"
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
    alt: "Meeting room"
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    alt: "Conference room"
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
    alt: "Collaborative space"
  },
  {
    src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=800",
    alt: "Office interior"
  },
  {
    src: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=800",
    alt: "Modern workspace"
  }
];

export function Gallery() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
                <Dialog key={index}>
                <DialogTrigger asChild>
                    <div className="relative h-72 cursor-pointer overflow-hidden rounded-lg">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl">
                    <div className="relative h-[80vh]">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain"
                        priority
                    />
                    </div>
                </DialogContent>
                </Dialog>
                </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}