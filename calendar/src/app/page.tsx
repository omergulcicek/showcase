"use client";

import { Button } from "@/components/ui/button";
import { CALENDAR_SOURCES } from "@/constants/calendar-sources";

export default function Home() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-slate-900 mb-2">
          Takvim İndirme
        </h1>
        <p className="text-slate-600 mb-8">
          JSON → ICS dönüşümü ile açık kaynak takvimler.
        </p>
      </div>
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
        {CALENDAR_SOURCES.map((c) => {
          const subscribeUrl = `${
            typeof window !== "undefined" ? window.location.origin : ""
          }/api/ics/${c.slug}`;
          return (
            <div key={c.slug} className="flex items-center gap-2">
              <Button
                variant="outline"
                aria-label={`${c.slug} subscribe url copy`}
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(subscribeUrl);
                    alert("Abonelik URL'i kopyalandı.");
                  } catch {
                    alert("URL kopyalanamadı.");
                  }
                }}
              >
                {c.displayName} Takvim Abonelik URL&apos;i kopyala
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
