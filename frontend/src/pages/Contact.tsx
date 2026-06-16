import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Contact() {
  usePageMeta({
    title: "Contact — Samasoft",
    description: "Contactez Samasoft pour discuter de votre projet de transformation numérique.",
    ogTitle: "Contact — Samasoft",
    ogDescription: "Parlons de votre projet.",
    canonical: "/contact",
  });
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message envoyé ! Nous vous répondrons sous 24h.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <>
      <section className="bg-hero-gradient py-20 text-foreground">
        <div className="container-x text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold">Parlons de <span className="text-gradient">votre projet</span></h1>
          <p className="mt-4 mx-auto max-w-2xl text-foreground/80">Notre équipe vous répond sous 24h ouvrées.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold">Informations</h2>
            {[
              { icon: MapPin, label: "Adresse", value: "Kinshasa, RDC" },
              { icon: Mail, label: "Email", value: "contact@samasoft.cd" },
              { icon: Phone, label: "Téléphone", value: "+243 000 000 000" },
            ].map((i) => (
              <div key={i.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-gradient text-accent-foreground shadow-glow">
                  <i.icon size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{i.label}</div>
                  <div className="mt-0.5 font-medium">{i.value}</div>
                </div>
              </div>
            ))}

            <div className="overflow-hidden rounded-2xl border border-border h-64">
              <iframe
                title="Localisation Samasoft"
                src="https://www.google.com/maps?q=Kinshasa&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-8 shadow-elegant space-y-5">
            <h2 className="font-display text-2xl font-bold">Envoyez-nous un message</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nom complet" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Téléphone" name="phone" />
              <Field label="Organisation" name="org" />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-accent transition-all focus:ring-2"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-7 py-3 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:scale-105 disabled:opacity-60"
            >
              {sending ? "Envoi…" : (<>Envoyer <Send size={16} /></>)}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}{required && <span className="text-accent"> *</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-accent transition-all focus:ring-2"
      />
    </div>
  );
}
