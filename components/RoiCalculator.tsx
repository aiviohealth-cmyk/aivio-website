"use client";

import { useState } from "react";

export default function RoiCalculator() {
  const [staff, setStaff] = useState(10);

  const hoursPerWeekSaved = staff * 2.5;
  const hoursPerYearSaved = hoursPerWeekSaved * 52;
  const costPerHour = 22; // avg German nursing staff hourly cost
  const annualSaving = hoursPerYearSaved * costPerHour;
  const errorReduction = Math.round(staff * 8 * 0.15); // ~15% error reduction per month

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      <h3 className="text-xl font-bold text-slate-900 mb-6">ROI-Rechner</h3>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Anzahl Pflegekräfte: <span className="text-brand-600 font-bold">{staff}</span>
        </label>
        <input
          type="range"
          min={1}
          max={100}
          value={staff}
          onChange={(e) => setStaff(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>1</span>
          <span>100</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-brand-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-brand-700">
            {hoursPerWeekSaved.toLocaleString("de-DE")}h
          </div>
          <div className="text-xs text-gray-500 mt-1">gesparte Stunden / Woche</div>
        </div>
        <div className="bg-brand-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-brand-700">
            {hoursPerYearSaved.toLocaleString("de-DE")}h
          </div>
          <div className="text-xs text-gray-500 mt-1">gesparte Stunden / Jahr</div>
        </div>
        <div className="bg-green-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-green-700">
            {annualSaving.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })}
          </div>
          <div className="text-xs text-gray-500 mt-1">Kosteneinsparung / Jahr</div>
        </div>
        <div className="bg-green-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-green-700">
            -{errorReduction}
          </div>
          <div className="text-xs text-gray-500 mt-1">Dokumentationsfehler / Monat</div>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-4">
        * Berechnung basiert auf Ø 2,5h Dokumentationszeit/Woche, 22 €/h Personalkosten und 15% Fehlerreduktion.
      </p>
    </div>
  );
}
