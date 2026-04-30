"use client";

function trackCta(label: string) {
  if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
    (window as unknown as { gtag: Function }).gtag("event", "cta_click", {
      event_category: "voice_doku",
      event_label: label,
    });
  }
}

export default function VoiceCtaButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="mailto:demo@aivio.health?subject=Demo%3A%20Voice-Dokumentation"
        onClick={() => trackCta("demo_request")}
        className="bg-white text-brand-700 hover:bg-brand-50 font-semibold px-10 py-4 rounded-xl text-lg transition-colors"
      >
        Demo anfragen →
      </a>
      <a
        id="walkthrough"
        href="mailto:demo@aivio.health?subject=Walkthrough%3A%20Voice-Dokumentation"
        onClick={() => trackCta("walkthrough_request")}
        className="border border-white/40 hover:bg-white/10 px-10 py-4 rounded-xl text-lg transition-colors"
      >
        Walkthrough ansehen
      </a>
    </div>
  );
}
