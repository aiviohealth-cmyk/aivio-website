const steps = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    label: "Prüfen",
    detail: "Hessen-spezifische Leistungskomplexe",
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    label: "Validieren",
    detail: "SGB XI/V & Hessen-Rahmenverträge",
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10,9 9,9 8,9" />
      </svg>
    ),
    label: "Reporting",
    detail: "MDK-fertiger Compliance-Bericht",
  },
];

export default function CompliancePruefungDiagram() {
  return (
    <div className="relative w-full">
      {/* Desktop: horizontal flow */}
      <div className="hidden md:flex items-center justify-center gap-0">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center text-center w-52">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-brand-700 text-white flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center border-2 border-white">
                  {step.number}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{step.label}</h3>
              <p className="mt-1 text-xs text-gray-400 leading-relaxed">{step.detail}</p>
            </div>
            {i < steps.length - 1 && (
              <svg
                className="flex-shrink-0 text-brand-300 mx-2"
                width="48"
                height="24"
                viewBox="0 0 48 24"
                fill="none"
              >
                <path
                  d="M0 12 H38 M30 4 L46 12 L30 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical flow */}
      <div className="flex md:hidden flex-col items-center gap-0">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="flex items-center gap-4 w-full max-w-xs">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-brand-700 text-white flex items-center justify-center shadow-md">
                  {step.icon}
                </div>
                <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center border-2 border-white">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">{step.label}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{step.detail}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <svg
                className="text-brand-300 my-2"
                width="24"
                height="32"
                viewBox="0 0 24 32"
                fill="none"
              >
                <path
                  d="M12 0 V22 M4 14 L12 28 L20 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
