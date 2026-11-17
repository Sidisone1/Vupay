import Link from "next/link";

export function Menu({ titre, liens }: { titre: string; liens: { href: string; libelle: string }[] }) {
  return (
    <main className="mx-auto max-w-xl px-4 py-6">
      <h1 className="text-2xl font-bold">{titre}</h1>
      <nav className="mt-4 grid gap-2">
        {liens.map((l) => (
          <Link key={l.href} href={l.href} className="rounded-xl bg-white px-4 py-3 shadow-sm">
            {l.libelle}
          </Link>
        ))}
      </nav>
    </main>
  );
}
