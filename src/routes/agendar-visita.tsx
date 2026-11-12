import { createFileRoute } from "@tanstack/react-router";
import { cloneElement, useId, useState, type FormEvent, type ReactElement } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import visitaFoto from "@/assets/visita-escola.webp.asset.json";
import { Reveal } from "@/components/site/Reveal";
import { SITE, waLink } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { CHILD_AGES, SHIFTS, visitMessage, visitSchema } from "@/lib/visit";

const TITLE = "Agende sua visita — Petit Poá Escola Infantil em Estância Velha";
const DESC = "Agende uma visita à Petit Poá, escola de educação infantil no Centro de Estância Velha/RS. Conheça berçário, maternal e pré-escola pessoalmente.";

export const Route = createFileRoute("/agendar-visita")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.origin + "/agendar-visita" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE.origin + "/agendar-visita" }],
  }),
  component: Agendar,
});

const field = "h-14 w-full rounded-2xl border bg-background px-5 text-base text-ink outline-none transition focus:border-primary focus:ring-4 focus:ring-ring/20";

function Agendar() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = visitSchema.safeParse(data);
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((i) => [i.path[0] as string, i.message])));
      const first = parsed.error.issues[0]?.path[0];
      if (typeof first === "string") form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setErrors({});
    window.open(waLink(visitMessage(parsed.data)), "_blank", "noopener");
    setSent(true);
  }

  return (
    <section className="bg-cream pb-24 pt-28 md:pt-36">
      <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <Reveal><p className="eyebrow">Agende sua visita</p></Reveal>
          <Reveal delay={80}><h1 className="mt-4 text-4xl leading-tight md:text-6xl">A melhor forma de escolher é sentindo de perto.</h1></Reveal>
          <Reveal delay={160}><p className="mt-5 text-lg text-muted-foreground">Preencha os dados e o WhatsApp da escola abre com a mensagem pronta — é só enviar.</p></Reveal>

          <Reveal delay={220} className="mt-10 rounded-[2rem] bg-card p-6 shadow-soft md:p-10">
            {sent ? (
              <div className="py-10 text-center" role="status" aria-live="polite">
                <CheckCircle2 className="breathe mx-auto h-14 w-14 text-sage" />
                <h2 className="mt-5 text-3xl">Mensagem pronta!</h2>
                <p className="mt-3 text-muted-foreground">Abrimos o WhatsApp da escola com seus dados. É só enviar a mensagem para combinarmos a visita.</p>
                <button type="button" onClick={() => setSent(false)} className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-sun px-6 font-bold text-navy shadow-soft">Preencher de novo</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5">
                <Field label="Seu nome" error={errors["name"]}><input name="name" autoComplete="name" maxLength={100} className={field} /></Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Idade da criança" error={errors["child_age"]}>
                    <select name="child_age" defaultValue="" className={field}>
                      <option value="" disabled>Selecione</option>
                      {CHILD_AGES.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                  <Field label="Turno desejado" error={errors["shift"]}>
                    <select name="shift" defaultValue="" className={field}>
                      <option value="" disabled>Selecione</option>
                      {SHIFTS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label="Mensagem (opcional)" error={errors["message"]}><textarea name="message" rows={4} maxLength={1000} className={`${field} h-auto py-4`} placeholder="Conte suas dúvidas ou preferência de horário" /></Field>
                <p className="text-sm leading-relaxed text-muted-foreground">Ao tocar em agendar, o WhatsApp da escola abre com uma mensagem pronta com seus dados — é só enviar. Nada fica salvo no site.</p>
                <Button type="submit" className="ripple-btn flex h-14 whitespace-normal items-center justify-center gap-2 rounded-2xl bg-sun text-base font-bold text-navy shadow-soft transition-transform hover:bg-sun/90 hover:scale-[1.01]">
                  <MessageCircle className="h-5 w-5" /> Agendar pelo WhatsApp
                </Button>
              </form>
            )}
          </Reveal>
        </div>

        <aside className="space-y-5">
          <Reveal className="overflow-hidden rounded-[2rem] shadow-lift">
            <img src={visitaFoto.url} alt="Jardim e pátio da Petit Poá" loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
          </Reveal>
          <Reveal delay={140} className="overflow-hidden rounded-[2rem] bg-card shadow-soft">
            <iframe title="Mapa da Petit Poá" src={SITE.mapEmbed} loading="lazy" className="h-64 w-full border-0" referrerPolicy="no-referrer-when-downgrade" />
            <p className="p-5 text-sm text-muted-foreground">{SITE.street} — {SITE.district}, {SITE.city}/{SITE.state}</p>
          </Reveal>
          <Reveal delay={200}>
            <a href={waLink()} target="_blank" rel="noopener" className="ripple-btn flex h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp font-bold text-primary-foreground shadow-soft"><MessageCircle className="h-5 w-5" /> Falar no WhatsApp</a>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string | undefined; children: ReactElement<{ id?: string; "aria-invalid"?: boolean; "aria-describedby"?: string | undefined; "aria-required"?: boolean }> }) {
  const id = useId();
  return (
    <label htmlFor={id} className="grid gap-2">
      <span className="text-sm font-semibold text-ink">{label}</span>
      {cloneElement(children, { id, "aria-invalid": !!error, "aria-describedby": error ? `${id}-error` : undefined, "aria-required": !label.includes("opcional") })}
      {error && <span id={`${id}-error`} role="alert" className="text-sm text-destructive">{error}</span>}
    </label>
  );
}
