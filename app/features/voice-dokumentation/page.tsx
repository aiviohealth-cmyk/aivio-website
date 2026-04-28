import type { Metadata } from "next";
import Link from "next/link";
import RoiCalculator from "@/components/RoiCalculator";
import VoiceCtaButtons from "@/components/VoiceCtaButtons";

export const metadata: Metadata = {
  title: "Voice-Dokumentation — Aivio Health",
  description:
    "Pflegedokumentation per Sprache: KI wandelt Diktat in rechtssichere Pflegeberichte – spart 2–3 Stunden pro Woche und reduziert Fehler um bis zu 80%.",
};

const steps = [
  {
    step: "01",
    title: "Sprechen",
    description:
      "Pflegekraft diktiert den Pflegebericht direkt nach dem Patientenbesuch – auf Deutsch, Russisch oder Türkisch, auch offline.",
    icon: "🎙️",
  },
  {
    step: "02",
    title: "Prüfen",
    description:
      "Die KI erstellt sofort einen strukturierten, SGB XI/V-konformen Pflegebericht und zeigt Lücken oder Risiken zur Prüfung an.",
    icon: "✅",
  },
  {
    step: "03",
    title: "Abschicken",
    description:
      "Mit einem Klick wird der Bericht bestätigt, in der Akte gespeichert und für die Abrechnung freigegeben.",
    icon: "📤",
  },
];

const faqs = [
  {
    q: "Ist die Voice-Dokumentation DSGVO-konform?",
    a: "Ja. Die Sprachverarbeitung erfolgt ausschließlich auf EU-Servern (Deutschland). Sprachdaten werden nicht dauerhaft gespeichert – nur der fertige Textbericht wird in der Pflegeakte archiviert. Alle Datenverarbeitungsverträge sind nach Art. 28 DSGVO abgeschlossen.",
  },
  {
    q: "Funktioniert die App auch ohne Internetverbindung?",
    a: "Ja. Aivio unterstützt Offline-Diktate. Die Aufnahme wird lokal gespeichert und sobald das Gerät wieder online ist, wird die KI-Transkription und Berichtserstellung automatisch nachgeholt.",
  },
  {
    q: "Welche Sprachen werden unterstützt?",
    a: "Aktuell Deutsch, Russisch und Türkisch – die drei häufigsten Sprachen im deutschen Pflegesektor. Weitere Sprachen sind in der Roadmap für Q3 2026.",
  },
  {
    q: "Wie lange dauert die Einarbeitung?",
    a: "Die meisten Pflegekräfte sind nach einer 20-minütigen Einführung produktiv. Es gibt keine komplexe Syntax – einfach sprechen wie gewohnt. Unser Onboarding-Team begleitet die erste Woche kostenlos.",
  },
];

const problems = [
  {
    icon: "⏱️",
    stat: "2–3 Std.",
    label: "pro Woche",
    description: "Dokumentationszeit pro Pflegekraft – Zeit, die am Patienten fehlt.",
  },
  {
    icon: "❌",
    stat: "15 %",
    label: "Fehlerquote",
    description: "Dokumentationsfehler führen zu Abrechnungsablehnungen und MDK-Rügen.",
  },
  {
    icon: "😓",
    stat: "#1",
    label: "Burnout-Faktor",
    description: "Administrative Last ist der häufigste Kündigungsgrund im Pflegeberuf.",
  },
];

export default function VoiceDokumentationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-8">
              <span className="text-xl">🎙️</span>
              Feature: Voice-Dokumentation
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Pflegedokumentation per Sprache – in Sekunden, nicht Stunden
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Ihre Pflegekräfte sprechen einfach – Aivio erstellt daraus sofort rechtssichere,
              SGB XI/V-konforme Pflegeberichte. Spart bis zu 3 Stunden pro Woche und Mitarbeiter.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#demo"
                className="bg-white text-brand-700 hover:bg-brand-50 font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Demo anfragen
              </Link>
              <Link
                href="#walkthrough"
                className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-xl transition-colors"
              >
                Walkthrough ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Dokumentation kostet Ihren Dienst täglich wertvolle Ressourcen
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Das Problem ist bekannt – die Lösung bisher nicht.
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

      {/* Solution / 3-Step Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Drei Schritte zur fertigen Dokumentation
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Kein Tippen, kein Nacharbeiten, kein Papierkram – nur sprechen, prüfen, abschicken.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-brand-100" />
            {steps.map((s, i) => (
              <div key={i} className="text-center relative">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-50 border-2 border-brand-200 text-4xl mb-6 relative z-10">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-brand-500 tracking-widest mb-2">
                  SCHRITT {s.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm max-w-xs mx-auto">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Berechnen Sie Ihre Einsparung
              </h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                Wie viel Zeit und Geld spart Ihr Pflegedienst mit Aivio Voice-Dokumentation?
                Stellen Sie die Anzahl Ihrer Pflegekräfte ein – wir rechnen es vor.
              </p>
              <ul className="space-y-3">
                {[
                  "Ø 2,5 Stunden Dokumentationszeit pro Pflegekraft/Woche eingespart",
                  "22 €/h Personalkosten als Berechnungsbasis",
                  "15 % weniger Dokumentationsfehler → weniger Rückläufer",
                  "Investition amortisiert sich typisch in 6–8 Wochen",
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
            <RoiCalculator />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Häufige Fragen
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
            <strong>DSGVO-Hinweis:</strong> Alle Sprach- und Patientendaten werden ausschließlich auf
            zertifizierten EU-Servern in Deutschland verarbeitet und gespeichert. Aivio ist nach ISO 27001
            zertifiziert. Eine Datenschutzfolgenabschätzung (DSFA) liegt vor.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="bg-brand-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Jetzt live erleben
          </h2>
          <p className="text-white/80 mb-10 text-lg leading-relaxed">
            Vereinbaren Sie eine kostenlose 30-Minuten-Demo oder sehen Sie sich unseren
            geführten Walkthrough an – ohne Anmeldung, direkt im Browser.
          </p>
          <VoiceCtaButtons />
          <div className="mt-8 text-sm text-white/60">
            Auch interessant:{" "}
            <Link href="/features" className="underline underline-offset-2 hover:text-white">
              Alle Aivio-Features →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
