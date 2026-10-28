import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { CalendarHeart, Clock, Facebook, Instagram, Link2, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import logo from "@/assets/logo.webp.asset.json";
import { SITE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "A escola" },
  { to: "/proposta-pedagogica", label: "Proposta" },
  { to: "/turmas", label: "Turmas" },
  { to: "/agendar-visita", label: "Agendar visita" },
] as const;

export function Header() {
  const { pathname } = useLocation();
  const overPhoto = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled || open || !overPhoto ? "bg-background/95 shadow-soft backdrop-blur-xl" : "bg-transparent")}>
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Petit Poá Escola de Educação Infantil" width={52} height={37} className="h-10 w-auto rounded-lg md:h-11" />
          <span className={cn("hidden font-display text-lg font-semibold sm:block", scrolled || open || !overPhoto ? "text-ink" : "text-primary-foreground")}>Petit Poá</span>
        </Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-1 md:flex">
          {NAV.slice(0, 3).map((n) => (
            <Link key={n.to} to={n.to} className={cn("rounded-full px-4 py-2 text-sm font-semibold transition-colors", scrolled || !overPhoto ? "text-foreground hover:bg-muted" : "text-primary-foreground/90 hover:bg-primary-foreground/10")} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
          <a href={waLink()} target="_blank" rel="noopener" className={cn("rounded-full px-4 py-2 text-sm font-semibold transition-colors", scrolled || !overPhoto ? "text-foreground hover:bg-muted" : "text-primary-foreground/90 hover:bg-primary-foreground/10")}>WhatsApp</a>
          <Link to="/agendar-visita" className="ripple-btn ml-2 rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]">Agendar visita</Link>
        </nav>
        <Button variant="ghost" size="icon" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)} className={cn("grid h-11 w-11 place-items-center rounded-full md:hidden", scrolled || open || !overPhoto ? "bg-muted text-ink" : "bg-primary-foreground/15 text-primary-foreground backdrop-blur")}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      <div className={cn("grid overflow-hidden transition-all duration-500 md:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <nav id="mobile-navigation" inert={!open} aria-label="Navegação móvel" className="min-h-0">
          <div className="container-x flex flex-col gap-1 pb-6 pt-2">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-4 font-display text-2xl text-ink active:bg-muted">{n.label}</Link>
            ))}
            <a href={waLink()} target="_blank" rel="noopener" className="rounded-2xl px-4 py-4 font-display text-2xl text-ink">Falar no WhatsApp</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/90 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-[1fr_auto] gap-3">
        <Link to="/agendar-visita" className="ripple-btn flex h-14 items-center justify-center gap-2 rounded-2xl bg-coral font-bold text-primary-foreground shadow-soft">
          <CalendarHeart className="h-5 w-5" /> Agendar visita
        </Link>
        <a href={waLink()} target="_blank" rel="noopener" aria-label="Falar no WhatsApp" className="ripple-btn grid h-14 w-14 place-items-center rounded-2xl bg-whatsapp text-primary-foreground shadow-soft">
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}

export function WhatsAppFab() {
  return (
    <a href={waLink()} target="_blank" rel="noopener" aria-label="Falar no WhatsApp" className="fixed bottom-6 right-6 z-40 hidden md:block">
      <span className="pulse-ring absolute inset-0 rounded-full bg-whatsapp" />
      <span className="relative grid h-16 w-16 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-lift transition-transform hover:scale-110">
        <MessageCircle className="h-7 w-7" />
      </span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-20 text-primary-foreground/80 md:pb-12">
      <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <img src={logo.url} alt="Petit Poá" width={120} height={85} loading="lazy" className="h-20 w-auto rounded-2xl" />
          <p className="mt-6 max-w-sm font-display text-2xl leading-snug text-primary-foreground">Um lugar onde seu filho é conhecido pelo nome, pelo jeito e pelo tempo dele.</p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-sun" />{SITE.street} — {SITE.district}, {SITE.city}/{SITE.state}</li>
            <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-sun" /><a href={SITE.phoneHref} className="hover:text-primary-foreground">{SITE.phoneDisplay}</a></li>
            <li className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-sun" />{SITE.hours}</li>
          </ul>
          <div className="mt-8 flex gap-3">
            {[{ h: SITE.instagram, I: Instagram, l: "Instagram" }, { h: SITE.facebook, I: Facebook, l: "Facebook" }, { h: SITE.linktree, I: Link2, l: "Linktree" }].map(({ h, I, l }) => (
              <a key={l} href={h} target="_blank" rel="noopener" aria-label={l} className="grid h-12 w-12 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"><I className="h-5 w-5" /></a>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <iframe title="Mapa da Petit Poá" src={SITE.mapEmbed} loading="lazy" className="h-80 w-full border-0 grayscale-[30%]" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
      <div className="container-x mt-14 flex flex-col justify-between gap-2 border-t border-primary-foreground/10 pt-6 text-xs sm:flex-row">
        <p>© {new Date().getFullYear()} Escola de Educação Infantil Petit Poá. Todos os direitos reservados.</p>
        <p>Berçário, Maternal e Pré-escola em Estância Velha/RS</p>
      </div>
    </footer>
  );
}
