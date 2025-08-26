"use client";

import { Button } from "@/components/ui/button";
import { CALENDAR_SOURCES } from "@/constants/calendar-sources";

export default function Home() {
  const calendars = CALENDAR_SOURCES.map((c) => ({
    label: `${c.displayName} indir`,
    slug: c.slug,
    url: c.url,
  }));

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
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {calendars.map((c) => {
          const subscribeUrl = `${
            typeof window !== "undefined" ? window.location.origin : ""
          }/api/ics/${c.slug}`;
          return (
            <div key={c.slug} className="flex items-center gap-2">
              <Button
                variant="default"
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
                Liderler URL&#39;yi Kopyala
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
