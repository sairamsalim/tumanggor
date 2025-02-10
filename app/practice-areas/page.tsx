import { Scale, Briefcase, FileText, Car, Barcode, CandyCane } from "lucide-react";

const practiceAreas = [
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

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">Area Praktik</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tim ahli kami menyediakan layanan hukum komprehensif di berbagai bidang praktik untuk memenuhi kebutuhan klien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <div key={area.title} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}