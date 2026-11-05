import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Brain, Drama, FlaskConical, Footprints, Hand, Languages, Music, Palette, Sprout, Sun, Trees, Waves, Flower2, Sparkles, ShieldCheck } from "lucide-react";
import fachada from "@/assets/fachada.webp.asset.json";
import b1aEstimulos from "@/assets/b1a-sala-estimulos.webp.asset.json";
import bercarioBebes from "@/assets/bercario-bebes.webp.asset.json";
import salaMaternal from "@/assets/sala-maternal.webp.asset.json";
import maternalEscorregador from "@/assets/maternal-escorregador.webp.asset.json";
import preTurma from "@/assets/pre-turma.webp.asset.json";
import salaPre2 from "@/assets/sala-pre2.webp.asset.json";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Turmas: Berçário, Maternal e Pré-escola em Estância Velha — Petit Poá";
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
    t: "Berçário", age: "Berçário I e II · a partir de 4 meses", img: b1aEstimulos.url, alt: "Sala do Berçário I com tatames coloridos e brinquedos de espuma", img2: bercarioBebes.url, alt2: "Educadoras do Berçário cuidando dos bebês no tatame", bg: "bg-sky-soft", accent: "text-primary",
    lead: "Os primeiros vínculos fora de casa, construídos com colo, rotina e muito olhar.",
    w: [{ I: Sun, t: "Solário" }, { I: Hand, t: "Adaptação Humanizada" }, { I: Trees, t: "Natureza" }, { I: ShieldCheck, t: "Segurança" }, { I: Flower2, t: "Pilates" }],
  },
  {
    t: "Maternal", age: "Maternal I e II", img: salaMaternal.url, alt: "Sala do Maternal com tatames, pelúcias e armários", img2: maternalEscorregador.url, alt2: "Crianças do Maternal brincando no escorregador do parquinho", bg: "bg-sky-soft", accent: "text-accent-foreground",
    lead: "A fase dos porquês. Curiosidade transformada em descoberta todos os dias.",
    w: [{ I: Languages, t: "Inglês" }, { I: Drama, t: "Teatro" }, { I: FlaskConical, t: "Experiências científicas" }, { I: Sprout, t: "Horta" }, { I: Palette, t: "Artes" }],
  },
  {
    t: "Pré-escola", age: "Pré-escola I e II · 4 e 5 anos", img: salaPre2.url, alt: "Sala da Pré-escola com mesas coloridas e varanda", img2: preTurma.url, alt2: "Turma da Pré-escola reunida no espaço externo da Petit Poá", bg: "bg-sky-soft", accent: "text-ink",
    lead: "Autonomia, leitura do mundo e preparo para o ensino fundamental, sem perder a infância.",
    w: [{ I: Sparkles, t: "Balé" }, { I: Footprints, t: "Dança" }, { I: Waves, t: "Natação" }, { I: BookOpen, t: "Biblioteca" }, { I: Trees, t: "Natureza" }],
  },
];

function Turmas() {
  return (
    <>
      <section className="bg-cream pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="container-x max-w-4xl text-center">
          <Reveal><p className="eyebrow">Turmas e oficinas</p></Reveal>
          <Reveal delay={80}><h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">Cada idade tem seu encanto.</h1></Reveal>
          <Reveal delay={160}><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">De 4 meses a 5 anos. As turmas seguem a idade e a data de corte do Conselho Municipal de Educação. Converse com a equipe sobre o grupo indicado para seu filho.</p></Reveal>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-x space-y-8 md:space-y-12">
          {CLASSES.map((c, i) => (
            <Reveal key={c.t}>
              <article id={["bercario", "maternal", "pre-escola"][i]} className={`grid scroll-mt-24 overflow-hidden rounded-[2.5rem] ${c.bg} lg:grid-cols-2`}>
                <div className={`relative min-h-72 overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
                  <img src={c.img} alt={c.alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105" />
                  {"img2" in c && c.img2 && (
                    <img src={c.img2} alt={c.alt2} loading="lazy" decoding="async" className="absolute bottom-4 right-4 w-2/5 rounded-2xl border-4 border-card object-cover shadow-lift aspect-[4/3]" />
                  )}
                </div>
                <div className="p-8 md:p-14">
                  <p className={`text-sm font-bold ${c.accent}`}>{c.age}</p>
                  <h2 className="mt-2 text-5xl md:text-6xl">{c.t}</h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{c.lead}</p>
                  <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {c.w.map(({ I, t }, k) => (
                      <li key={t} className="lift flex flex-col gap-3 rounded-2xl bg-card p-4 shadow-soft">
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
      <section className="pb-24">
        <p className="container-x mb-10 text-center text-muted-foreground">As oficinas apresentadas foram informadas pela escola. Confirme na visita a disponibilidade, a programação e as condições para cada turma.</p>
        <div className="container-x text-center">
          <Reveal><h2 className="text-4xl md:text-5xl">Qual turma é a do seu filho?</h2></Reveal>
          <Reveal delay={100}><Link to="/agendar-visita" className="ripple-btn mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-sun px-8 font-bold text-navy shadow-lift">Agendar visita <ArrowRight className="h-5 w-5" /></Link></Reveal>
        </div>
      </section>
    </>
  );
}
