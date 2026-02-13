import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-semibold text-white tracking-wide">
                Hellenic<span className="text-gold">Estates</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-8">
              Your trusted partner for Greek Golden Visa property investments in Athens.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-colors"
                >
                  {social === 'facebook' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  )}
                  {social === 'instagram' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )}
                  {social === 'linkedin' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-medium tracking-luxury uppercase text-xs mb-8">
              Navigation
            </h3>
            <ul className="space-y-4">
              {[
                { href: '/properties', label: 'Properties' },
                { href: '/golden-visa', label: 'Golden Visa' },
                { href: '/kallithea', label: 'Kallithea' },
                { href: '/faq', label: 'FAQ' },
                { href: '/about', label: 'About Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold font-medium tracking-luxury uppercase text-xs mb-8">
              Contact
            </h3>
            <ul className="space-y-4 text-white/60">
              <li>
                <span className="block text-white/50 text-xs uppercase tracking-wide mb-1">US Office</span>
                1404 Old Dairy Dr<br />Columbia, SC 29201
              </li>
              <li>
                <span className="block text-white/50 text-xs uppercase tracking-wide mb-1">Contact</span>
                Carol Papaletsos
              </li>
              <li>
                <span className="block text-white/50 text-xs uppercase tracking-wide mb-1">Email</span>
                <a href="mailto:carol@ambrosiasc.com" className="hover:text-gold transition-colors">
                  carol@ambrosiasc.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-gold font-medium tracking-luxury uppercase text-xs mb-8">
              Legal
            </h3>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Ambrosia, LLC dba Hellenic Estates. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Website by{' '}
            <a href="https://vorgesternagency.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              vorgesternagency.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
