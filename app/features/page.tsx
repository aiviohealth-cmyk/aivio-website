import { getFeaturesPage } from "@/lib/queries";
import type { Metadata } from "next";

const defaultFeatures = [
  {
    name: "Voice-to-Dokumentation",
    icon: "🎙️",
    description: "Pflegekräfte sprechen einfach – die KI erstellt daraus rechtssichere Pflegeberichte.",
    highlights: ["Deutsch, Russisch, Türkisch", "Offline-fähig", "Rechtschreibkorrektur", "Konforme Formulierungen"],
  },
  {
    name: "Tourenplanung & Disposition",
    icon: "🗺️",
    description: "Automatische Routenoptimierung und dynamische Anpassung bei Ausfällen.",
    highlights: ["GPS-optimierte Routen", "Mitarbeiter-Matching", "Echtzeitbenachrichtigung", "Urlaubs-/Krankheitsvertretung"],
  },
  {
    name: "Stammdatenmanagement",
    icon: "👥",
    description: "Zentrale Verwaltung von Patienten, Mitarbeitenden und Verträgen.",
    highlights: ["Patientenakten digital", "Mitarbeiterprofil & Qualifikationen", "Vertragsmanagement", "Pflegeplanung SGB XI"],
  },
  {
    name: "Abrechnungs-Engine",
    icon: "💶",
    description: "SGB XI/V-konforme Abrechnung mit KI-Vorprüfung und direkter Kassenkommunikation.",
    highlights: ["NRW Leistungskomplexe", "Hessen Komplexleistungen", "Pre-Check vor Einreichung", "Direktübermittlung"],
  },
  {
    name: "Compliance & Dokumentation",
    icon: "✅",
    description: "Lückenlose Pflegedokumentation nach aktuellen SGB-Anforderungen.",
    highlights: ["AEDL-Struktur", "Wundversorgung", "Medikamentengabe", "MDK-Prüfungsunterlagen"],
  },
  {
    name: "Reporting & Analytics",
    icon: "📊",
    description: "Echtzeit-Dashboards für Geschäftsführung und Pflegeleitung.",
    highlights: ["Umsatz & Leistungsübersicht", "Touren-Effizienz", "Mitarbeiterauslastung", "Abrechnungsquote"],
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const page = await getFeaturesPage().catch(() => null);
  return {
    title: page?.seo?.title ?? "Features — Aivio Health",
    description: page?.seo?.description ?? "Alle Funktionen unserer KI-Pflegesoftware im Überblick.",
  };
}

export default async function FeaturesPage() {
  const page = await getFeaturesPage().catch(() => null);
  const features = page?.features ?? defaultFeatures;

  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            {page?.headline ?? "Alles unter einem Dach"}
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            {page?.intro ?? "Aivio bündelt alle Prozesse eines ambulanten Pflegedienstes in einer intuitiven Plattform."}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f: { icon?: string; name: string; description: string; highlights?: string[] }, i: number) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">{f.name}</h2>
                <p className="text-gray-500 mb-6 leading-relaxed">{f.description}</p>
                {f.highlights && (
                  <ul className="space-y-2">
                    {f.highlights.map((h: string, j: number) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
