"use client";

import { motion } from "framer-motion";
import { Scale, Briefcase, FileText } from "lucide-react";

const areas = [
  {
    title: "Corporate Law",
    description: "Expert guidance in business law, mergers & acquisitions, and corporate governance.",
    icon: Briefcase,
  },
  {
    title: "Civil Litigation",
    description: "Skilled representation in complex civil disputes and litigation proceedings.",
    icon: Scale,
  },
  {
    title: "Contract Law",
    description: "Comprehensive contract drafting, review, and dispute resolution services.",
    icon: FileText,
  },
];

export function PracticeAreas() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Practice Areas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive legal services across various practice areas,
            ensuring expert representation for all your legal needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {area.title}
                </h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}