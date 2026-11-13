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
  it("define Pré I para 4 anos", () => {
    expect(CLASS_AGES.pre1).toBe("4 anos");
  });
  it("define Pré II para 5 anos", () => {
    expect(CLASS_AGES.pre2).toBe("5 anos");
  });
});