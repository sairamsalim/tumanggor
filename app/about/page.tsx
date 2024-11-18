import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <Scale className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-primary mb-6">Tentang Kami</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sejak 1970, Kantor Hukum Tumanggor telah menjadi pemimpin dalam memberikan layanan hukum berkualitas tinggi di Indonesia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Visi Kami</h2>
            <p className="text-gray-600 mb-6">
              Menjadi kantor hukum terkemuka yang dikenal atas integritas, keahlian, dan dedikasi dalam memberikan solusi hukum yang inovatif dan efektif.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Misi Kami</h2>
            <p className="text-gray-600 mb-6">
              Memberikan layanan hukum berkualitas tinggi dengan pendekatan personal, membangun hubungan jangka panjang dengan klien, dan berkontribusi positif pada sistem hukum Indonesia.
            </p>
          </div>
        </div>

        <div id="team" className="pt-20">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Tim Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Tumanggor, S.H., M.H.",
                role: "Pendiri & Partner Senior",
                description: "Lebih dari 30 tahun pengalaman dalam hukum korporasi dan litigasi kompleks."
              },
              {
                name: "Budi Santoso, S.H., LL.M.",
                role: "Partner",
                description: "Spesialis dalam hukum properti dan real estate dengan pengalaman internasional."
              },
              {
                name: "Siti Rahma, S.H., M.Kn.",
                role: "Partner",
                description: "Ahli dalam hukum kontrak dan penyelesaian sengketa bisnis."
              }
            ].map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-secondary font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}