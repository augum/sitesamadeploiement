import { Counter } from "../ui-blocks/Counter";

export function Stats() {
  return (
    <section className="bg-hero-gradient py-20 text-foreground">
      <div className="container-x grid gap-10 md:grid-cols-4">
        <Counter value={120} label="Clients accompagnés" />
        <Counter value={350} label="Projets réalisés" />
        <Counter value={50000} label="Utilisateurs servis" />
        <Counter value={8} label="Années d'expérience" />
      </div>
    </section>
  );
}
