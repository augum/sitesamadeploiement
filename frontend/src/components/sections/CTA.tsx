import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="container-x py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-hero-gradient p-12 md:p-20 text-center text-foreground"
      >
        <div className="absolute inset-0 bg-glow" />
        <div className="relative">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Prêt à accélérer votre <span className="text-gradient">transformation numérique</span> ?
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-foreground/80">
            Discutons de votre projet. Notre équipe vous répond sous 24h.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-8 py-4 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:scale-105"
          >
            Contactez-nous <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
