import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      {eyebrow && (
        <span className="inline-block rounded-full border border-cyan-bright/40 bg-cyan-bright/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
