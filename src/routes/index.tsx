import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Baby, Brain, Camera, Car, ChevronLeft, ChevronRight, Clock, HeartHandshake, Leaf, MapPin,
  Puzzle, ShieldCheck, Sparkles, Sprout, Star, Sun, Users, Utensils, Hand, Apple, Salad, CalendarCheck,
  Footprints, FileText, MessageCircle, Building2, HeartPulse, Rabbit, Languages, Waves, Music, BookOpen,
} from "lucide-react";
import hero from "@/assets/criancas-uniforme.webp.asset.json";
import meninaCoelho from "@/assets/menina-coelho.webp.asset.json";
import fachada from "@/assets/fachada.webp.asset.json";
import lago from "@/assets/lago.webp.asset.json";
import horta from "@/assets/horta.webp.asset.json";
import playground from "@/assets/playground.webp.asset.json";
import coelho from "@/assets/coelho.webp.asset.json";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Parallax, Reveal } from "@/components/site/Reveal";
import { FAQ, SITE, waLink } from "@/lib/site";

const TITLE = "Escola Infantil em Estância Velha | Berçário, Maternal e Pré — Petit Poá";
const DESC = "Creche e escola de educação infantil no Centro de Estância Velha/RS. Berçário, Maternal e Pré-escola de 4 meses a 5 anos, integral até 19h, câmeras para os pais e alimentação inclusa.";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "escola infantil Estância Velha, creche Estância Velha, maternal Estância Velha, pré-escola Estância Velha, berçário Estância Velha, educação infantil RS" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: SITE.origin + "/" },
    ],
    links: [
      { rel: "canonical", href: SITE.origin + "/" },
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
          telephone: SITE.phoneHref.replace("tel:", ""),
          url: SITE.origin,
          foundingDate: SITE.founded,
          email: SITE.email,
          address: { "@type": "PostalAddress", streetAddress: SITE.street, addressLocality: SITE.city, addressRegion: SITE.state, postalCode: SITE.zip, addressCountry: "BR" },
          areaServed: SITE.city,
          openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: SITE.opens, closes: SITE.closes }],
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
      <PedagogyTeaser />
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
    <section className="relative flex min-h-[92svh] items-end overflow-hidden">
      <img src={hero.url} alt="Crianças com o uniforme da Petit Poá abraçadas no pátio" fetchPriority="high" decoding="async" className="hero-zoom absolute inset-0 h-full w-full object-cover object-[center_35%]" />
      <div className="bg-hero-fade absolute inset-0" />
      <div className="container-x relative pb-32 pt-32 md:pb-24">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-xs font-semibold text-primary-foreground backdrop-blur-md">
            <span className="breathe h-2 w-2 rounded-full bg-sun" /> Petit Poá · Estância Velha/RS
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="max-w-4xl text-[2.6rem] font-medium leading-[1.04] text-primary-foreground sm:text-6xl lg:text-7xl">
            Muito mais que estrutura, um lugar para viver a infância.
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

const TABS = [
  { hash: "bercario", t: "Berçário", a: "a partir de 4 meses", c: "bg-sky-soft text-primary" },
  { hash: "maternal", t: "Maternal", a: "Maternal I e II", c: "bg-sage-soft text-accent-foreground" },
  { hash: "pre-escola", t: "Pré-escola", a: "4 e 5 anos", c: "bg-sun-soft text-ink" },
] as const;

const DIFS = [
  { I: Rabbit, t: "Contato com animais" },
  { I: Languages, t: "Inglês" },
  { I: HeartHandshake, t: "Adaptação acolhedora" },
  { I: Camera, t: "Câmeras com app" },
  { I: ShieldCheck, t: "Segurança 24h" },
  { I: Utensils, t: "Alimentação inclusa" },
  { I: HeartPulse, t: "Psicóloga escolar" },
  { I: Clock, t: "Integral até 19h" },
  { I: Sprout, t: "Horta" },
  { I: Waves, t: "Natação" },
  { I: Music, t: "Música e balé" },
  { I: BookOpen, t: "Biblioteca" },
];

function TrustBar() {
  return (
    <section className="relative z-10 bg-navy pb-16 md:pb-20">
      <div className="container-x">
        <div className="-mt-10 grid grid-cols-3 gap-2 sm:gap-3">
          {TABS.map((x) => (
            <Link key={x.hash} to="/turmas" hash={x.hash} className={`lift flex flex-col items-center justify-center rounded-2xl px-2 py-4 text-center shadow-lift ${x.c}`}>
              <span className="font-display text-lg font-semibold sm:text-2xl">{x.t}</span>
              <span className="mt-1 text-[11px] font-semibold opacity-80 sm:text-xs">{x.a}</span>
            </Link>
          ))}
        </div>
        <p className="eyebrow mt-10 text-center !text-sun">Diferenciais da Petit Poá</p>
        <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {DIFS.map(({ I, t }) => (
            <li key={t} className="flex items-center gap-2 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 px-3 py-3 text-sm font-semibold text-primary-foreground">
              <I className="h-4 w-4 shrink-0 text-sun" /> {t}
            </li>
          ))}
        </ul>
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
            <img src={meninaCoelho.url} alt="Menina com um coelho no pátio da Petit Poá" loading="lazy" decoding="async" width={1100} height={1467} className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="float-slow absolute -bottom-8 -right-2 rounded-3xl bg-card p-5 shadow-lift sm:-right-8">
            <p className="font-display text-4xl text-primary">{SITE.foundersExperience}+</p>
            <p className="text-xs font-semibold text-muted-foreground">anos de experiência<br />de cada fundadora</p>
          </div>
        </Reveal>
        <div>
          <Reveal><p className="eyebrow">Nossa história</p></Reveal>
          <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight md:text-5xl">Nasceu de duas educadoras que já conheciam o coração de cada criança.</h2></Reveal>
          <Reveal delay={160}>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>Cátia Engel Moraes e Maida Ludwig trouxeram mais de quinze anos de experiência na Educação Infantil para criar a Petit Poá. A escola foi inaugurada em 6 de agosto de 2015.</p>
              <p>Com formação em Desenvolvimento Infantil e Psicopedagogia, elas uniram experiência e acolhimento. O Projeto Político-Pedagógico da escola coloca o brincar e o desenvolvimento integral no centro dessa proposta.</p>
              <p className="font-display text-2xl leading-snug text-ink">Em setembro de 2022, a escola chegou ao Centro de Estância Velha, com pátio externo, salas com solários e uma área coberta maior.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const PEDA = [
  { I: Brain, t: "Neurociência cognitiva", d: "Observação do desenvolvimento para planejar desafios adequados, sem comparar ou apressar as crianças.", c: "bg-sky-soft text-primary" },
  { I: Users, t: "Sócio-construtivismo", d: "A criança constrói o conhecimento na troca com o outro e com o mundo.", c: "bg-sage-soft text-accent-foreground" },
  { I: Puzzle, t: "Aprender brincando", d: "Ao brincar de faz de conta, a criança experimenta papéis, cria histórias e aprende a conviver.", c: "bg-sun-soft text-ink" },
  { I: Hand, t: "Autonomia", d: "Comer, participar das escolhas e cuidar de si, com apoio e materiais adequados à sua idade.", c: "bg-coral-soft text-coral" },
  { I: Sparkles, t: "Desenvolvimento integral", d: "Movimento, música, histórias e interação desenvolvem corpo, emoção, linguagem e pensamento juntos.", c: "bg-sky-soft text-primary" },
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

function PedagogyTeaser() {
  const steps = [
    { I: Puzzle, t: "Aprender brincando", d: "O brincar é o eixo de tudo." },
    { I: Sprout, t: "Projetos e expedições", d: "Temas que nascem das perguntas das crianças." },
    { I: FileText, t: "Avaliação descritiva", d: "Um parecer por semestre, sem notas." },
    { I: HeartHandshake, t: "Parceria com a família", d: "Agenda diária, reuniões e conversas." },
  ];
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div>
          <Reveal><p className="eyebrow">Proposta pedagógica</p></Reveal>
          <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight md:text-5xl">Acolhimento com método.</h2></Reveal>
          <Reveal delay={140}><p className="mt-5 text-lg text-muted-foreground">Cada momento da rotina segue nosso Projeto Político-Pedagógico, alinhado à BNCC. A criança é protagonista, e a professora observa, media e registra cada conquista.</p></Reveal>
          <Reveal delay={200}><Link to="/proposta-pedagogica" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3">Conheça a proposta <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map(({ I, t, d }, i) => (
            <Reveal key={t} delay={i * 80}>
              <Link to="/proposta-pedagogica" className="lift block h-full rounded-[2rem] bg-card p-7 shadow-soft">
                <I className="h-7 w-7 text-coral" />
                <h3 className="mt-4 text-2xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClassesTeaser() {
  const items = [
    { t: "Berçário", a: "Berçário I e II · a partir de 4 meses", c: "bg-sky-soft", tags: ["Solário", "Shantala", "Música"] },
    { t: "Maternal", a: "Maternal I e II", c: "bg-sage-soft", tags: ["Inglês", "Horta", "Teatro"] },
    { t: "Pré-escola", a: "Pré I e II · 4 e 5 anos", c: "bg-sun-soft", tags: ["Balé", "Natação", "Biblioteca"] },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal><p className="eyebrow">Turmas</p></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight md:text-5xl">Uma rotina pensada para cada fase.</h2></Reveal>
          </div>
          <Reveal><Link to="/turmas" className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">Conhecer as turmas <ArrowRight className="h-4 w-4" /></Link></Reveal>
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
  { src: hero.url, t: "Pátio arborizado", d: "Casinhas, caminhos de pedra e bichinhos.", cls: "md:col-span-2 aspect-[16/10]" },
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
    { I: Car, t: "Estacionamento exclusivo", d: "Um espaço para facilitar a chegada e a saída das famílias." },
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
              <Reveal delay={160}><p className="mt-6 text-lg leading-relaxed text-muted-foreground">Todas as refeições estão inclusas. Um cardápio nutritivo, colorido e pensado para cada fase do desenvolvimento infantil, com acompanhamento de nutricionista, conforme o Regimento Escolar.</p></Reveal>
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

function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-x grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal><p className="eyebrow">Conheça e compare</p></Reveal>
          <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight md:text-5xl">Confiança se constrói com informação.</h2></Reveal>
          <Reveal delay={140}><p className="mt-5 text-lg text-muted-foreground">Conheça os espaços, converse com a equipe e consulte as avaliações públicas da escola no Google Maps.</p></Reveal>
        </div>
        <Reveal><a href={SITE.mapReviews} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center gap-3 rounded-full border bg-card px-7 py-4 font-semibold text-primary">Consultar no Google Maps <ArrowRight className="h-5 w-5 shrink-0" /></a></Reveal>
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
    { I: CalendarCheck, t: "Agende uma visita", d: "Envie um pedido pelo site ou WhatsApp e combine o horário com a equipe." },
    { I: Footprints, t: "Conheça os espaços", d: "Caminhe pela escola e conheça a equipe." },
    { I: MessageCircle, t: "Tire dúvidas", d: "Converse com a coordenação sem pressa." },
    { I: FileText, t: "Envie documentos", d: "Certidão de nascimento (e CPF, se tiver), vacinação atualizada, comprovante de residência e CPF do responsável." },
    { I: HeartHandshake, t: "Início da adaptação", d: "Um começo gradual, no tempo do seu filho." },
  ];
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-x">
        <Reveal><p className="eyebrow">Matrícula</p></Reveal>
        <Reveal delay={80}><h2 className="mt-4 max-w-2xl text-4xl leading-tight md:text-5xl">Cinco passos até o primeiro dia.</h2></Reveal>
        <ol className="relative mt-14 grid gap-6 md:grid-cols-5 md:gap-4">
          
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
          <Parallax src={hero.url} alt="Pátio arborizado da Petit Poá" className="absolute inset-0" speed={0.08} />
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
