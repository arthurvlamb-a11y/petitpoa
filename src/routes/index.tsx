import { useRef, useState, type KeyboardEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Baby, ChevronLeft, ChevronRight, Clock, HeartHandshake, MapPin,
  Sprout, Utensils, Rabbit, Languages, Trees,
} from "lucide-react";
import hero from "@/assets/hero-capa.webp.asset.json";
import uniforme from "@/assets/criancas-uniforme.webp.asset.json";
import lago from "@/assets/lago.webp.asset.json";
import horta from "@/assets/horta-nova.webp.asset.json";
import inglesVideo from "@/assets/ingles-video.mp4.asset.json";
import inglesFoto from "@/assets/ingles-foto.webp.asset.json";
import inglesPoster from "@/assets/ingles-poster.webp.asset.json";
import h1 from "@/assets/horta-1.webp.asset.json";
import h2 from "@/assets/horta-2.webp.asset.json";
import h3 from "@/assets/horta-3.webp.asset.json";
import h4 from "@/assets/horta-4.webp.asset.json";
import aPavao from "@/assets/animal-pavao.webp.asset.json";
import aCoelho from "@/assets/animal-coelho-preto.webp.asset.json";
import aGalo from "@/assets/animal-galo.webp.asset.json";
import aPata from "@/assets/animal-pata-branca.webp.asset.json";
import aFamilia from "@/assets/animal-patos-familia.webp.asset.json";
import aPatinhosComendo from "@/assets/animal-patinhos-comendo.webp.asset.json";
import aPeriquito from "@/assets/animal-periquito.webp.asset.json";
import natPatio1 from "@/assets/nat-patio-1.webp.asset.json";
import natParquinho from "@/assets/nat-parquinho.webp.asset.json";
import natPatio2 from "@/assets/nat-patio-2.webp.asset.json";
import natBalanco from "@/assets/nat-balanco.webp.asset.json";
import alimLegumes from "@/assets/alim-legumes.webp.asset.json";
import alimCozinha from "@/assets/alim-cozinha.webp.asset.json";
import alimVideo from "@/assets/alimentacao-nova.mp4.asset.json";
import alimPoster from "@/assets/alimentacao-nova-poster.webp.asset.json";
import alimVideo2 from "@/assets/alimentacao-2.mp4.asset.json";
import alimPoster2 from "@/assets/alimentacao-2-poster.webp.asset.json";
import depo1 from "@/assets/depoimento-familia-1.mp4.asset.json";
import depo1Poster from "@/assets/depoimento-familia-1.jpg.asset.json";
import depo2 from "@/assets/depoimento-familia-2.mp4.asset.json";
import depo2Poster from "@/assets/depoimento-familia-2.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";

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

    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />

    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden">
      <img src={hero.url} alt="Menina da Petit Poá mostrando as mãos sujas de terra na horta" fetchPriority="high" decoding="async" className="hero-zoom absolute inset-0 h-full w-full object-cover object-[center_35%]" />
      <div className="bg-hero-fade absolute inset-0" />
      <div className="container-x relative pb-32 pt-32 md:pb-24">
        <Reveal delay={100}>
          <h1 className="max-w-4xl text-[2.6rem] font-medium leading-[1.04] text-primary-foreground sm:text-6xl lg:text-7xl">
            Muito mais que estrutura, um lugar para viver a infância.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            Valorizamos uma infância “raiz”, com vivências lúdicas e investigativas, contato com a natureza, criatividade e relações que constroem memórias para a vida inteira.
          </p>
        </Reveal>
        <Reveal delay={300} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/agendar-visita" className="ripple-btn inline-flex h-14 items-center justify-center gap-2 rounded-full bg-sun px-8 font-bold text-navy shadow-lift transition-transform hover:scale-[1.03]">
            Agendar visita <ArrowRight className="h-5 w-5" />
          </Link>
          <Button asChild variant="ghost" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-foreground/15 px-8 text-base font-semibold text-primary-foreground backdrop-blur-md transition-colors hover:bg-primary-foreground/25 hover:text-primary-foreground">
            <a href="#destaques">
            Conhecer a escola
            </a>
          </Button>
        </Reveal>
        <Reveal delay={400} className="mt-10 flex flex-wrap gap-2 sm:gap-3">
          {[{ I: Baby, t: "4 meses a 5 anos" }, { I: Clock, t: "Integral até 19h" }, { I: MapPin, t: "Centro de Estância Velha" }].map(({ I, t }) => (
            <span key={t} className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2.5 text-sm font-semibold text-ink shadow-soft">
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

function TrustBar() {
  return (
    <section className="relative z-10 bg-navy pb-8 md:pb-10">
      <div className="container-x">
        <div className="-mt-10 grid grid-cols-3 gap-2 sm:gap-3">
          {TABS.map((x) => (
            <Link key={x.hash} to="/turmas" hash={x.hash} className={`lift flex flex-col items-center justify-center rounded-2xl px-2 py-4 text-center shadow-lift ${x.c}`}>
              <span className="font-display text-lg font-semibold sm:text-2xl">{x.t}</span>
              <span className="mt-1 text-[11px] font-semibold opacity-80 sm:text-xs">{x.a}</span>
            </Link>
          ))}
        </div>
        <Highlights />
      </div>
    </section>
  );
}

const HL = [
  { k: "familias", t: "Depoimentos", I: HeartHandshake, d: "Confiança contada por quem vive a Petit Poá.", p: [
    { src: depo1.url, alt: "Depoimento de uma família da Petit Poá", video: true, poster: depo1Poster.url },
    { src: depo2.url, alt: "Depoimento de uma família da Petit Poá", video: true, poster: depo2Poster.url },
  ] },  { k: "horta", t: "Horta", I: Sprout, d: "Plantar, cuidar e colher. Da horta para a mesa.", p: [
    { src: h1.url, alt: "Crianças colhendo alface com a professora" },
    { src: h2.url, alt: "Menino segurando rabanetes colhidos" },
    { src: h3.url, alt: "Professora com um repolho colhido" },
    { src: h4.url, alt: "Crianças com cestas de verduras" },
    { src: horta.url, alt: "Horta coberta com canteiros elevados" },
  ] },
  { k: "natureza", t: "Natureza", I: Trees, d: "Infância ao ar livre, pertinho da natureza.", p: [
    { src: uniforme.url, alt: "Pátio arborizado da Petit Poá" },
    { src: natPatio1.url, alt: "Jardim e caminhos de pedra do pátio" },
    { src: natParquinho.url, alt: "Parquinho de madeira entre as árvores" },
    { src: natPatio2.url, alt: "Pátio externo com árvores e parquinho" },
    { src: natBalanco.url, alt: "Balanço de madeira no gramado" },
    { src: lago.url, alt: "Laguinho dos peixes" },
  ] },
  { k: "animais", t: "Animais", I: Rabbit, d: "Pequenos encontros que ensinam a cuidar.", p: [
    { src: aPatinhosComendo.url, alt: "Patinhos comendo no pátio" },
    { src: aPavao.url, alt: "Pavão no pátio" },
    { src: aCoelho.url, alt: "Coelho entre as plantas" },
    { src: aGalo.url, alt: "Galo" },
    { src: aPata.url, alt: "Pata branca na grama" },
    { src: aFamilia.url, alt: "Família de patos" },
    { src: aPeriquito.url, alt: "Periquito verde no viveiro" },
  ] },
  { k: "alimentacao", t: "Alimentação", I: Utensils, d: "Comida de verdade, carinho em cada refeição.", p: [
    { src: alimVideo.url, alt: "Vídeo da cozinha da Petit Poá", video: true, poster: alimPoster.url },
    { src: alimVideo2.url, alt: "Vídeo das refeições da Petit Poá", video: true, poster: alimPoster2.url },
    { src: alimLegumes.url, alt: "Cesta com legumes e verduras frescas" },
    { src: alimCozinha.url, alt: "Cozinha da escola com frutas e legumes" },
  ] },
  { k: "ingles", t: "Inglês", I: Languages, d: "Novas palavras, novas descobertas.", p: [
    { src: inglesVideo.url, alt: "Vídeo da aula de inglês", video: true, poster: inglesPoster.url },
    { src: inglesFoto.url, alt: "Aula de inglês na Petit Poá" },
  ] },

];

function Highlights() {
  const [a, setA] = useState(0);
  const gallery = useRef<HTMLDivElement>(null);
  const cur = HL[a];
  if (!cur) return null;
  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % HL.length;
    else if (event.key === "ArrowLeft") next = (index + HL.length - 1) % HL.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = HL.length - 1;
    else return;
    event.preventDefault();
    setA(next);
    event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }
  function moveGallery(direction: number) {
    const el = gallery.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return (
    <div id="destaques" className="mt-8 scroll-mt-24">
      <div role="tablist" aria-label="Destaques da escola" className="grid grid-cols-3 gap-2 rounded-2xl bg-primary-foreground/10 p-2 sm:grid-cols-6">
        {HL.map((h, i) => (
          <Button key={h.k} id={`tab-${h.k}`} variant="ghost" role="tab" aria-selected={a === i} aria-controls={`panel-${h.k}`} tabIndex={a === i ? 0 : -1} onKeyDown={(event) => onTabKey(event, i)} onClick={() => setA(i)}
            className={`h-14 min-w-0 flex-col gap-1 rounded-xl px-1 text-[11px] font-bold sm:h-11 sm:flex-row sm:gap-1.5 sm:text-sm transition-colors ${a === i ? "bg-sun text-navy hover:bg-sun/90 hover:text-navy" : "text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"}`}>
            <h.I className="h-4 w-4" /> {h.t}
          </Button>
        ))}
      </div>
      <p className="mt-5 text-center text-primary-foreground/80">{cur.d}</p>
      <div key={cur.k} ref={gallery} id={`panel-${cur.k}`} aria-labelledby={`tab-${cur.k}`} role="tabpanel" tabIndex={0} className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 animate-in fade-in duration-500">
        {cur.p.map((ph) => (
          "video" in ph ? (
            <video key={ph.src} src={ph.src} poster={("poster" in ph ? ph.poster : undefined) as string | undefined} controls playsInline preload="none" aria-label={ph.alt}
              className="aspect-[4/5] w-[80%] shrink-0 snap-start rounded-[1.5rem] bg-navy object-contain sm:w-[38%] lg:w-[30%]" />
          ) : (
          <img key={ph.src} src={ph.src} alt={ph.alt} loading="lazy" decoding="async"
            className="aspect-[4/5] w-[80%] shrink-0 snap-start rounded-[1.5rem] object-cover sm:w-[38%] lg:w-[30%]" />
          )
        ))}
      </div>
      <div className="mt-3 flex justify-end gap-2">
        <Button variant="ghost" size="icon" aria-label="Fotos anteriores" title="Fotos anteriores" onClick={() => moveGallery(-1)} className="h-11 w-11 rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><ChevronLeft /></Button>
        <Button variant="ghost" size="icon" aria-label="Próximas fotos" title="Próximas fotos" onClick={() => moveGallery(1)} className="h-11 w-11 rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><ChevronRight /></Button>
      </div>
    </div>
  );
}
