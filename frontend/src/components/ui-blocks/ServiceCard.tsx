import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export function ServiceCard({ icon: Icon, title, description, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-elegant"
    >
      <div className="absolute -inset-px rounded-2xl bg-accent-gradient opacity-0 transition-opacity group-hover:opacity-25 -z-10 blur-lg" />
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground shadow-glow transition-transform group-hover:scale-110 group-hover:rotate-3">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
