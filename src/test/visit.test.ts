import { describe, expect, it } from "vitest";
import { visitSchema } from "@/lib/visit";
import { SITE } from "@/lib/site";

const valid = { name: "Responsável Teste", phone: "(51) 99999-0000", child_age: "2 anos", shift: "Integral" };

describe("Visit requests", () => {
  it("accepts the required contact fields without a message", () => {
    expect(visitSchema.safeParse(valid).success).toBe(true);
  });
  it("rejects an incomplete phone without DDD", () => {
    expect(visitSchema.safeParse({ ...valid, phone: "99999-0000" }).success).toBe(false);
  });
  it("rejects a missing responsible name", () => {
    expect(visitSchema.safeParse({ ...valid, name: "" }).success).toBe(false);
  });
  it("rejects an unselected age", () => {
    expect(visitSchema.safeParse({ ...valid, child_age: "" }).success).toBe(false);
  });
  it("rejects an unselected shift", () => {
    expect(visitSchema.safeParse({ ...valid, shift: "" }).success).toBe(false);
  });
  it("limits optional messages to 1000 characters", () => {
    expect(visitSchema.safeParse({ ...valid, message: "a".repeat(1001) }).success).toBe(false);
  });
});

describe("Documented school information", () => {
  it("keeps the experience supplied by the school", () => {
    expect(SITE.foundersExperience).toBe(15);
  });
  it("keeps the weekday opening hours from the Regimento", () => {
    expect([SITE.opens, SITE.closes]).toEqual(["06:30", "19:00"]);
  });
  it("keeps the minimum integral shift from the Regimento", () => {
    expect(SITE.minimumIntegralHours).toBe(7);
  });
  it("keeps the minimum partial shift from the Regimento", () => {
    expect(SITE.minimumPartialHours).toBe(4);
  });
});