import { Heart, GraduationCap, Building2, ShieldCheck, Code2, Cloud } from "lucide-react";
import { SectionHeading } from "../ui-blocks/SectionHeading";
import { ServiceCard } from "../ui-blocks/ServiceCard";

export const SERVICES = [
  { icon: Heart, title: "Santé numérique", description: "Dossier médical électronique, gestion hospitalière, tableaux de bord cliniques et gestion des rendez-vous." },
  { icon: GraduationCap, title: "Éducation numérique", description: "Gestion académique, portails étudiants, plateformes e-learning et gestion des résultats." },
  { icon: Building2, title: "Solutions entreprises", description: "ERP, CRM, gestion RH et financière sur mesure pour optimiser vos opérations." },
  { icon: ShieldCheck, title: "Cybersécurité", description: "Audit, surveillance, gestion des accès et formation aux bonnes pratiques." },
  { icon: Code2, title: "Développement logiciel", description: "Applications web et mobiles performantes, évolutives et durables." },
  { icon: Cloud, title: "Hébergement Cloud", description: "Infrastructure scalable, haute disponibilité et sauvegardes automatiques." },
];

export function Services() {
  return (
    <section className="bg-surface py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Nos services" title="Des solutions pour chaque secteur" subtitle="Une gamme complète de services pour piloter votre transformation numérique de bout en bout." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => <ServiceCard key={s.title} {...s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
