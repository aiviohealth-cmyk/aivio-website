import { getHomePage } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

// Default content when CMS has no data yet
const defaults = {
  hero: {
    headline: "Pflegedokumentation, die Pflege fühlt.",
    subheadline:
      "Aivio automatisiert Pflegedokumentation, Tourenplanung und Abrechnung – damit Ihre Pflegekräfte mehr Zeit für das Wesentliche haben.",
    ctaText: "Kostenlose Demo anfragen",
    ctaUrl: "#demo",
  },
  benefits: [
    { icon: "🎙️", title: "Voice-to-Doku", description: "Diktieren statt tippen – KI erstellt rechtssichere Pflegeberichte in Echtzeit." },
    { icon: "🗺️", title: "Intelligente Tourenplanung", description: "Automatische Routenoptimierung und Mitarbeiter-Zuweisung spart bis zu 2h täglich." },
    { icon: "✅", title: "SGB XI/V Compliance", description: "Bundesland-spezifische Leistungskomplexe für NRW und Hessen – lückenlos konform." },
    { icon: "💶", title: "Fehlerfreie Abrechnung", description: "KI-Vorprüfung reduziert Abrechnungsfehler und Rückläufer von Krankenkassen." },
  ],
  socialProof: [
    { value: "500+", label: "Pflegedienste vertrauen Aivio" },
    { value: "98%", label: "Abrechnung auf Anhieb korrekt" },
    { value: "2h", label: "täglich gespart pro Tour" },
    { value: "DSGVO", label: "konform & ISO 27001" },
  ],
};

export default async function HomePage() {
  const page = await getHomePage().catch(() => null);
  const hero = page?.hero ?? defaults.hero;
  const benefits = page?.benefits ?? defaults.benefits;
  const stats = page?.socialProof ?? defaults.socialProof;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Neu: Hessen-Compliance jetzt verfügbar
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              {hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              {hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={hero.ctaUrl || "#demo"}
                className="bg-white text-brand-700 hover:bg-brand-50 font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                {hero.ctaText}
              </Link>
              <Link
                href="/features"
                className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-xl transition-colors"
              >
                Alle Features →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat: { value: string; label: string }, i: number) => (
              <div key={i}>
                <div className="text-3xl font-bold text-brand-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Alles, was ein moderner Pflegedienst braucht
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Vom ersten Patientenkontakt bis zur Kassenabrechnung – Aivio digitalisiert jeden Schritt.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b: { icon: string; title: string; description: string }, i: number) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="demo" className="bg-brand-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für die digitale Pflege?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Vereinbaren Sie eine kostenlose 30-Minuten-Demo mit unserem Team.
          </p>
          <a
            href="mailto:demo@aivio.health"
            className="inline-block bg-white text-brand-700 hover:bg-brand-50 font-semibold px-10 py-4 rounded-xl text-lg transition-colors"
          >
            Demo anfragen →
          </a>
        </div>
      </section>
    </>
  );
}
