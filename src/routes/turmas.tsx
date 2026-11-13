import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Rabbit, BookOpen, Drama, FlaskConical, Footprints, Hand, Languages, Music, Palette, Sprout, Sun, Trees, Waves, Flower2, Sparkles, ShieldCheck } from "lucide-react";
import { CLASS_AGES } from "@/lib/class-ages";
import b1aEstimulos from "@/assets/b1a-sala-estimulos.webp.asset.json";
import bercarioAcolhimento from "@/assets/bercario-acolhimento.webp.asset.json";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Berçário, Maternal I e II, Pré I e II — Petit Poá em Estância Velha";
const DESC = "Conheça as turmas da Petit Poá: Berçário com adaptação, natureza e pilates, Maternal com inglês e horta, Pré-escola com balé, natação e biblioteca. Estância Velha/RS.";

export const Route = createFileRoute("/turmas")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: SITE.origin + "/turmas" },
    ],
    links: [{ rel: "canonical", href: SITE.origin + "/turmas" }],
  }),
  component: Turmas,
});

const CLASSES = [
  {
    id: "bercario", t: "Berçário", age: CLASS_AGES.bercario, bg: "bg-sky-soft", accent: "text-primary",
    lead: "O berçário como extensão de casa, com cuidado e atenção redobrados.",
    w: [{ I: Sun, t: "Solário" }, { I: Hand, t: "Adaptação Humanizada" }, { I: Trees, t: "Natureza" }, { I: ShieldCheck, t: "Segurança" }, { I: Flower2, t: "Pilates" }, { I: Rabbit, t: "Primeiros encontros com os bichinhos" }],
  },
  {
    id: "maternal", t: "Maternal I", age: CLASS_AGES.maternal1, bg: "bg-sky-soft", accent: "text-accent-foreground",
    lead: "A fase em que eles nunca param: experimentam, criam e constroem autonomia.",
    w: [{ I: Languages, t: "Inglês" }, { I: Drama, t: "Teatro" }, { I: FlaskConical, t: "Experiências científicas" }, { I: Sprout, t: "Horta" }, { I: Palette, t: "Artes" }, { I: Rabbit, t: "Cuidar dos animais da escola" }],
  },
  {
    id: "maternal-ii", t: "Maternal II", age: CLASS_AGES.maternal2, bg: "bg-sky-soft", accent: "text-accent-foreground",
    lead: "Experimentar, criar e construir autonomia a cada descoberta.",
    w: [{ I: Languages, t: "Inglês" }, { I: Drama, t: "Teatro" }, { I: FlaskConical, t: "Experiências científicas" }, { I: Sprout, t: "Horta" }, { I: Palette, t: "Artes" }, { I: Rabbit, t: "Cuidar dos animais da escola" }],
  },
  {
    id: "pre-escola", t: "Pré I", age: CLASS_AGES.pre1, bg: "bg-sky-soft", accent: "text-ink",
    lead: "Turno integral e proposta abrangente para uma base completa.",
    w: [{ I: Sparkles, t: "Balé" }, { I: Footprints, t: "Dança" }, { I: Waves, t: "Natação" }, { I: BookOpen, t: "Biblioteca" }, { I: Trees, t: "Natureza" }, { I: Rabbit, t: "Pequenos guardiões dos animais" }],
  },
  {
    id: "pre-ii", t: "Pré II", age: CLASS_AGES.pre2, bg: "bg-sky-soft", accent: "text-ink",
    lead: "Turno integral e proposta abrangente para uma base completa.",
    w: [{ I: Sparkles, t: "Balé" }, { I: Footprints, t: "Dança" }, { I: Waves, t: "Natação" }, { I: BookOpen, t: "Biblioteca" }, { I: Trees, t: "Natureza" }, { I: Rabbit, t: "Pequenos guardiões dos animais" }],
  },
];

function Turmas() {
  return (
    <>
      <section className="bg-cream pb-8 pt-28 md:pb-10 md:pt-32">
        <div className="container-x max-w-4xl text-center">
          <Reveal><h1 className="text-4xl leading-tight md:text-5xl">Cada idade tem seu encanto.</h1></Reveal>
          <Reveal delay={80}><p className="mt-3 text-muted-foreground">Berçário, Maternal e Pré-escola · 4 meses a 5 anos.</p></Reveal>
        </div>
      </section>
      <section className="py-8 md:py-10">
        <div className="container-x space-y-6">
          {CLASSES.map((c, i) => (
            <Reveal key={c.t}>
              <article id={c.id} className={`grid scroll-mt-24 overflow-hidden rounded-[2.5rem] ${c.bg} lg:grid-cols-2`}>
                {c.id === "bercario" ? (
                  <div className="relative min-h-72 overflow-hidden">
                    <img src={b1aEstimulos.url} alt="Sala do Berçário I com tatames coloridos e brinquedos de espuma" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105" />
                    <img src={bercarioAcolhimento.url} alt="Educadora acolhendo um bebê sorridente no Berçário" loading="lazy" decoding="async" className="absolute bottom-4 right-4 aspect-[4/3] w-2/5 rounded-2xl border-4 border-card object-cover shadow-lift" />
                  </div>
                ) : (
                  <div aria-hidden="true" className={`min-h-72 bg-card ${i % 2 ? "lg:order-2" : ""}`} />
                )}
                <div className="p-6 md:p-8">
                  <p className={`text-sm font-bold ${c.accent}`}>{c.age}</p>
                  <h2 className="mt-2 text-4xl md:text-5xl">{c.t}</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{c.lead}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {c.w.map(({ I, t }, k) => (
                      <li key={t} className="lift flex flex-col gap-2 rounded-xl bg-card p-3 shadow-soft">
                        <I className={`breathe h-6 w-6 ${c.accent}`} style={{ animationDelay: `${k * 0.4}s` }} />
                        <span className="text-sm font-semibold text-ink">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="pb-10">
        <p className="container-x mb-5 text-center text-sm text-muted-foreground">Consulte a programação de cada turma na visita.</p>
        <div className="container-x text-center">
          <Reveal delay={100}><Link to="/agendar-visita" className="ripple-btn mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-sun px-8 font-bold text-navy shadow-lift">Agendar visita <ArrowRight className="h-5 w-5" /></Link></Reveal>
        </div>
      </section>
    </>
  );
}
