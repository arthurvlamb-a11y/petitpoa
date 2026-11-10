import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/proposta-pedagogica")({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { title: "Conheça a Petit Poá — Escola Infantil em Estância Velha" },
      { name: "description", content: "Conheça os espaços, as turmas e o dia a dia da Petit Poá." },
      { property: "og:title", content: "Conheça a Petit Poá — Escola Infantil em Estância Velha" },
      { property: "og:description", content: "Conheça os espaços, as turmas e o dia a dia da Petit Poá." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <Navigate to="/" replace />,
});
