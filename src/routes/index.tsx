import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Baby, Brain, Camera, Car, ChevronLeft, ChevronRight, Clock, HeartHandshake, Leaf, MapPin,
  Puzzle, ShieldCheck, Sparkles, Sprout, Star, Sun, Users, Utensils, Hand, Apple, Salad, CalendarCheck,
  Footprints, FileText, MessageCircle, Building2, HeartPulse,
} from "lucide-react";
import hero from "@/assets/hero.webp.asset.json";
import menina from "@/assets/menina-coelho.webp.asset.json";
import fachada from "@/assets/fachada.webp.asset.json";
import lago from "@/assets/lago.webp.asset.json";
import horta from "@/assets/horta.webp.asset.json";
import patio from "@/assets/patio.webp.asset.json";
import playground from "@/assets/playground.webp.asset.json";
import coelho from "@/assets/coelho.webp.asset.json";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Counter, Parallax, Reveal } from "@/components/site/Reveal";
import { FAQ, SITE, waLink } from "@/lib/site";

const TITLE = "Escola Infantil em Estância Velha | Berçário, Maternal e Pré — Petit Poá";
const DESC = "Creche e escola de educação infantil no Centro de Estância Velha/RS. Berçário, Maternal e Pré-escola de 4 meses a 5 anos, integral até 19h, câmeras para os pais e alimentação inclusa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "escola infantil Estância Velha, creche Estância Velha, maternal Estância Velha, pré-escola Estância Velha, berçário Estância Velha, educação infantil RS" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: hero.url, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Preschool", "ChildCare", "LocalBusiness"],
          name: "Escola de Educação Infantil Petit Poá",
          description: DESC,
          telephone: "+55 51 3271-8400",
          email: SITE.email,
          address: { "@type": "PostalAddress", streetAddress: SITE.street, addressLocality: SITE.city, addressRegion: SITE.state, postalCode: SITE.zip, addressCountry: "BR" },
          areaServed: ["Estância Velha", "Novo Hamburgo", "Ivoti", "Portão"],
          openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" }],
          founder: [{ "@type": "Person", name: "Cátia Engel Moraes" }, { "@type": "Person", name: "Maida Ludwig" }],
          sameAs: [SITE.instagram, SITE.facebook],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Story />
      <Pedagogy />
      <ClassesTeaser />
      <Tour />
      <Safety />
      <Food />
      <Testimonials />
      <Compare />
      <Enrollment />
      <Faq />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <img src={hero.url} alt="Fachada azul e pátio arborizado da Petit Poá em Estância Velha" fetchPriority="high" decoding="async" className="hero-zoom absolute inset-0 h-full w-full object-cover" />
      <div className="bg-hero-fade absolute inset-0" />
      <div className="container-x relative pb-32 pt-32 md:pb-24">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-xs font-semibold text-primary-foreground backdrop-blur-md">
            <span className="breathe h-2 w-2 rounded-full bg-sun" /> Matrículas abertas · Estância Velha/RS
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="max-w-4xl text-[2.6rem] font-medium leading-[1.04] text-primary-foreground sm:text-6xl lg:text-7xl">
            Onde o cuidado vira confiança e cada descoberta constrói o futuro.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            Berçário, Maternal e Pré-escola em Estância Velha. Um ambiente acolhedor, seguro e preparado para que cada criança cresça no seu próprio tempo.
          </p>
        </Reveal>
        <Reveal delay={300} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/agendar-visita" className="ripple-btn inline-flex h-14 items-center justify-center gap-2 rounded-full bg-coral px-8 font-bold text-primary-foreground shadow-lift transition-transform hover:scale-[1.03]">
            Agendar visita <ArrowRight className="h-5 w-5" />
          </Link>
          <a href="#tour" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-foreground/15 px-8 font-semibold text-primary-foreground backdrop-blur-md transition-colors hover:bg-primary-foreground/25">
            Conhecer a escola
          </a>
        </Reveal>
        <Reveal delay={400} className="mt-10 flex flex-wrap gap-2 sm:gap-3">
          {[{ I: Baby, t: "4 meses a 5 anos" }, { I: Clock, t: "Integral até 19h" }, { I: MapPin, t: "Centro de Estância Velha" }].map(({ I, t }) => (
            <span key={t} className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2.5 text-sm font-semibold text-ink shadow-soft backdrop-blur">
              <I className="h-4 w-4 text-primary" /> {t}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

const TRUST = [
  { I: Camera, t: "Monitoramento por câmeras", c: "bg-sky-soft text-primary" },
  { I: Utensils, t: "Alimentação inclusa", c: "bg-sun-soft text-ink" },
  { I: HeartPulse, t: "Psicóloga escolar", c: "bg-coral-soft text-coral" },
  { I: Sun, t: "Funcionamento o ano inteiro", c: "bg-sun-soft text-ink" },
  { I: ShieldCheck, t: "Segurança 24h", c: "bg-sage-soft text-accent-foreground" },
  { I: Users, t: "Equipe especializada", c: "bg-sky-soft text-primary" },
];

function TrustBar() {
  return (
    <section className="relative z-10 -mt-10">
      <div className="container-x">
        <div className="no-scrollbar -mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:px-0 lg:grid-cols-6">
          {TRUST.map(({ I, t, c }, i) => (
            <Reveal key={t} delay={i * 60} className="lift flex min-w-[10.5rem] snap-start flex-col gap-4 rounded-3xl bg-card p-5 shadow-soft">
              <span className={`breathe grid h-11 w-11 place-items-center rounded-2xl ${c}`} style={{ animationDelay: `${i * 0.4}s` }}><I className="h-5 w-5" /></span>
              <span className="text-sm font-semibold leading-snug text-ink">{t}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2.5rem] shadow-lift">
            <img src={menina.url} alt="Menina segurando um coelho no pátio da escola" loading="lazy" decoding="async" width={1100} height={1467} className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="float-slow absolute -bottom-8 -right-2 rounded-3xl bg-card p-5 shadow-lift sm:-right-8">
            <p className="font-display text-4xl text-primary"><Counter to={15} suffix="+" /></p>
            <p className="text-xs font-semibold text-muted-foreground">anos de experiência<br />de cada fundadora</p>
          </div>
        </Reveal>
        <div>
          <Reveal><p className="eyebrow">Nossa história</p></Reveal>
          <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight md:text-5xl">Nasceu de duas educadoras que já conheciam o coração de cada criança.</h2></Reveal>
          <Reveal delay={160}>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>Por mais de quinze anos, Cátia Engel Moraes e Maida Ludwig viveram a Educação Infantil de perto, na rede pública da região. Acompanharam primeiros passos, primeiras palavras, primeiras despedidas no portão.</p>
              <p>Dessa convivência nasceu uma certeza: a criança aprende melhor quando se sente segura e amada. Com formação em Desenvolvimento Infantil e Psicopedagogia, elas decidiram criar a escola que gostariam de oferecer aos próprios filhos.</p>
              <p className="font-display text-2xl leading-snug text-ink">Assim nasceu a Petit Poá: uma casa cheia de árvores, bichinhos e descobertas, onde cada família é recebida pelo nome.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const PEDA = [
  { I: Brain, t: "Neurociência cognitiva", d: "Experiências planejadas para as janelas de desenvolvimento de cada idade.", c: "bg-sky-soft text-primary" },
  { I: Users, t: "Sócio-construtivismo", d: "A criança constrói o conhecimento na troca com o outro e com o mundo.", c: "bg-sage-soft text-accent-foreground" },
  { I: Puzzle, t: "Aprender brincando", d: "O brincar é a linguagem da infância. Aqui ele é levado a sério.", c: "bg-sun-soft text-ink" },
  { I: Hand, t: "Autonomia", d: "Pequenas conquistas diárias que constroem confiança em si mesma.", c: "bg-coral-soft text-coral" },
  { I: Sparkles, t: "Desenvolvimento integral", d: "Corpo, emoção, linguagem e pensamento crescendo juntos.", c: "bg-sky-soft text-primary" },
  { I: Leaf, t: "Respeito ao tempo da criança", d: "Ninguém é apressado. Cada criança floresce no seu ritmo.", c: "bg-sage-soft text-accent-foreground" },
];

function Pedagogy() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal><p className="eyebrow">Proposta pedagógica</p></Reveal>
          <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight md:text-5xl">Ciência no planejamento. Afeto em cada gesto.</h2></Reveal>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PEDA.map(({ I, t, d, c }, i) => (
            <Reveal key={t} delay={i * 70} className="lift group rounded-[2rem] bg-card p-8 shadow-soft">
              <span className={`breathe grid h-14 w-14 place-items-center rounded-2xl ${c}`} style={{ animationDelay: `${i * 0.5}s` }}><I className="h-6 w-6" /></span>
              <h3 className="mt-6 text-2xl">{t}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClassesTeaser() {
  const items = [
    { t: "Berçário", a: "4 meses a 1 ano e meio", c: "bg-sky-soft", tags: ["Solário", "Shantala", "Música"] },
    { t: "Maternal", a: "1 ano e meio a 3 anos", c: "bg-sage-soft", tags: ["Inglês", "Horta", "Teatro"] },
    { t: "Pré-escola", a: "4 e 5 anos", c: "bg-sun-soft", tags: ["Balé", "Natação", "Biblioteca"] },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal><p className="eyebrow">Turmas</p></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight md:text-5xl">Uma rotina pensada para cada fase.</h2></Reveal>
          </div>
          <Reveal><Link to="/turmas" className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">Ver todas as oficinas <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 90}>
              <Link to="/turmas" className={`lift block rounded-[2rem] ${it.c} p-8`}>
                <p className="text-sm font-semibold text-muted-foreground">{it.a}</p>
                <h3 className="mt-2 text-3xl">{it.t}</h3>
                <div className="mt-8 flex flex-wrap gap-2">
                  {it.tags.map((t) => <span key={t} className="rounded-full bg-card px-3 py-1.5 text-sm font-medium text-ink">{t}</span>)}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const TOUR = [
  { src: fachada.url, t: "Fachada e acolhida", d: "Uma casa de verdade, com jardim e varanda.", cls: "md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto" },
  { src: lago.url, t: "Laguinho dos peixes", d: "Natureza para observar todos os dias.", cls: "aspect-[4/3]" },
  { src: playground.url, t: "Playground interno", d: "Brincar com segurança, faça chuva ou sol.", cls: "aspect-[4/3]" },
  { src: patio.url, t: "Pátio arborizado", d: "Casinhas, caminhos de pedra e bichinhos.", cls: "md:col-span-2 aspect-[16/10]" },
  { src: horta.url, t: "Horta pedagógica", d: "Plantar, cuidar e colher com as próprias mãos.", cls: "aspect-[4/3]" },
  { src: coelho.url, t: "Contato com animais", d: "Cuidar de um coelho ensina empatia.", cls: "aspect-[4/3]" },
];

function Tour() {
  return (
    <section id="tour" className="scroll-mt-20 bg-ink py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal><p className="eyebrow text-sun">Tour pela escola</p></Reveal>
          <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight text-primary-foreground md:text-5xl">Entre e sinta. É assim que a gente gostaria que você nos conhecesse.</h2></Reveal>
          <Reveal delay={160}><p className="mt-5 text-lg text-primary-foreground/70">Também temos salas amplas, casinha na árvore, biblioteca, refeitório e embarque coberto. Venha ver pessoalmente.</p></Reveal>
        </div>
        <div className="mt-14 grid auto-rows-auto grid-cols-1 gap-4 md:grid-cols-4">
          {TOUR.map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) * 80} className={`group relative overflow-hidden rounded-[2rem] ${p.cls}`}>
              <Parallax src={p.src} alt={p.t} className="absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="text-2xl text-primary-foreground">{p.t}</h3>
                <p className="mt-1 text-sm text-primary-foreground/80">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex justify-center">
          <Link to="/agendar-visita" className="ripple-btn inline-flex h-14 items-center gap-2 rounded-full bg-sun px-8 font-bold text-ink transition-transform hover:scale-[1.03]">Quero visitar pessoalmente <ArrowRight className="h-5 w-5" /></Link>
        </Reveal>
      </div>
    </section>
  );
}

function Safety() {
  const items = [
    { I: Camera, t: "Câmeras com aplicativo", d: "Acompanhe a rotina pelo celular, de onde estiver." },
    { I: ShieldCheck, t: "Segurança monitorada", d: "Monitoramento 24 horas, todos os dias." },
    { I: Building2, t: "Embarque protegido", d: "Entrada e saída cobertas, com acompanhamento da equipe." },
    { I: Car, t: "Estacionamento exclusivo", d: "Chegada tranquila, sem pressa e sem rua." },
    { I: HeartHandshake, t: "Equipe preparada", d: "Profissionais treinados para cuidar e acolher." },
  ];
  return (
    <section className="bg-safety py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal><p className="eyebrow">Segurança</p></Reveal>
          <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight md:text-5xl">A confiança dos pais começa pela segurança.</h2></Reveal>
          <Reveal delay={160}><p className="mt-6 text-lg leading-relaxed text-muted-foreground">Você entrega o que tem de mais precioso. Nós cuidamos de cada detalhe para que o seu dia de trabalho seja leve.</p></Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(({ I, t, d }, i) => (
            <Reveal key={t} delay={i * 70} className={`lift rounded-[2rem] bg-card/80 p-7 shadow-soft backdrop-blur ${i === 4 ? "sm:col-span-2" : ""}`}>
              <I className="breathe h-8 w-8 text-primary" style={{ animationDelay: `${i * 0.4}s` }} />
              <h3 className="mt-5 text-xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Food() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2.5rem] bg-sun-soft">
          <div className="grid items-center gap-10 p-8 md:p-14 lg:grid-cols-2">
            <div>
              <Reveal><p className="eyebrow">Alimentação</p></Reveal>
              <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight md:text-5xl">Comida de verdade, feita com carinho de casa.</h2></Reveal>
              <Reveal delay={160}><p className="mt-6 text-lg leading-relaxed text-muted-foreground">Todas as refeições estão inclusas. Um cardápio nutritivo, colorido e pensado para cada fase do desenvolvimento infantil, com ingredientes que as crianças também conhecem na nossa horta.</p></Reveal>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[{ I: Utensils, t: "Alimentação inclusa" }, { I: Salad, t: "Cardápio nutritivo" }, { I: Apple, t: "Pensado para cada fase" }].map(({ I, t }, i) => (
                <Reveal key={t} delay={i * 90} className="lift flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl bg-card p-4 text-center shadow-soft">
                  <I className="breathe h-8 w-8 text-coral" style={{ animationDelay: `${i * 0.5}s` }} />
                  <span className="text-sm font-semibold leading-tight text-ink">{t}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TESTI = [
  { q: "Desde a primeira visita sentimos confiança. Nossa filha se adaptou muito mais rápido do que imaginávamos.", n: "Família de aluna do Maternal" },
  { q: "Poder olhar as câmeras no meio do dia mudou a minha rotina. Trabalho tranquila sabendo que ele está bem.", n: "Mãe de aluno do Berçário" },
  { q: "Ele chega em casa contando da horta, do coelho, das músicas. Dá para ver que é feliz lá.", n: "Pai de aluno da Pré-escola" },
  { q: "A equipe conhece nosso filho de verdade. Cada conversa na saída mostra o quanto ele é cuidado.", n: "Família do Maternal" },
];

function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const go = (d: number) => {
    const el = ref.current;
    if (!el) return;
    const next = (idx + d + TESTI.length) % TESTI.length;
    const card = el.children[next] as HTMLElement;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    setIdx(next);
  };
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = () => {
      const w = (el.children[0] as HTMLElement).offsetWidth + 16;
      setIdx(Math.round(el.scrollLeft / w));
    };
    el.addEventListener("scroll", on, { passive: true });
    return () => el.removeEventListener("scroll", on);
  }, []);
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-xl">
            <Reveal><p className="eyebrow">Famílias Petit Poá</p></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight md:text-5xl">O que as famílias sentem.</h2></Reveal>
          </div>
          <div className="hidden gap-2 md:flex">
            <button aria-label="Anterior" onClick={() => go(-1)} className="grid h-12 w-12 place-items-center rounded-full bg-card shadow-soft transition-transform hover:scale-105"><ChevronLeft className="h-5 w-5" /></button>
            <button aria-label="Próximo" onClick={() => go(1)} className="grid h-12 w-12 place-items-center rounded-full bg-card shadow-soft transition-transform hover:scale-105"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
        <div ref={ref} className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 md:mx-0 md:px-0">
          {TESTI.map((t) => (
            <figure key={t.q} className="flex w-[85%] shrink-0 snap-start flex-col justify-between rounded-[2rem] bg-card p-8 shadow-soft md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]">
              <div>
                <div className="flex gap-1 text-sun">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="mt-5 font-display text-xl leading-snug text-ink">“{t.q}”</blockquote>
              </div>
              <figcaption className="mt-8 text-sm">
                <p className="font-semibold text-ink">{t.n}</p>
                <p className="text-muted-foreground">Estância Velha/RS</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {TESTI.map((_, i) => <span key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === idx ? "w-8 bg-primary" : "w-1.5 bg-border"}`} />)}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  const rows = [
    ["Psicóloga escolar", "Apoio emocional para a criança e para a família"],
    ["Câmeras para pais", "Mais tranquilidade durante o seu dia"],
    ["Horta pedagógica", "Aprendizado prático, da semente ao prato"],
    ["Biblioteca itinerante", "Incentivo à leitura desde cedo"],
    ["Integral até 19h", "Rotina facilitada para quem trabalha"],
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-x max-w-4xl">
        <Reveal className="text-center"><p className="eyebrow">Diferenciais</p></Reveal>
        <Reveal delay={80}><h2 className="mt-4 text-center text-4xl leading-tight md:text-5xl">O que muda na vida da sua família.</h2></Reveal>
        <Reveal delay={160} className="mt-12 overflow-hidden rounded-[2rem] border bg-card shadow-soft">
          <div className="grid grid-cols-2 bg-muted px-6 py-4 text-xs font-bold uppercase tracking-widest text-muted-foreground md:px-10">
            <span>Na Petit Poá</span><span>Benefício</span>
          </div>
          {rows.map(([a, b]) => (
            <div key={a} className="grid grid-cols-2 gap-4 border-t px-6 py-5 transition-colors hover:bg-sky-soft/50 md:px-10">
              <span className="flex items-center gap-3 font-semibold text-ink"><Sprout className="h-4 w-4 shrink-0 text-sage" />{a}</span>
              <span className="text-muted-foreground">{b}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Enrollment() {
  const steps = [
    { I: CalendarCheck, t: "Agende uma visita", d: "Escolha o melhor dia pelo site ou WhatsApp." },
    { I: Footprints, t: "Conheça os espaços", d: "Caminhe pela escola e conheça a equipe." },
    { I: MessageCircle, t: "Tire dúvidas", d: "Converse com a coordenação sem pressa." },
    { I: FileText, t: "Envie documentos", d: "Certidão de nascimento, carteira de vacinação, RG/CPF dos responsáveis e comprovante de residência." },
    { I: HeartHandshake, t: "Início da adaptação", d: "Um começo gradual, no tempo do seu filho." },
  ];
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-x">
        <Reveal><p className="eyebrow">Matrícula</p></Reveal>
        <Reveal delay={80}><h2 className="mt-4 max-w-2xl text-4xl leading-tight md:text-5xl">Cinco passos até o primeiro dia.</h2></Reveal>
        <ol className="relative mt-14 grid gap-6 md:grid-cols-5 md:gap-4">
          <div className="absolute left-7 top-0 h-full w-px bg-border md:left-0 md:top-7 md:h-px md:w-full" aria-hidden />
          {steps.map(({ I, t, d }, i) => (
            <Reveal as="li" key={t} delay={i * 90} className="relative flex gap-5 md:flex-col">
              <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-card text-primary shadow-soft"><I className="h-6 w-6" /></span>
              <div>
                <p className="text-xs font-bold text-coral">0{i + 1}</p>
                <h3 className="mt-1 text-xl">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <Reveal><p className="eyebrow">Dúvidas frequentes</p></Reveal>
          <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight md:text-5xl">Perguntas que todo pai e toda mãe fazem.</h2></Reveal>
          <Reveal delay={160}><a href={waLink("Olá! Tenho uma dúvida sobre a Petit Poá.")} target="_blank" rel="noopener" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">Pergunte pelo WhatsApp <ArrowRight className="h-4 w-4" /></a></Reveal>
        </div>
        <Reveal delay={120}>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={`f${i}`} className="rounded-3xl border-0 bg-muted px-6">
                <AccordionTrigger className="py-6 text-left font-display text-lg text-ink hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2.5rem]">
          <Parallax src={patio.url} alt="Crianças brincando no pátio da Petit Poá" className="absolute inset-0" speed={0.08} />
          <div className="absolute inset-0 bg-ink/60" />
          <div className="relative px-8 py-20 text-center md:py-28">
            <h2 className="mx-auto max-w-3xl text-4xl leading-tight text-primary-foreground md:text-6xl">Venha conhecer a escola de perto.</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/85">Agende um horário e caminhe pelos espaços com a nossa equipe.</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/agendar-visita" className="ripple-btn inline-flex h-14 items-center justify-center gap-2 rounded-full bg-coral px-8 font-bold text-primary-foreground shadow-lift">Agendar visita <ArrowRight className="h-5 w-5" /></Link>
              <a href={waLink()} target="_blank" rel="noopener" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-8 font-bold text-primary-foreground"><MessageCircle className="h-5 w-5" /> Falar no WhatsApp</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
