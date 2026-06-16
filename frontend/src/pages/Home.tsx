import { usePageMeta } from "@/hooks/usePageMeta";
import { Hero } from "@/components/sections/Hero";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Partners } from "@/components/sections/Partners";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  usePageMeta({
    title: "Samasoft — Accélérons votre transformation numérique",
    description: "Samasoft accompagne hôpitaux, écoles, ONG et entreprises dans la digitalisation de leurs processus métier.",
    ogTitle: "Samasoft — Accélérons votre transformation numérique",
    ogDescription: "Solutions technologiques innovantes pour la transformation numérique.",
    canonical: "/",
  });
  return (
    <>
      <Hero />
      <WhyChoose />
      <Services />
      <Stats />
      <Process />
      <Testimonials />
      <Team />
      <Partners />
      <CTA />
    </>
  );
}
