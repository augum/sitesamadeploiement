import { motion } from "framer-motion";
import { Target, Eye, Heart, Users } from "lucide-react";
import { CTA } from "@/components/sections/CTA";
import { usePageMeta } from "@/hooks/usePageMeta";

const VALUES = [
  { icon: Target, title: "Mission", desc: "Accompagner les organisations dans la modernisation de leurs processus métier." },
  { icon: Eye, title: "Vision", desc: "Être le partenaire technologique de référence pour la transformation numérique en Afrique." },
  { icon: Heart, title: "Valeurs", desc: "Excellence, intégrité, innovation et proximité avec nos clients." },
  { icon: Users, title: "Équipe", desc: "Des experts passionnés en développement, design, sécurité et accompagnement." },
];

export default function About() {
  usePageMeta({
    title: "À propos — Samasoft",
    description: "Découvrez Samasoft : notre vision, notre mission, nos valeurs et notre équipe.",
    ogTitle: "À propos — Samasoft",
    ogDescription: "Notre histoire et notre équipe.",
    canonical: "/about",
  });
  return (
    <>
      <section className="bg-hero-gradient py-20 text-foreground">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="font-display text-4xl md:text-6xl font-bold">À propos de <span className="text-gradient">Samasoft</span></h1>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              Depuis notre création, nous mettons la technologie au service des organisations africaines pour relever les défis de demain. Nous combinons expertise métier, savoir-faire technique et accompagnement humain.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[["8+", "Années"], ["120+", "Clients"], ["350+", "Projets"], ["25+", "Experts"]].map(([n, l]) => (
              <div key={l} className="rounded-2xl glass p-6 text-center">
                <div className="font-display text-3xl font-bold text-gradient">{n}</div>
                <div className="mt-1 text-sm text-foreground/70">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-card"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground shadow-glow">
                <v.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-x">
          <h2 className="text-center font-display text-3xl md:text-4xl font-bold">Notre histoire</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            <p>Fondée par des ingénieurs passionnés, Samasoft est née d'une conviction : la technologie doit servir le développement des organisations africaines, en répondant à leurs besoins réels.</p>
            <p>Au fil des années, nous avons accompagné des hôpitaux, écoles, universités, ONG et entreprises privées dans la digitalisation de leurs processus, en livrant des solutions sur mesure, robustes et évolutives.</p>
            <p>Aujourd'hui, notre équipe pluridisciplinaire associe développeurs, designers, experts sécurité et chefs de projet pour offrir un accompagnement de bout en bout, du diagnostic au support.</p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
