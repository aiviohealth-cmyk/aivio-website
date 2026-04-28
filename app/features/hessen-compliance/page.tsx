import type { Metadata } from "next";
import Link from "next/link";
import ComplianceRoiTable from "@/components/ComplianceRoiTable";
import HessenCtaButtons from "@/components/HessenCtaButtons";
import CompliancePruefungDiagram from "@/components/CompliancePruefungDiagram";

export const metadata: Metadata = {
  title: "Hessen SGB XI/V-Compliance — Aivio Health",
  description:
    "Compliance Engine für Hessen: Automatische Prüfung Ihrer Dokumentation auf SGB XI/V-Konformität und Hessen-spezifische Leistungskomplexe. MDK-Prüfungen sicher bestehen.",
};

const problems = [
  {
    icon: "⏱️",
    stat: "4–5 Std.",
    label: "pro Woche",
    description:
      "Compliance-Prüfungsaufwand pro Pflegeleitung – Zeit, die für Mitarbeiterführung und Patienten fehlt.",
  },
  {
    icon: "⚠️",
    stat: "23 %",
    label: "MDK-Beanstandungsquote",
    description:
      "Fast jede vierte MDK-Prüfung endet mit Mängeln – häufig wegen Hessen-spezifischer Dokumentationslücken.",
  },
  {
    icon: "💶",
    stat: "Ø €8.400",
    label: "Rückforderungsrisiko / Jahr",
    description:
      "Abrechnungsfehler durch nicht erfüllte Hessen-SGB-XI/V-Anforderungen können zu erheblichen Rückforderungen führen.",
  },
];


const faqs = [
  {
    q: "Welche Hessen-spezifischen SGB XI/V-Anforderungen werden abgedeckt?",
    a: "Die Compliance Engine prüft auf alle wesentlichen Anforderungen des Hessischen Rahmenvertrags nach § 75 SGB XI, einschließlich der Leistungskomplexe LK 1–22, Dokumentationspflichten nach SGB V (häusliche Krankenpflege) und Qualitätsindikatoren des MDK Hessen. Die Regelwerke werden quartalsweise aktualisiert.",
  },
  {
    q: "Wie läuft eine MDK-Prüfung mit Aivio ab?",
    a: "Aivio erstellt auf Knopfdruck einen strukturierten Compliance-Bericht mit allen prüfungsrelevanten Dokumenten. Lücken werden vorab identifiziert und können behoben werden, bevor der MDK vor Ort prüft. Kundenfeedback zeigt: Prüfungen dauern im Schnitt 40 % kürzer.",
  },
  {
    q: "Sind die Hessen-Leistungskomplexe immer aktuell?",
    a: "Ja. Änderungen im Hessischen Rahmenvertrag oder SGB XI/V-Richtlinien fließen automatisch in die Compliance Engine ein. Sie werden bei relevanten Updates per In-App-Benachrichtigung informiert. Keine manuelle Nachpflege notwendig.",
  },
  {
    q: "Wie unterscheidet sich die Hessen-Compliance von der NRW-Version?",
    a: "Hessen und NRW haben unterschiedliche Rahmenverträge und Leistungskomplex-Kataloge. Aivio verwaltet beide Bundesland-Profile getrennt. Für überregionale Pflegedienste können beide Profile parallel aktiv sein – das System ordnet Touren automatisch dem richtigen Profil zu.",
  },
];

export default function HessenCompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-8">
              <span className="text-xl">⚖️</span>
              Compliance Engine · Hessen Phase 1
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              SGB XI/V-Compliance: Jetzt auch in Hessen
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Aivio prüft Ihre Pflegedokumentation automatisch auf Hessen-spezifische
              SGB XI/V-Anforderungen – damit Sie MDK-Prüfungen sicher bestehen und
              Rückforderungen vermeiden.
            </p>
            <HessenCtaButtons />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Hessen-Compliance kostet Pflegedienste Zeit und Geld
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Bundesland-spezifische Anforderungen sind komplex – manuelle Prüfung ist fehleranfällig.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm text-center"
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <div className="text-4xl font-bold text-red-500 mb-1">{p.stat}</div>
                <div className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wide">
                  {p.label}
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / Compliance Engine Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Drei Schritte zur Hessen-Compliance
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Die Compliance Engine übernimmt die Prüflast – Sie behalten die Kontrolle.
            </p>
          </div>
          <CompliancePruefungDiagram />
        </div>
      </section>

      {/* ROI Table — Frankfurt Case Study */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Messbare Ergebnisse aus der Praxis
              </h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                Ein ambulanter Pflegedienst in Frankfurt am Main hat die Compliance Engine
                in Q1 2026 eingeführt – die Ergebnisse sprechen für sich.
              </p>
              <ul className="space-y-3">
                {[
                  "Prüfungsaufwand von 4,5 auf 0,5 Stunden/Woche reduziert",
                  "Null MDK-Beanstandungen in den ersten 6 Monaten",
                  "€4.200 Rückforderungen vollständig vermieden",
                  "ROI bereits nach 6 Wochen erreicht",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ComplianceRoiTable />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Häufige Fragen zur Hessen-Compliance
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
            <strong>Rechtlicher Hinweis:</strong> Aivio ist ein technisches Compliance-Hilfsmittel.
            Die Plattform ersetzt keine Rechts- oder Steuerberatung. Bei Unsicherheiten zu
            spezifischen SGB XI/V-Anforderungen konsultieren Sie bitte Ihren Compliance-Beauftragten
            oder einen Fachanwalt für Sozialrecht.
          </div>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl text-sm text-blue-800">
            <strong>DSGVO:</strong> Alle Patientendaten werden ausschließlich auf zertifizierten
            EU-Servern in Deutschland verarbeitet. Keine Weitergabe an Dritte. ISO 27001 zertifiziert.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="walkthrough" className="bg-brand-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Hessen-Compliance live erleben
          </h2>
          <p className="text-white/80 mb-10 text-lg leading-relaxed">
            Sehen Sie die Compliance Engine mit anonymisierten Hessen-Daten in Aktion –
            oder buchen Sie einen geführten Audit-Walkthrough mit unserem Compliance-Team.
          </p>
          <HessenCtaButtons />
          <div className="mt-8 text-sm text-white/60">
            Auch interessant:{" "}
            <Link href="/features" className="underline underline-offset-2 hover:text-white">
              Alle Aivio-Features →
            </Link>
            {" · "}
            <Link
              href="/features/voice-dokumentation"
              className="underline underline-offset-2 hover:text-white"
            >
              Voice-Dokumentation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
