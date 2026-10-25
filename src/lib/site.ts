export const SITE = {
  name: "Petit Poá — Escola de Educação Infantil",
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
  hours: "Segunda a sexta, das 7h às 19h",
  instagram: "https://www.instagram.com/escolapetitpoa/",
  facebook: "https://www.facebook.com/escolapetitpoa/",
  linktree: "https://linktr.ee/escolapetitpoa",
  mapEmbed:
    "https://www.google.com/maps?q=Av.+Sete+de+Setembro,+543,+Centro,+Est%C3%A2ncia+Velha+-+RS&output=embed",
};

export const waLink = (text = "Olá! Gostaria de agendar uma visita na Petit Poá.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const FAQ = [
  { q: "Como funciona a adaptação?", a: "A adaptação é gradual e individual. Começamos com períodos curtos, com a presença da família quando necessário, e ampliamos o tempo conforme a criança se sente segura. Nossa psicóloga escolar acompanha esse momento junto com as professoras." },
  { q: "Tem turno integral?", a: "Sim. Oferecemos turno integral com funcionamento até as 19h, além das opções de meio turno pela manhã ou à tarde." },
  { q: "A alimentação está inclusa?", a: "Sim. Todas as refeições estão inclusas, com cardápio nutritivo e preparado pensando em cada fase do desenvolvimento infantil." },
  { q: "Como acompanho meu filho?", a: "Pelo aplicativo de câmeras, pela agenda diária com as professoras e por encontros com a coordenação. Você acompanha a rotina de perto, com tranquilidade." },
  { q: "Tem câmeras?", a: "Sim. As salas contam com monitoramento por câmeras com acesso para as famílias por aplicativo, além de segurança monitorada 24 horas." },
  { q: "Quais idades atendem?", a: "Atendemos crianças de 4 meses a 5 anos, nas turmas de Berçário, Maternal e Pré-escola." },
  { q: "O que preciso para matrícula?", a: "Certidão de nascimento da criança, carteira de vacinação atualizada, documento de identidade e CPF dos responsáveis e comprovante de residência. Na visita, confirmamos a lista completa com você." },
];
