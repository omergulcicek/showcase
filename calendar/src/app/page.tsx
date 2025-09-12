"use client";

import Link from "next/link";
import { Copy } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { CALENDAR_SOURCES } from "@/constants/calendar-sources";
import { copyToClipboard } from "@/utils/copy-to-clipboard";

export default function Home() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-8 px-8 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-slate-900">
          Takvim İndirme
        </h1>
      </div>
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
        {CALENDAR_SOURCES.map((c) => {
          const subscribeUrl = `${
            typeof window !== "undefined" ? window.location.origin : ""
          }/${c.slug}`;
          return (
            <div key={c.slug} className="flex items-center gap-2">
              <Button
                variant="outline"
                aria-label={`${c.slug} subscribe url copy`}
                onClick={async () => {
                  const ok = await copyToClipboard(subscribeUrl);

                  if (ok) {
                    toast.success(`${c.displayName} AbonelikURL'i kopyalandı.`);
                  } else {
                    toast.error("URL kopyalanamadı.");
                  }
                }}
              >
                <span>{c.displayName} Takvim Aboneliği</span>
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          );
        })}
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          Takvim aboneliği hakkında hızlı bilgilendirme
        </h2>

        <p>Takvimi cihazınıza abone olarak eklemek için:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Abonelik URL’sini kopyalayın.</li>
          <li>
            <strong>Mac</strong>: Takvim &gt; Dosya &gt; Yeni Takvim Aboneliği.
          </li>
          <li>
            <strong>iPhone/iPad</strong>: Takvim &gt; Takvimler &gt; Takvim Ekle
            &gt; Abonelik Takvimi Ekle.
          </li>
        </ul>

        <p className="mt-4">Detaylı adımlar ve destek için:</p>

        <ul className="list-disc list-inside pl-4">
          <li>
            <Link
              href="https://support.apple.com/tr-tr/guide/calendar/icl1022/mac?ref=omergulcicek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Mac’te takvimlere abone olma
            </Link>
          </li>
          <li>
            <Link
              href="https://support.apple.com/tr-tr/102301?ref=omergulcicek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              iCloud takvim aboneliklerini kullanma
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
