import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "../ui-blocks/SectionHeading";

const items = [
  { name: "Dr. Mwamba", role: "Directeur, Hôpital Général de Kisantu", quote: "Samasoft a transformé notre gestion hospitalière. Le dossier médical électronique est devenu indispensable." },
  { name: "Mme Lukeni", role: "Directrice académique", quote: "La plateforme de gestion académique nous fait gagner un temps précieux et améliore l'expérience étudiante." },
  { name: "M. Kalala", role: "CEO, Champions Motor", quote: "Une équipe à l'écoute, des livraisons à temps et une solution qui dépasse nos attentes." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % items.length);
  const prev = () => setI((i - 1 + items.length) % items.length);

  return (
    <section className="bg-surface py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Témoignages" title="Ils nous font confiance" />
        <div className="mt-14 mx-auto max-w-3xl rounded-3xl bg-card p-10 shadow-elegant relative">
          <Quote className="absolute top-6 left-6 text-accent/30" size={40} />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg md:text-xl leading-relaxed">"{items[i].quote}"</p>
              <div className="mt-6">
                <div className="font-semibold">{items[i].name}</div>
                <div className="text-sm text-muted-foreground">{items[i].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {items.map((_, idx) => (
                <button key={idx} onClick={() => setI(idx)} aria-label={`Témoignage ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-accent" : "w-2 bg-border"}`} />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} aria-label="Précédent" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-muted"><ChevronLeft size={16} /></button>
              <button onClick={next} aria-label="Suivant" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-muted"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
