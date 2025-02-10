"use client";

import { motion } from "framer-motion";
import { Scale, Briefcase, FileText, Car, Barcode, CandyCane } from "lucide-react";

const areas = [
  {
    title: "Personal Injury",
    description: "Kami menyediakan bantuan hukum untuk kasus cedera pribadi, termasuk tuntutan ganti rugi, negosiasi dengan pihak asuransi, dan representasi pengadilan guna memastikan klien mendapatkan keadilan dan kompensasi yang layak.",
    icon: Scale,
  },
  {
    title: "Industrial Injury",
    description: "Kami memberikan pendampingan hukum terkait cedera industri, termasuk klaim kompensasi pekerja, penyelesaian sengketa, serta perlindungan hak-hak pekerja sesuai dengan peraturan ketenagakerjaan yang berlaku.",
    icon: Briefcase,
  },
  {
    title: "Insurance Claims",
    description: "Kami menyediakan layanan hukum khusus untuk klaim asuransi, termasuk penyelesaian sengketa, analisis kebijakan, dan representasi klien dalam proses klaim untuk memastikan hak dan kepentingan mereka terlindungi.",
    icon: FileText,
  },
  {
    title: "Automobile Accidents",
    description: "Kami memberikan bantuan hukum terkait kecelakaan mobil, termasuk klaim asuransi, ganti rugi, dan representasi hukum untuk memastikan klien mendapatkan hak dan kompensasi yang adil.",
    icon: Car,
  },
  {
    title: "Criminal Defence",
    description: "Kami menyediakan layanan pembelaan hukum dalam kasus pidana, termasuk representasi di pengadilan, konsultasi strategi, dan perlindungan hak-hak klien untuk memastikan keadilan dalam proses hukum.",
    icon: Barcode,
  },
  {
    title: "Elder Law",
    description: "Kami memberikan layanan hukum khusus untuk lansia, termasuk perencanaan estate, perlindungan aset, hak perawatan kesehatan, dan bantuan dalam masalah hukum yang berkaitan dengan usia lanjut.",
    icon: CandyCane,
  },
];

export function PracticeAreas() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Area Praktik Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan layanan hukum komprehensif di berbagai bidang praktik,
            memastikan representasi ahli untuk semua kebutuhan hukum Anda.
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