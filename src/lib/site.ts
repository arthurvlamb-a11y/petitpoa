export const SITE = {
  name: "Petit Poá — Escola de Educação Infantil",
  origin: "https://petitpoa.lovable.app",
  founded: "2015-08-06",
  foundersExperience: 15,
  opens: "06:30",
  closes: "19:00",
  minimumIntegralHours: 7,
  minimumPartialHours: 4,
  short: "Petit Poá",
  phoneDisplay: "(51) 3271-8400",
  phoneHref: "tel:+555132718400",
  whatsapp: "555132718400",
  email: "escolainfantilpetitpoa@gmail.com",
  street: "Av. Sete de Setembro, 543",
  district: "Centro",
  city: "Estância Velha",
  state: "RS",
  zip: "93600-340",
  hours: "Segunda a sexta, das 6h30 às 19h",
  instagram: "https://www.instagram.com/escolapetitpoa/",
  facebook: "https://www.facebook.com/escolapetitpoa/",
  linktree: "https://linktr.ee/escolapetitpoa",
  mapEmbed:
    "https://www.google.com/maps?q=Av.+Sete+de+Setembro,+543,+Centro,+Est%C3%A2ncia+Velha+-+RS&output=embed",
};

export const waLink = (text = "Olá! Gostaria de agendar uma visita na Petit Poá.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const FAQ = [
  { q: "Como funciona a adaptação?", a: "É gradual e respeita a família e a criança. Na matrícula, a direção e a coordenação apresentam a escola e os combinados. Depois, as professoras fazem uma entrevista com a família sobre o desenvolvimento da criança. O choro é acolhido com colo, bico ou o objeto de apego que trouxer segurança, conforme o PPP." },
  { q: "Como as crianças aprendem na Petit Poá?", a: "Brincando. Trabalhamos por projetos e expedições pedagógicas que partem do interesse das crianças, alinhados à BNCC e aos seus seis direitos de aprendizagem: conviver, brincar, participar, explorar, expressar e conhecer-se." },
  { q: "Como é a avaliação?", a: "Não há nota nem reprovação. A cada semestre, a família recebe um parecer descritivo sobre o desenvolvimento motor, afetivo, cognitivo e social da criança, junto com suas produções, em uma conversa com a professora." },
  { q: "Tem turno integral?", a: "Sim. Oferecemos turno integral (mínimo de 7 horas por dia) e turno parcial (mínimo de 4 horas por dia), com funcionamento até as 19h." },
  { q: "A alimentação está inclusa?", a: "Sim. As refeições são preparadas na escola, com cardápio saudável para cada faixa etária, acompanhado por nutricionista, e com mobília adequada para incentivar a autonomia." },
  { q: "Como acompanho meu filho?", a: "Pela agenda diária, que é o canal oficial de recados entre a família e a escola, pelo aplicativo de câmeras, pelas reuniões de pais e pela entrega semestral das avaliações." },
  { q: "Tem câmeras?", a: "Sim. As salas contam com monitoramento por câmeras com acesso para as famílias por aplicativo, além de segurança monitorada 24 horas." },
  { q: "Quais idades atendem?", a: "Atendemos bebês a partir de 4 meses e crianças até 5 anos, nas turmas de Berçário I e II, Maternal I e II e Pré-escola I e II, organizadas pela idade conforme a data de corte do Conselho Municipal de Educação." },
  { q: "A escola pode dar remédio ao meu filho?", a: "Sim, desde que a família entregue a receita médica legível com as orientações." },
  { q: "O que preciso para matrícula?", a: "Certidão de nascimento da criança (e CPF, se tiver), carteira de vacinação atualizada, comprovante de residência e CPF do responsável. Na matrícula, você também recebe o Projeto Político-Pedagógico e o Regimento da escola." },
  { q: "Como funciona o desfralde?", a: "Escola e família observam os sinais de prontidão da criança e combinam esse processo juntas, com paciência e respeito ao seu tempo de desenvolvimento." },
  { q: "Como a escola acolhe as diferenças?", a: "O Regimento orienta relações acolhedoras, sem discriminação, e estratégias pedagógicas acompanhadas pela coordenação. Converse com a equipe sobre as necessidades da criança e os apoios disponíveis, sem enviar laudos pelo formulário de visita." },
  { q: "Como ficam a entrada, a saída e as faltas?", a: "A família entrega e recebe a criança com a professora da turma ou um responsável da escola. As faltas devem ser justificadas, e mudanças relevantes na rotina devem ser comunicadas pela agenda diária." },
];
