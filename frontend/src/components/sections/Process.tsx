import { motion } from "framer-motion";
import { SectionHeading } from "../ui-blocks/SectionHeading";

const steps = [
  { n: "01", title: "Analyse", desc: "Compréhension fine de vos besoins et de votre écosystème." },
  { n: "02", title: "Conception", desc: "Architecture, maquettes et choix technologiques adaptés." },
  { n: "03", title: "Développement", desc: "Réalisation agile avec livraisons itératives." },
  { n: "04", title: "Déploiement", desc: "Mise en production sécurisée et formation des équipes." },
  { n: "05", title: "Support", desc: "Maintenance, évolutions et accompagnement continu." },
];

export function Process() {
  return (
    <section className="py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Notre méthode" title="Un processus éprouvé" subtitle="De l'idée à la production, nous vous accompagnons à chaque étape." />
        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="font-display text-3xl font-bold text-gradient">{s.n}</div>
              <div className="mt-3 font-semibold">{s.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
