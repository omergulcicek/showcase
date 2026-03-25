import { UserCard } from "@/components/user-card";

export const metadata = {
  title: "Maintainers",
  description:
    "The developers ensuring the continuity of ViraStack projects and contributing to the open-source ecosystem.",
};

export default function MaintainersPage() {
  return (
    <main className="flex min-h-[calc(100vh-160px)] flex-col gap-8 px-12 md:px-16 pb-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-black">Maintainers</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          The developers ensuring the continuity of ViraStack projects and
          contributing to the open-source ecosystem.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          To contribute to the projects or offer support, you can get in touch
          through our community channels.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <UserCard
          name="Ömer Gülçiçek"
          description="Founder, Frontend Engineer"
          image="/profile.jpg"
          links={{
            website: "https://omergulcicek.com",
            twitter: "https://twitter.com/omergulcicek",
            github: "https://github.com/omergulcicek",
          }}
        />
      </div>
    </main>
  );
}
