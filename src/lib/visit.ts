import { z } from "zod";

export const CHILD_AGES = ["4 a 12 meses", "1 ano", "2 anos", "3 anos", "4 anos", "5 anos", "Ainda vai nascer"] as const;
export const SHIFTS = ["Integral", "Manhã", "Tarde", "Ainda não sei"] as const;
export const visitSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  phone: z.string().trim().max(30).regex(/^[0-9()+\-\s]+$/, "Use apenas números e sinais de telefone").refine(value => {
    const digits = value.replace(/\D/g, "");
    return /^(?:55)?\d{10,11}$/.test(digits);
  }, "Informe o telefone com DDD"),
  child_age: z.enum(CHILD_AGES, { errorMap: () => ({ message: "Selecione a idade" }) }),
  shift: z.enum(SHIFTS, { errorMap: () => ({ message: "Selecione o turno" }) }),
  message: z.string().trim().max(1000).optional(),
});