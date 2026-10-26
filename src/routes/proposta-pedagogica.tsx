import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, BookOpen, CalendarDays, ClipboardList, Compass, Ear, FileText, HeartHandshake, Leaf, Map,
  Moon, Music, NotebookPen, Palette, Pill, Puzzle, Search, Shapes, Sparkles, Users, Utensils, Baby, Footprints, Globe2,
} from "lucide-react";
import horta from "@/assets/horta.webp.asset.json";
import menina from "@/assets/menina-coelho.webp.asset.json";
import { Reveal } from "@/components/site/Reveal";
import { waLink } from "@/lib/site";

const TITLE = "Proposta pedagógica: como as crianças aprendem na Petit Poá";
const DESC = "Aprender brincando, por projetos e expedições pedagógicas alinhadas à BNCC. Adaptação, rotina, avaliação descritiva semestral e parceria com as famílias.";

export const Route = createFileRoute("/proposta-pedagogica")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/proposta-pedagogica" }],
  }),
  component: Proposta,
});

const RIGHTS = [
  { I: Users, t: "Conviver", d: "com outras crianças e adultos, respeitando as diferenças." },
  { I: Puzzle, t: "Brincar", d: "todos os dias, de muitas formas, sozinha e em grupo." },
  { I: HeartHandshake, t: "Participar", d: "das escolhas da rotina e das brincadeiras." },
  { I: Search, t: "Explorar", d: "materiais, espaços, sons, texturas e a natureza." },
  { I: Music, t: "Expressar", d: "sentimentos, ideias e perguntas em várias linguagens." },
  { I: Sparkles, t: "Conhecer-se", d: "e construir sua identidade com segurança." },
];

const FIELDS = [
  "O eu, o outro e o nós",
  "Corpo, gestos e movimentos",
  "Traços, sons, cores e formas",
  "Escuta, fala, pensamento e imaginação",
  "Espaços, tempos, quantidades, relações e transformações",
];

const METHOD = [
  { I: Ear, t: "Escutar", d: "Os temas nascem das perguntas das crianças, de algo vivido pelo grupo ou de uma proposta da professora." },
  { I: Compass, t: "Investigar", d: "Nas expedições pedagógicas, a criança vira pesquisadora: observa, testa, conversa e descobre." },
  { I: Palette, t: "Criar", d: "Movimento, imagem e linguagem se misturam em brincadeiras, oficinas e saídas de campo." },
  { I: NotebookPen, t: "Registrar", d: "A professora observa e registra cada passo para planejar o próximo, no tempo de cada um." },
];

const CARE = [
  { I: Baby, t: "Adaptação gradual", d: "Primeiro conversamos com a família e apresentamos a escola. Depois, as professoras fazem uma entrevista sobre o desenvolvimento do bebê. O choro é acolhido, com colo, bico ou o objeto de apego que trouxer segurança." },
  { I: Footprints, t: "Desfralde no tempo dela", d: "A retirada das fraldas respeita os sinais de cada criança e é combinada em conjunto com a família." },
  { I: Moon, t: "Hora do sono", d: "Cada criança tem seu ritmo de descanso. Paninho, bico ou outro objeto de apego são bem-vindos." },
  { I: Utensils, t: "Refeições com autonomia", d: "Alimentos saudáveis, pensados para cada faixa etária, com mobília adequada para a criança comer sozinha. Uma nutricionista acompanha o cardápio." },
];

const FAMILY = [
  { I: NotebookPen, t: "Agenda diária", d: "O registro oficial de recados entre a família e a escola, todos os dias." },
  { I: Users, t: "Reuniões de pais", d: "Previstas no calendário, com a primeira logo no início do ano." },
  { I: FileText, t: "Avaliação descritiva", d: "A cada semestre, um parecer escrito sobre o desenvolvimento motor, afetivo, cognitivo e social, entregue em conversa com a professora." },
  { I: BookOpen, t: "Produções da criança", d: "Atividades e documentos pedagógicos voltam para casa a cada semestre." },
  { I: HeartHandshake, t: "Atendimento aos pais", d: "Conversas com a professora e a coordenação sempre que precisar." },
  { I: CalendarDays, t: "Festas e passeios", d: "Momentos para a família viver a escola junto com a criança." },
];

const RULES = [
  { I: CalendarDays, t: "Ano letivo", d: "Calendário anual com, no mínimo, 200 dias e 800 horas de atividades." },
  { I: ClipboardList, t: "Turnos", d: "Integral (mínimo de 7 horas por dia) ou parcial (mínimo de 4 horas por dia)." },
  { I: Pill, t: "Medicamentos", d: "Só são dados na escola com a receita médica legível entregue pela família." },
  { I: FileText, t: "Matrícula", d: "Certidão de nascimento (e CPF, se tiver), carteira de vacinação atualizada, comprovante de residência e CPF do responsável." },
  { I: Map, t: "Entrada e saída", d: "A criança é entregue e buscada sempre com a professora da turma ou um responsável da escola." },
  { I: NotebookPen, t: "Cancelamento", d: "Feito por formulário, com 30 dias de antecedência, conforme o contrato." },
];

function Proposta() {
  return (
    <>
      <section className="bg-cream pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="container-x max-w-4xl text-center">
          <Reveal><p className="eyebrow">Proposta pedagógica</p></Reveal>
          <Reveal delay={80}><h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">Por trás de cada brincadeira, existe intenção.</h1></Reveal>
          <Reveal delay={160}><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Na Petit Poá, a criança aprende brincando e é protagonista do próprio caminho. Tudo o que você vê na rotina, do acolhimento na porta ao almoço, faz parte de um projeto pedagógico pensado com cuidado.</p></Reveal>
        </div>
      </section>

      {/* Filosofia */}
      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-lift">
              <img src={menina.url} alt="Menina brincando com um coelho no pátio da escola" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal><p className="eyebrow">No que acreditamos</p></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight md:text-5xl">É brincando que a criança conhece o mundo.</h2></Reveal>
            <Reveal delay={140}><p className="mt-6 text-lg leading-relaxed text-muted-foreground">Nossa filosofia é oferecer aprendizagens que façam sentido, por meio do lúdico, priorizando o brincar e o desenvolvimento integral: corpo, afeto, pensamento, linguagem e convivência.</p></Reveal>
            <Reveal delay={200}><p className="mt-4 text-lg leading-relaxed text-muted-foreground">Cuidar e educar andam juntos. Queremos ver crescer crianças autônomas, críticas, criativas e respeitosas, que confiam no próprio potencial.</p></Reveal>
            <Reveal delay={260}>
              <blockquote className="mt-8 rounded-3xl bg-sage-soft p-6 font-display text-xl leading-snug text-ink">
                “Toda criança que brinca se comporta como um poeta.”
                <span className="mt-2 block font-sans text-sm text-muted-foreground">Winnicott, citado em nosso Projeto Político-Pedagógico</span>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Direitos BNCC */}
      <section className="bg-sky-soft py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal><p className="eyebrow">Alinhados à BNCC</p></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight md:text-5xl">Seis direitos que guiam o dia a dia.</h2></Reveal>
            <Reveal delay={140}><p className="mt-5 text-lg text-muted-foreground">A Base Nacional Comum Curricular garante a toda criança da Educação Infantil esses direitos. Aqui, eles estão na rotina, não só no papel.</p></Reveal>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RIGHTS.map(({ I, t, d }, i) => (
              <Reveal key={t} delay={i * 70}>
                <li className="lift h-full rounded-[2rem] bg-card p-7 shadow-soft">
                  <I className="breathe h-7 w-7 text-primary" style={{ animationDelay: `${i * 0.3}s` }} />
                  <h3 className="mt-5 text-2xl">{t}</h3>
                  <p className="mt-2 text-muted-foreground">{d}</p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <div className="mt-12 rounded-[2rem] bg-card/70 p-7">
              <p className="flex items-center gap-2 text-sm font-bold text-primary"><Shapes className="h-4 w-4" /> Os cinco campos de experiência</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {FIELDS.map((f) => <span key={f} className="rounded-full bg-background px-4 py-2 text-sm font-medium text-ink">{f}</span>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal><p className="eyebrow">Nossa metodologia</p></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight md:text-5xl">Aprender por projetos e expedições.</h2></Reveal>
            <Reveal delay={140}><p className="mt-5 text-lg text-muted-foreground">O planejamento é feito por projetos pedagógicos e expedições que partem do interesse das crianças. A professora estimula, observa e media.</p></Reveal>
          </div>
          <ol className="mt-14 grid gap-4 md:grid-cols-4">
            {METHOD.map(({ I, t, d }, i) => (
              <Reveal key={t} delay={i * 90}>
                <li className="relative h-full rounded-[2rem] bg-sun-soft p-7">
                  <span className="font-display text-5xl text-coral/40">0{i + 1}</span>
                  <I className="mt-4 h-7 w-7 text-coral" />
                  <h3 className="mt-4 text-2xl">{t}</h3>
                  <p className="mt-2 text-muted-foreground">{d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-10 grid gap-4 md:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <div className="h-full rounded-[2rem] bg-sage-soft p-8">
                <p className="flex items-center gap-2 text-sm font-bold text-accent-foreground"><Globe2 className="h-4 w-4" /> Temas que atravessam o ano</p>
                <p className="mt-3 text-lg text-ink">Educação ambiental, educação musical e história e cultura afro-brasileira e indígena, com saídas de campo e contato com a natureza.</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-[2rem] border p-8">
                <p className="flex items-center gap-2 text-sm font-bold text-primary"><BookOpen className="h-4 w-4" /> Materiais de apoio</p>
                <p className="mt-3 text-muted-foreground">O planejamento segue a BNCC e usa o programa pedagógico Cloe e o Currículo Linear Camino, uma plataforma de aprendizagem ativa.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Rotina com cuidado */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Reveal><p className="eyebrow">Cuidar também é educar</p></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight md:text-5xl">Os momentos que mais preocupam os pais.</h2></Reveal>
            <Reveal delay={140}><p className="mt-5 text-lg text-muted-foreground">Adaptação, sono, fraldas e comida também fazem parte do currículo. Em todos eles, respeitamos o tempo de cada criança.</p></Reveal>
            <Reveal delay={200}>
              <div className="mt-8 hidden aspect-[4/3] overflow-hidden rounded-[2rem] lg:block">
                <img src={horta.url} alt="Horta da escola" loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </div>
            </Reveal>
          </div>
          <div className="space-y-4">
            {CARE.map(({ I, t, d }, i) => (
              <Reveal key={t} delay={i * 80}>
                <article className="lift flex gap-5 rounded-[2rem] bg-card p-7 shadow-soft">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-soft text-primary"><I className="h-6 w-6" /></span>
                  <div>
                    <h3 className="text-2xl">{t}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{d}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliação + famílias */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal><p className="eyebrow">Escola e família</p></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight md:text-5xl">Você acompanha cada conquista.</h2></Reveal>
            <Reveal delay={140}><p className="mt-5 text-lg text-muted-foreground">Na Educação Infantil não existe nota nem reprovação. A avaliação olha para as conquistas e mudanças da criança, nunca para o que ela ainda não faz.</p></Reveal>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FAMILY.map(({ I, t, d }, i) => (
              <Reveal key={t} delay={i * 70}>
                <li className="h-full rounded-[2rem] border p-7">
                  <I className="h-6 w-6 text-coral" />
                  <h3 className="mt-4 text-xl">{t}</h3>
                  <p className="mt-2 text-muted-foreground">{d}</p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <p className="mt-8 flex items-start gap-3 rounded-2xl bg-sage-soft p-5 text-ink">
              <Leaf className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" />
              Ao final de cada semestre, professoras e direção se reúnem em conselho de classe para olhar o desenvolvimento de cada criança. A equipe participa de formações continuadas ao longo do ano.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Funcionamento */}
      <section className="bg-ink py-20 text-primary-foreground md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal><p className="eyebrow text-sun">Regimento escolar</p></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl leading-tight text-primary-foreground md:text-5xl">Combinados claros desde o primeiro dia.</h2></Reveal>
            <Reveal delay={140}><p className="mt-5 text-lg text-primary-foreground/75">As principais regras de funcionamento, em poucas linhas. Na matrícula, a família recebe o Projeto Político-Pedagógico e o Regimento completos.</p></Reveal>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RULES.map(({ I, t, d }, i) => (
              <Reveal key={t} delay={i * 60}>
                <li className="h-full rounded-[2rem] bg-primary-foreground/5 p-7">
                  <I className="h-6 w-6 text-sun" />
                  <h3 className="mt-4 text-xl text-primary-foreground">{t}</h3>
                  <p className="mt-2 text-primary-foreground/75">{d}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x text-center">
          <Reveal><h2 className="mx-auto max-w-2xl text-4xl md:text-5xl">Venha ver essa proposta acontecendo.</h2></Reveal>
          <Reveal delay={100}>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/agendar-visita" className="ripple-btn inline-flex h-14 items-center justify-center gap-2 rounded-full bg-coral px-8 font-bold text-primary-foreground shadow-lift">Agendar visita <ArrowRight className="h-5 w-5" /></Link>
              <a href={waLink("Olá! Li sobre a proposta pedagógica da Petit Poá e gostaria de tirar algumas dúvidas.")} target="_blank" rel="noopener" className="inline-flex h-14 items-center justify-center rounded-full border px-8 font-bold text-ink">Tirar dúvidas no WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
