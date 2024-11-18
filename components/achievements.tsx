"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Briefcase, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    number: "98%",
    label: "Tingkat Keberhasilan",
  },
  {
    icon: Users,
    number: "1000+",
    label: "Klien Puas",
  },
  {
    icon: Briefcase,
    number: "50+",
    label: "Tahun Pengalaman",
  },
  {
    icon: Award,
    number: "25+",
    label: "Penghargaan Industri",
  },
];

export function Achievements() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pencapaian Kami
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Rekam jejak kesuksesan dan keunggulan dalam layanan hukum selama
            lebih dari lima dekade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <achievement.icon className="w-12 h-12 text-secondary" />
              </div>
              <div className="text-4xl font-bold mb-2 text-secondary">
                {achievement.number}
              </div>
              <div className="text-gray-200">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}