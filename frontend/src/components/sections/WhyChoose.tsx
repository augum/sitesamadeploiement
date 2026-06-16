import { Award, HeartHandshake, ShieldCheck, Sparkles, Headphones } from "lucide-react";
import { SectionHeading } from "../ui-blocks/SectionHeading";
import { ServiceCard } from "../ui-blocks/ServiceCard";

const items = [
  { icon: Award, title: "Expertise métier", description: "Une équipe d'experts sectoriels qui comprend vos enjeux." },
  { icon: HeartHandshake, title: "Accompagnement personnalisé", description: "Chaque projet est conçu selon vos besoins spécifiques." },
  { icon: ShieldCheck, title: "Sécurité des données", description: "Protection et conformité aux meilleurs standards internationaux." },
  { icon: Sparkles, title: "Innovation continue", description: "Veille technologique et solutions à la pointe." },
  { icon: Headphones, title: "Support réactif", description: "Une équipe disponible pour vous accompagner au quotidien." },
];

export function WhyChoose() {
  return (
    <section className="py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Pourquoi Samasoft" title="Un partenaire de confiance" subtitle="Nous combinons expertise technique et compréhension métier pour livrer des solutions qui transforment durablement votre organisation." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => <ServiceCard key={it.title} {...it} index={i} />)}
        </div>
      </div>
    </section>
  );
}
