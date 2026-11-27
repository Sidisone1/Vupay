import { Portefeuille } from "@/components/Portefeuille";

export default function Page({ searchParams }: { searchParams: { avant?: string } }) {
  return <Portefeuille espace="annonceur" avant={searchParams.avant} />;
}
