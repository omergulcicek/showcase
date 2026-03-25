import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-160px)] flex-col gap-8 px-12 md:px-16 pb-8">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        <div className="flex flex-col items-center justify-center col-span-1">
          <Image
            src="/virastack.svg"
            alt="ViraStack"
            width={400}
            height={400}
            className="drop-shadow-lg"
            priority
            quality={100}
            unoptimized
          />
        </div>
        <div className="flex flex-col items-start justify-center col-span-2">
          <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-black mb-8">
            ViraStack
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground">
            High-performance Frontend architectures and developer-centric tools
            for modern software standards.
          </p>
        </div>
      </section>
    </main>
  );
}
