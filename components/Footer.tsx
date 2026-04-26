import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">Aivio</span>
              <span className="text-xs text-gray-500 font-medium tracking-wide">HEALTH</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              KI-gestützte Pflegesoftware für ambulante Pflegedienste. DSGVO-konform, SGB XI/V-compliant,
              made in Germany.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Produkt</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Preise</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li>
                <a href="mailto:hallo@aivio.health" className="hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-xs text-center">
          © {new Date().getFullYear()} Aivio Health GmbH. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
