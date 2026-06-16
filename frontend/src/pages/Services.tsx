import { motion } from "framer-motion";
import { Heart, GraduationCap, Building2, ShieldCheck } from "lucide-react";
import { CTA } from "@/components/sections/CTA";
import { usePageMeta } from "@/hooks/usePageMeta";

const categories = [
  { icon: Heart, title: "Santé numérique", items: ["Dossier médical électronique", "Gestion hospitalière", "Tableaux de bord médicaux", "Gestion des rendez-vous"] },
  { icon: GraduationCap, title: "Éducation numérique", items: ["Gestion académique", "Portails étudiants", "Plateformes E-learning", "Gestion des résultats"] },
  { icon: Building2, title: "Entreprises", items: ["ERP sur mesure", "CRM", "Gestion RH", "Gestion financière"] },
  { icon: ShieldCheck, title: "Cybersécurité", items: ["Audit de sécurité", "Surveillance 24/7", "Gestion des accès", "Formation continue"] },
];

export default function Services() {
  usePageMeta({
    title: "Services — Samasoft",
    description: "Découvrez nos services : santé numérique, éducation, ERP, cybersécurité, cloud et plus.",
    ogTitle: "Services — Samasoft",
    ogDescription: "Solutions complètes pour votre transformation numérique.",
    canonical: "/services",
  });
  return (
    <>
      <section className="bg-hero-gradient py-20 text-foreground">
        <div className="container-x text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold">Nos <span className="text-gradient">services</span></h1>
          <p className="mt-4 mx-auto max-w-2xl text-foreground/80">
            Une expertise complète pour digitaliser chaque dimension de votre organisation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x space-y-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="grid gap-8 rounded-3xl border border-border bg-card p-8 md:p-12 shadow-card lg:grid-cols-[1fr_2fr]"
            >
              <div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-gradient text-accent-foreground shadow-glow">
                  <cat.icon size={24} />
                </div>
                <h2 className="mt-5 font-display text-2xl md:text-3xl font-bold">{cat.title}</h2>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {cat.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 rounded-xl bg-surface p-4">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent-gradient" />
                    <span className="font-medium">{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
