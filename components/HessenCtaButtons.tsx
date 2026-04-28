"use client";

export default function HessenCtaButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:demo@aivio.health?subject=Hessen Compliance Demo (anonymisierte Daten)"
        className="inline-block bg-white text-brand-700 hover:bg-brand-50 font-semibold px-8 py-3 rounded-xl transition-colors text-center"
      >
        Demo mit anonymisierten Daten →
      </a>
      <a
        href="#walkthrough"
        className="inline-block border border-white/30 hover:bg-white/10 px-8 py-3 rounded-xl transition-colors text-center"
      >
        Audit-Walkthrough ansehen
      </a>
    </div>
  );
}
