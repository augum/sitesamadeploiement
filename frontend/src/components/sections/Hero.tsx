import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import heroFallback from "@/assets/hero/hero-digital.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-hero-gradient text-foreground"
    >
      {/* Background video */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="hero-video absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroFallback}
          aria-hidden="true"
        >
          <source src="/assets/videos/hero-tech.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlay (dark + gradient) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy-deep/85 via-navy-deep/75 to-navy-deep/90" />
      <div className="absolute inset-0 z-10 bg-glow opacity-60" />

      {/* Content */}
      <div className="container-x relative z-20 flex min-h-screen flex-col justify-center py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium"
          >
            <Sparkles size={14} className="text-accent" />
            Samasoft • Innovation • Confiance • Expertise
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Accélérons votre{" "}
            <span className="text-gradient">transformation numérique</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-foreground/85 leading-relaxed"
          >
            Samasoft accompagne hôpitaux, écoles, universités, ONG et entreprises
            dans la modernisation et la digitalisation de leurs services grâce à
            des solutions technologiques sur mesure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:scale-105"
            >
              Découvrir nos services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Demander une démonstration
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-14 flex flex-wrap gap-10 text-sm"
          >
            {[["120+", "Clients"], ["350+", "Projets"], ["8+", "Années"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl font-bold text-gradient">{n}</div>
                <div className="text-foreground/70">{l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
