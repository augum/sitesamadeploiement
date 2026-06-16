import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui-blocks/SectionHeading";
import merveilleImg from "@/assets/team/merveille-mpudi.jpg";
import augustinImg from "@/assets/team/augustin-makuma.jpg";
import sacreImg from "@/assets/team/sacre-ndombasi.jpg";

const MEMBERS = [
  {
    name: "Merveille Mpudi",
    role: "CEO",
    image: merveilleImg,
  },
  {
    name: "Augustin Makuma",
    role: "Co-Founder",
    image: augustinImg,
  },
  {
    name: "Sacre Ndombasi",
    role: "Co-Founder",
    image: sacreImg,
  },
];

export function Team() {
  return (
    <section className="py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Nos équipes"
          title="Les visages de Samasoft"
          subtitle="Une équipe de passionnés dédiée à transformer votre vision numérique en réalité."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERS.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-2xl border border-border bg-card p-4 shadow-card transition-shadow hover:shadow-elegant"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={`Portrait de ${member.name}, ${member.role} chez Samasoft`}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 text-center">
                <h3 className="font-display text-lg font-bold">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
