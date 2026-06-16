import { useState } from "react";
import { motion } from "framer-motion";
import { CTA } from "@/components/sections/CTA";
import { usePageMeta } from "@/hooks/usePageMeta";

const PROJECTS = [
  { title: "SIH Hôpital Général de Kisantu", category: "Santé", desc: "Système d'information hospitalier complet : DME, facturation, pharmacie.", tech: ["React", "Node.js", "PostgreSQL"] },
  { title: "Plateforme Bdom Kikwit", category: "Santé", desc: "Gestion des soins à domicile et coordination des équipes médicales.", tech: ["React Native", "Express", "MongoDB"] },
  { title: "Portail universitaire", category: "Éducation", desc: "Inscription en ligne, suivi des notes et délivrance d'attestations.", tech: ["Next.js", "Prisma", "PostgreSQL"] },
  { title: "ERP Champions Motor", category: "Entreprises", desc: "Gestion stocks, ventes, atelier et facturation intégrée.", tech: ["React", "NestJS", "MySQL"] },
  { title: "E-learning lycée", category: "Éducation", desc: "Plateforme de cours en ligne, devoirs et évaluations.", tech: ["Vue.js", "Laravel"] },
  { title: "CRM commercial PME", category: "Entreprises", desc: "Pipeline de vente, suivi clients et reporting décisionnel.", tech: ["React", "Supabase"] },
];

const FILTERS = ["Tous", "Santé", "Éducation", "Entreprises"] as const;

export default function Realisations() {
  usePageMeta({
    title: "Réalisations — Samasoft",
    description: "Découvrez nos projets en santé, éducation et entreprises.",
    ogTitle: "Réalisations — Samasoft",
    ogDescription: "Nos projets de transformation numérique.",
    canonical: "/realisations",
  });
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tous");
  const list = filter === "Tous" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <section className="bg-hero-gradient py-20 text-foreground">
        <div className="container-x text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold">Nos <span className="text-gradient">réalisations</span></h1>
          <p className="mt-4 mx-auto max-w-2xl text-foreground/80">Une sélection de projets livrés à travers la RDC.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-accent-gradient text-accent-foreground shadow-glow"
                    : "border border-border bg-card hover:bg-muted"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-elegant"
              >
                <div className="relative aspect-video overflow-hidden bg-hero-gradient">
                  <div className="absolute inset-0 bg-glow" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-5xl font-bold text-foreground/40">{p.title.charAt(0)}</span>
                  </div>
                  <span className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-xs font-medium text-foreground">{p.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
