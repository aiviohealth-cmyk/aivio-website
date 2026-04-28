export const metadata = {
  title: "Aivio — Demnächst verfügbar",
  description: "Wir arbeiten an etwas Besonderem. Bitte schauen Sie bald wieder vorbei.",
  robots: "noindex, nofollow",
};

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-lg mx-auto px-6 py-16 text-center">
        <div className="mb-8">
          <span className="text-4xl font-bold tracking-tight text-slate-900">Aivio</span>
        </div>
        <h1 className="text-2xl font-semibold text-slate-800 mb-4">
          Demnächst verfügbar
        </h1>
        <p className="text-slate-500 leading-relaxed">
          Wir arbeiten mit Hochdruck an unserer Plattform und melden uns bald.
          Für Rückfragen erreichen Sie uns unter{" "}
          <a
            href="mailto:hallo@aivio.health"
            className="text-blue-600 hover:underline"
          >
            hallo@aivio.health
          </a>
          .
        </p>
      </div>
    </div>
  );
}
