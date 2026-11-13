import { describe, expect, it } from "vitest";
import { CLASS_AGES } from "@/lib/class-ages";

describe("Idades confirmadas pela escola", () => {
  it("mantém Berçário sem idade máxima", () => {
    expect(CLASS_AGES.bercario).toBe("A partir de 4 meses");
  });
  it("define Maternal I para 2 anos", () => {
    expect(CLASS_AGES.maternal1).toBe("2 anos");
  });
  it("define Maternal II para 3 anos", () => {
    expect(CLASS_AGES.maternal2).toBe("3 anos");
  });
  it("mantém Pré-escola para 4 e 5 anos", () => {
    expect(CLASS_AGES.pre).toBe("4 e 5 anos");
  });
});