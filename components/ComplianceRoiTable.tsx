const rows = [
  {
    metric: "Compliance-Prüfungszeit",
    before: "4,5 Std./Woche",
    after: "0,5 Std./Woche",
    delta: "−89 %",
    positive: true,
  },
  {
    metric: "MDK-Beanstandungen",
    before: "3 in 12 Monaten",
    after: "0 in 6 Monaten",
    delta: "−100 %",
    positive: true,
  },
  {
    metric: "Rückforderungen Krankenkassen",
    before: "4.200 €",
    after: "0 €",
    delta: "−4.200 €",
    positive: true,
  },
  {
    metric: "Admin-Aufwand Pflegeleitung",
    before: "12 Std./Monat",
    after: "2 Std./Monat",
    delta: "−83 %",
    positive: true,
  },
  {
    metric: "ROI-Amortisation",
    before: "—",
    after: "6 Wochen",
    delta: "",
    positive: true,
  },
];

export default function ComplianceRoiTable() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-brand-700 text-white px-6 py-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-200 mb-1">
          Fallstudie · Frankfurt am Main
        </p>
        <h3 className="text-lg font-bold">Ambulanter Pflegedienst · 18 Mitarbeiter</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-gray-100">
              <th className="text-left px-6 py-3 font-semibold text-slate-700">Kennzahl</th>
              <th className="text-center px-4 py-3 font-semibold text-slate-500">Vorher</th>
              <th className="text-center px-4 py-3 font-semibold text-slate-500">Nachher</th>
              <th className="text-center px-4 py-3 font-semibold text-green-700">Verbesserung</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-800">{row.metric}</td>
                <td className="px-4 py-4 text-center text-gray-400 line-through">{row.before}</td>
                <td className="px-4 py-4 text-center font-semibold text-brand-700">{row.after}</td>
                <td className="px-4 py-4 text-center">
                  {row.delta && (
                    <span className="inline-block bg-green-50 text-green-700 font-bold text-xs px-2 py-1 rounded-full">
                      {row.delta}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 bg-amber-50 border-t border-amber-100 text-xs text-amber-700">
        <strong>Hinweis:</strong> Ergebnisse basieren auf einem anonymisierten Kundenprojekt in Frankfurt am Main (Q1 2026).
        Individuelle Ergebnisse können variieren. Diese Darstellung stellt keine Rechts- oder Compliance-Beratung dar.
      </div>
    </div>
  );
}
