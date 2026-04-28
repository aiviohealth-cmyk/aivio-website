import Link from "next/link";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-brand-700">Aivio</span>
          <span className="text-xs text-gray-400 font-medium tracking-wide">HEALTH</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-sm text-gray-600 hover:text-brand-600 transition-colors">
            Features
          </Link>
          <Link href="/features/voice-dokumentation" className="text-sm text-gray-600 hover:text-brand-600 transition-colors">
            Voice-Doku
          </Link>
          <Link href="/pricing" className="text-sm text-gray-600 hover:text-brand-600 transition-colors">
            Preise
          </Link>
          <Link href="/blog" className="text-sm text-gray-600 hover:text-brand-600 transition-colors">
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="text-sm text-gray-600 hover:text-brand-600 transition-colors hidden sm:inline"
          >
            Login
          </Link>
          <Link
            href="#demo"
            className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Demo anfragen
          </Link>
        </div>
      </nav>
    </header>
  );
}
