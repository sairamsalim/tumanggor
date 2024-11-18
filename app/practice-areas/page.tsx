import { Scale, Briefcase, FileText, Building2, Gavel, Users } from "lucide-react";

const practiceAreas = [
  {
    icon: Building2,
    title: "Hukum Korporasi",
    description: "Spesialisasi dalam merger & akuisisi, tata kelola perusahaan, dan kepatuhan regulasi."
  },
  {
    icon: Scale,
    title: "Litigasi Perdata",
    description: "Representasi dalam sengketa perdata kompleks dan penyelesaian sengketa alternatif."
  },
  {
    icon: FileText,
    title: "Hukum Kontrak",
    description: "Penyusunan, peninjauan, dan negosiasi kontrak bisnis dan komersial."
  },
  {
    icon: Briefcase,
    title: "Hukum Properti",
    description: "Penanganan transaksi real estate, perizinan, dan sengketa properti."
  },
  {
    icon: Gavel,
    title: "Hukum Ketenagakerjaan",
    description: "Konsultasi hubungan industrial, perjanjian kerja, dan penyelesaian perselisihan."
  },
  {
    icon: Users,
    title: "Hukum Keluarga",
    description: "Penanganan kasus perceraian, warisan, dan perencanaan estate."
  }
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