import Link from 'next/link';
import { Scale } from 'lucide-react';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Practice Areas', href: '/practice-areas' },
    { name: 'Team', href: '/about#team' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Facebook', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8" />
              <span className="font-bold text-xl">Tumanggor</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Excellence in legal services since 1970. Protecting your rights with
              dedication and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Legal Avenue</p>
              <p>New York, NY 10001</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: contact@tumanggor.com</p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300 text-sm">
            © {new Date().getFullYear()} Tumanggor Law Firm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}