import Link from 'next/link';
import { Scale } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and About */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8" />
              <span className="font-bold text-xl">Tumanggor</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
            Menyediakan total solusi dan sebagai problem solver terhadap permasalahan hukum secara menyeluruh termasuk dukungan teknis serta jasa layanan konsultasi kepada pelanggan, untuk memenuhi kebutuhan pelanggan yang sangat kritikal.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Hubungi Kami
            </h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>DMNQ BUILDING Lt. 2</p>
              <p>DKI Jakarta 10720</p>
              <p>Telepon: +60 14-583 0062 | +62 852-1336-0161</p>
              <p>Email: lawfirmverys@tumanggor.id</p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300 text-sm">
            © {new Date().getFullYear()} Kantor Hukum Tumanggor. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}