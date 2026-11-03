import { z } from "zod";

export const CHILD_AGES = ["4 a 12 meses", "1 ano", "2 anos", "3 anos", "4 anos", "5 anos", "Ainda vai nascer"] as const;
export const SHIFTS = ["Integral", "Manhã", "Tarde", "Ainda não sei"] as const;
export const visitSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  child_age: z.enum(CHILD_AGES, { errorMap: () => ({ message: "Selecione a idade" }) }),
  shift: z.enum(SHIFTS, { errorMap: () => ({ message: "Selecione o turno" }) }),
  message: z.string().trim().max(1000).optional(),
});

export function visitMessage(data: z.infer<typeof visitSchema>): string {
  const lines = [
    "Olá! Gostaria de agendar uma visita na Petit Poá.",
    `Nome: ${data.name}`,
    `Idade da criança: ${data.child_age}`,
    `Turno desejado: ${data.shift}`,
  ];
  if (data.message) lines.push(`Mensagem: ${data.message}`);
  return lines.join("\n");
}
