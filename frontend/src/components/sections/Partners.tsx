import { motion } from "framer-motion";
import { SectionHeading } from "../ui-blocks/SectionHeading";

// Pour intégrer un vrai logo : déposer le fichier dans src/assets/partners/
// puis remplacer `initials` par une <img> sur ce partenaire.
export const PARTNERS = [
  { name: "Bdom Kikwit", initials: "BK", url: "#" },
  { name: "Champion Motors", initials: "CM", url: "#" },
  { name: "Hôpital Général de Kisantu", initials: "HGK", url: "#" },
  { name: "Hôpital Saint joseph de Kinshasa", initials: "HSJ", url: "#" },
  { name: "Auto All", initials: "AM", url: "#" },

];

export function Partners() {
  return (
    <section className="py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Nos partenaires" title="Ils nous accompagnent" subtitle="Des organisations de confiance qui partagent notre vision de l'innovation." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-elegant"
            >
              <div className="grid h-16 w-16 place-items-center rounded-xl bg-accent-gradient text-2xl font-bold text-accent-foreground shadow-glow">
                {p.initials}
              </div>
              <div>
                <div className="font-semibold">{p.name}</div>
                <div className="text-sm text-muted-foreground">Partenaire de confiance</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
