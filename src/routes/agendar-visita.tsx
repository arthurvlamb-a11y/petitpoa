import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Camera, CheckCircle2, Clock, Loader2, MessageCircle, ShieldCheck, Utensils } from "lucide-react";
import fachada from "@/assets/fachada.webp.asset.json";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "@/components/site/Reveal";
import { SITE, waLink } from "@/lib/site";

const TITLE = "Agende sua visita — Petit Poá Escola Infantil em Estância Velha";
const DESC = "Agende uma visita à Petit Poá, escola de educação infantil no Centro de Estância Velha/RS. Conheça berçário, maternal e pré-escola pessoalmente.";

export const Route = createFileRoute("/agendar-visita")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/agendar-visita" },
    ],
    links: [{ rel: "canonical", href: "/agendar-visita" }],
  }),
  component: Agendar,
});

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  phone: z.string().trim().min(8, "Informe um telefone válido").max(30).regex(/^[0-9()+\-\s]+$/, "Use apenas números"),
  child_age: z.string().trim().min(1, "Selecione a idade").max(50),
  shift: z.string().trim().min(1, "Selecione o turno").max(50),
  message: z.string().trim().max(1000).optional(),
});

const field = "h-14 w-full rounded-2xl border bg-background px-5 text-base text-ink outline-none transition focus:border-primary focus:ring-4 focus:ring-ring/20";

function Agendar() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((i) => [i.path[0] as string, i.message])));
      return;
    }
    setErrors({});
    setStatus("sending");
    const { error } = await supabase.from("visit_requests").insert({ ...parsed.data, message: parsed.data.message || null });
    setStatus(error ? "error" : "ok");
  }

  return (
    <section className="bg-cream pb-24 pt-28 md:pt-36">
      <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <Reveal><p className="eyebrow">Agende sua visita</p></Reveal>
          <Reveal delay={80}><h1 className="mt-4 text-4xl leading-tight md:text-6xl">A melhor forma de escolher é sentindo de perto.</h1></Reveal>
          <Reveal delay={160}><p className="mt-5 text-lg text-muted-foreground">Preencha os dados e nossa equipe entra em contato para combinar o melhor horário.</p></Reveal>

          <Reveal delay={220} className="mt-10 rounded-[2rem] bg-card p-6 shadow-soft md:p-10">
            {status === "ok" ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="breathe mx-auto h-14 w-14 text-sage" />
                <h2 className="mt-5 text-3xl">Recebemos seu pedido!</h2>
                <p className="mt-3 text-muted-foreground">Em breve entraremos em contato para confirmar sua visita.</p>
                <a href={waLink()} target="_blank" rel="noopener" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-whatsapp px-6 font-bold text-primary-foreground"><MessageCircle className="h-5 w-5" /> Prefere falar agora?</a>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5">
                <Field label="Seu nome" error={errors["name"]}><input name="name" autoComplete="name" maxLength={100} className={field} /></Field>
                <Field label="Telefone / WhatsApp" error={errors["phone"]}><input name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={30} placeholder="(51) 9 0000-0000" className={field} /></Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Idade da criança" error={errors["child_age"]}>
                    <select name="child_age" defaultValue="" className={field}>
                      <option value="" disabled>Selecione</option>
                      {["4 a 12 meses", "1 ano", "2 anos", "3 anos", "4 anos", "5 anos", "Ainda vai nascer"].map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                  <Field label="Turno desejado" error={errors["shift"]}>
                    <select name="shift" defaultValue="" className={field}>
                      <option value="" disabled>Selecione</option>
                      {["Integral", "Manhã", "Tarde", "Ainda não sei"].map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label="Mensagem (opcional)"><textarea name="message" rows={4} maxLength={1000} className={`${field} h-auto py-4`} placeholder="Conte um pouco sobre seu filho ou suas dúvidas" /></Field>
                {status === "error" && <p className="text-sm text-destructive">Não conseguimos enviar agora. Tente novamente ou fale pelo WhatsApp.</p>}
                <button disabled={status === "sending"} className="ripple-btn flex h-14 items-center justify-center gap-2 rounded-2xl bg-coral text-lg font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.01] disabled:opacity-70">
                  {status === "sending" && <Loader2 className="h-5 w-5 animate-spin" />} Quero agendar minha visita
                </button>
              </form>
            )}
          </Reveal>
        </div>

        <aside className="space-y-5">
          <Reveal className="overflow-hidden rounded-[2rem] shadow-lift">
            <img src={fachada.url} alt="Entrada da Petit Poá" loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
          </Reveal>
          <Reveal delay={80} className="grid grid-cols-2 gap-3">
            {[{ I: Camera, t: "Câmeras para os pais" }, { I: Clock, t: "Integral até 19h" }, { I: Utensils, t: "Alimentação inclusa" }, { I: ShieldCheck, t: "Segurança 24h" }].map(({ I, t }) => (
              <div key={t} className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-soft"><I className="h-5 w-5 shrink-0 text-primary" /><span className="text-sm font-semibold text-ink">{t}</span></div>
            ))}
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

function Field({ label, error, children }: { label: string; error?: string | undefined; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-ink">{label}</span>
      {children}
      {error && <span className="text-sm text-destructive">{error}</span>}
    </label>
  );
}
