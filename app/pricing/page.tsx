import { getPricingPage } from "@/lib/queries";
import Link from "next/link";
import type { Metadata } from "next";

const defaultPlans = [
  {
    name: "Starter",
    price: "€129 / Monat",
    description: "Für kleine Pflegedienste bis 20 Patienten.",
    features: ["Bis 20 Patienten", "Pflegedokumentation", "Tourenplanung", "E-Mail Support"],
    ctaText: "Jetzt starten",
    ctaUrl: "mailto:hallo@aivio.health",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "€299 / Monat",
    description: "Für wachsende Dienste mit Abrechnung und Compliance.",
    features: ["Bis 100 Patienten", "Alles aus Starter", "SGB XI/V Abrechnung", "Voice-to-Doku", "NRW & Hessen Compliance", "Priority Support"],
    ctaText: "Demo anfragen",
    ctaUrl: "mailto:demo@aivio.health",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Auf Anfrage",
    description: "Für Träger mit mehreren Standorten und individuellen Anforderungen.",
    features: ["Unbegrenzte Patienten", "Multi-Standort", "Individuelle Integrationen", "Dedicated Account Manager", "SLA & On-Premise Option"],
    ctaText: "Kontakt aufnehmen",
    ctaUrl: "mailto:enterprise@aivio.health",
    highlighted: false,
  },
];

const defaultFaq = [
  { question: "Gibt es eine kostenlose Testphase?", answer: "Ja, wir bieten eine 30-Tage-Testphase ohne Kreditkarte. Kontaktieren Sie uns für einen Demo-Zugang." },
  { question: "Ist Aivio DSGVO-konform?", answer: "Ja. Alle Daten werden ausschließlich in EU-Rechenzentren gespeichert. Wir sind ISO 27001 zertifiziert." },
  { question: "Wie lange dauert die Einführung?", answer: "Typisch 2–4 Wochen inklusive Datenmigration, Schulungen und Go-Live-Begleitung." },
  { question: "Welche Bundesländer werden unterstützt?", answer: "Phase 1: NRW und Hessen vollständig. Weitere Bundesländer folgen quartalsweise." },
];

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPricingPage().catch(() => null);
  return {
    title: page?.seo?.title ?? "Preise — Aivio Health",
    description: page?.seo?.description ?? "Transparente Preismodelle für jeden Pflegedienst.",
  };
}

export default async function PricingPage() {
  const page = await getPricingPage().catch(() => null);
  const plans = page?.plans ?? defaultPlans;
  const faq = page?.faq ?? defaultFaq;

  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            {page?.headline ?? "Einfache, transparente Preise"}
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            {page?.intro ?? "Keine versteckten Kosten. Kündigung jederzeit möglich."}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((plan: { name: string; price: string; description: string; features: string[]; ctaText: string; ctaUrl: string; highlighted?: boolean }, i: number) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border-2 relative ${
                  plan.highlighted
                    ? "border-brand-500 shadow-2xl shadow-brand-100"
                    : "border-gray-100"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                      Empfohlen
                    </span>
                  </div>
                )}
                <h2 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h2>
                <div className="text-3xl font-bold text-brand-600 mb-3">{plan.price}</div>
                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="text-brand-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.ctaUrl || "#contact"}
                  className={`block text-center py-3 px-6 rounded-xl font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-brand-600 text-white hover:bg-brand-700"
                      : "border-2 border-brand-600 text-brand-600 hover:bg-brand-50"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Häufige Fragen</h2>
          <div className="space-y-6">
            {faq.map((item: { question: string; answer: string }, i: number) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-slate-900 mb-2">{item.question}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
