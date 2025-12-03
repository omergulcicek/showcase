"use client";

import Link from "next/link";
import Image from "next/image";

import Balancer from "react-wrap-balancer";

import { toast } from "sonner";

import { Github, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { CALENDAR_SOURCES } from "@/constants/calendar-sources";
import { copyToClipboard } from "@/utils/copy-to-clipboard";

export default function HomeApp() {
  return (
    <div>
      <HeroSection />
      <CalendarExample />
      <InfoExample />
      <Footer />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-5 mt-40">
          <h1 className="text-3xl font-semibold">
            Bilgi Takvimlerine Abone Olun
            {/* Subscribe to Knowledge Calendars */}
          </h1>
          <Balancer>
            <p className="max-w-4xl text-center text-muted-foreground">
              <span className="font-medium text-primary">
                Savaşları, liderleri, doğayı ve kültürel tarihleri
              </span>{" "}
              ​​kapsayan özenle seçilmiş etkinlik takvimlerini keşfedin. Bir kez
              abone olun ve zengin, güvenilir tarihi ayrıntıları doğrudan{" "}
              <span className="font-medium text-primary">
                cihazınızın takviminde
              </span>{" "}
              görüntüleyin.
            </p>
          </Balancer>
          {/* <p className="max-w-2xl text-center text-muted-foreground">
            Explore{" "}
            <span className="font-medium text-primary">
              curated event calendars
            </span>{" "}
            covering <span className="font-medium text-primary">wars</span>,{" "}
            <span className="font-medium text-primary">leaders</span>,{" "}
            <span className="font-medium text-primary">
              nature and cultural dates
            </span>
            . Subscribe once and view{" "}
            <span className="font-medium text-primary">
              rich, reliable historical details
            </span>{" "}
            directly in your{" "}
            <span className="font-medium text-primary">device’s calendar</span>.
          </p> */}
          <div className="flex gap-2">
            <Link
              href="https://github.com/omergulcicek/calendar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <Github className="w-4 h-4" />
                <span>Github&apos;da yıldızla</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const CalendarExample = () => {
  return (
    <section>
      <div className="container mx-auto mt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CALENDAR_SOURCES.map((c, index) => {
            const calendarUrl = `${
              typeof window !== "undefined" ? window.location.origin : ""
            }/api/${c.slug}`;

            return (
              <div
                key={c.slug}
                className="flex flex-col gap-2 border border-dashed p-4 rounded-lg relative"
              >
                <div className="absolute -top-6 left-4">
                  <Button variant="outline" size="icon">
                    <span className="text-xl">{c.icon}</span>
                  </Button>
                </div>
                <div className="flex items-center justify-between relative">
                  <h3 className="text-lg font-medium text-slate-800">
                    {c.displayName}
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={`${c.displayName} iOS takvimi kopyala`}
                    onClick={async () => {
                      const ok = await copyToClipboard(calendarUrl);

                      if (ok) {
                        toast.success(
                          `${c.displayName} iOS takvimi kopyalandı.`
                        );
                      } else {
                        toast.error("URL kopyalanamadı.");
                      }
                    }}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  {index === 0 && (
                    <figure className="absolute -right-5 -top-14 select-none">
                      <ArrowIcon className="size-14 -scale-y-100 rotate-120" />
                    </figure>
                  )}
                </div>
                <div className="flex gap-3">
                  <Dialog>
                    <DialogTrigger>
                      <span className="hover:underline underline-offset-4 text-sm">
                        Takvimi görüntüle
                      </span>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          Bu takvime abone olduğunuzda takviminize şunlar
                          eklenecek
                        </DialogTitle>
                        <DialogDescription>
                          <ul className="list-disc list-inside pl-4 space-y-2 h-64 md:h-96 overflow-y-auto text-left mt-4">
                            {c.list?.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const InfoExample = () => {
  return (
    <section>
      <div className="container mx-auto my-40">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Takvim Aboneliği Nasıl Yapılır?
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            iOS (iPhone/iPad) için
          </h3>
          <ol className="list-decimal list-inside pl-4 space-y-2">
            <li>
              Yukarıdan iOS butonuna tıklayarak takvim URL&apos;ini kopyalayın.
            </li>
            <li>
              <strong>Ayarlar</strong> &gt; <strong>Takvim</strong> &gt;{" "}
              <strong>Hesaplar</strong> &gt; <strong>Hesap Ekle</strong> &gt;{" "}
              <strong>Diğer</strong> &gt; <strong>Takvim Aboneliği Ekle</strong>{" "}
              yolunu izleyin.
            </li>
            <li>
              Kopyaladığınız URL&apos;i yapıştırın ve &quot;İleri&quot; butonuna
              basın.
            </li>
            <li>
              Takvime istediğiniz ismi verin, renk seçin ve ne sıklıkta
              güncelleneceğini ayarlayın.
            </li>
            <li>&quot;Kaydet&quot; butonuna basarak işlemi tamamlayın.</li>
          </ol>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Mac için
          </h3>
          <ol className="list-decimal list-inside pl-4 space-y-2">
            <li>
              Yukarıdan iOS butonuna tıklayarak takvim URL&apos;ini kopyalayın.
            </li>
            <li>
              <strong>Takvim</strong> uygulamasını açın.
            </li>
            <li>
              <strong>Dosya</strong> &gt; <strong>Yeni Takvim Aboneliği</strong>{" "}
              menüsüne tıklayın.
            </li>
            <li>
              Kopyaladığınız URL&apos;i yapıştırın ve &quot;Abone Ol&quot;
              butonuna basın.
            </li>
            <li>
              Takvim ayarlarını (isim, renk, güncelleme sıklığı) yapılandırın ve
              &quot;Tamam&quot; butonuna basın.
            </li>
          </ol>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Android (Google Calendar) için
          </h3>
          <ol className="list-decimal list-inside pl-4 space-y-2">
            <li>
              Yukarıdan Android butonuna tıklayarak takvim URL&apos;ini
              kopyalayın.
            </li>
            <li>
              Bilgisayarınızdan{" "}
              <Link
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                calendar.google.com
              </Link>{" "}
              adresine gidin.
            </li>
            <li>
              Sol tarafta <strong>Diğer takvimler</strong> bölümünün yanındaki{" "}
              <strong>+</strong> butonuna tıklayın.
            </li>
            <li>
              <strong>URL&apos;den</strong> seçeneğini seçin.
            </li>
            <li>
              Kopyaladığınız URL&apos;i yapıştırın ve &quot;Takvim ekle&quot;
              butonuna basın.
            </li>
            <li>
              Takvim otomatik olarak Google Calendar hesabınıza eklenecek ve
              Android cihazınızda senkronize olacaktır.
            </li>
          </ol>
        </div>

        <p className="mt-8 text-sm text-slate-600">
          Detaylı adımlar ve resimli anlatım için:
        </p>

        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>
            <Link
              href="https://support.apple.com/tr-tr/guide/calendar/icl1022/mac?ref=omergulcicek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Mac&apos;te takvimlere abone olma
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
          <li>
            <Link
              href="https://support.google.com/calendar/answer/37100?hl=tr&ref=omergulcicek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Google Calendar&apos;a takvim ekleme
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

const ArrowIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="150"
      height="82"
      viewBox="0 0 150 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M67.616 0.147978C57.1498 0.781251 46.3786 4.08834 38.3061 9.10762C31.9231 13.0949 25.4463 19.3807 20.0724 26.7689C15.5199 33.0312 11.249 40.1849 8.76149 45.6967C6.18015 51.4431 4.37323 57.0487 2.26123 65.7738C-0.226243 76.0234 -0.531333 79.0491 0.712402 80.8785C1.1348 81.5118 1.36949 81.6525 2.02656 81.6525H2.84789L3.01215 79.6589C3.15295 77.6887 3.36414 76.774 6.34441 66.0552C8.85535 56.9314 10.7796 51.7714 14.018 45.4152C19.5796 34.4854 27.9103 23.626 35.2554 17.8092C42.5066 12.0629 51.1658 8.5447 61.984 6.90288C63.3216 6.71525 66.1845 6.59798 69.8453 6.59798C76.1813 6.62143 78.9269 6.90288 83.8315 8.09907C93.8987 10.5852 100.352 14.3614 113.259 25.3382C115.817 27.5194 121.003 32.4918 121.003 32.7732C121.003 32.8436 120.346 32.7732 119.548 32.6091C117.389 32.1634 116.286 32.2103 115.136 32.8202C113.939 33.4534 113.024 34.9311 113.024 36.2211C113.024 38.1678 114.291 39.5985 117.131 40.8651C117.905 41.1934 121.918 43.1636 126.048 45.2276C134.332 49.3791 135.857 50.0358 139.494 51.0443C143.906 52.2874 146.511 51.9356 148.271 49.8951C149.82 48.0891 150.031 45.6498 148.858 43.2574C148.506 42.5772 147.027 40.4898 145.549 38.6134C142.404 34.6496 141.7 33.5472 140.433 30.592C139.236 27.8009 138.18 24.0951 136.843 18.0438C134.543 7.44234 134.684 7.95834 134.027 8.61507C133.229 9.41252 132.032 17.8796 132.032 22.7112C132.032 26.1122 132.29 28.1996 133.088 31.4832C133.393 32.7732 133.628 33.8287 133.604 33.8522C133.581 33.8756 132.76 32.8202 131.797 31.5067C127.503 25.69 116.826 16.3551 107.275 10.0927C99.4838 5.00307 92.6784 2.35271 83.4091 0.851615C78.3872 0.0307056 73.248 -0.180385 67.616 0.147978Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto pb-20">
        <p className="text-center">
          Made with ❤️ by{" "}
          <Link
            href="https://omergulcicek.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            @omergulcicek
          </Link>
        </p>
      </div>
    </footer>
  );
};
