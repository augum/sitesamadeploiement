import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[var(--navy-deep)] text-foreground">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-gradient">S</span>
            Samasoft
          </div>
          <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
            Accélérons votre transformation numérique avec des solutions innovantes, sécurisées et sur mesure.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="Réseau social" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-colors hover:bg-accent hover:text-accent-foreground hover:border-transparent">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm text-foreground/70">
            <li><Link to="/" className="hover:text-accent">Accueil</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/realisations" className="hover:text-accent">Réalisations</Link></li>
            <li><Link to="/about" className="hover:text-accent">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-foreground/70">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-accent" /> Kinshasa, RDC</li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-accent" /> samasoft40@gmail.com </li>
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 text-accent" /> +243 990 486 561</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase">Newsletter</h4>
          <p className="mt-4 text-sm text-foreground/70">Recevez nos actualités numériques.</p>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Votre email"
              className="min-w-0 flex-1 rounded-full bg-white/10 px-4 py-2 text-sm placeholder:text-white/40 outline-none ring-accent focus:ring-2"
            />
            <button className="rounded-full bg-accent-gradient px-4 py-2 text-sm font-medium text-accent-foreground">OK</button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 text-center text-xs text-foreground/50">
          © {new Date().getFullYear()} Samasoft. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
