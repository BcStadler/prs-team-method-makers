import { describe, it, expect } from "vitest";
import { getTextBackgroundByStatus } from "./formatUtilities";

describe("getTextBackgroundByStatus", () => {
  it("returns the primary badge class for NEW", () => {
    expect(getTextBackgroundByStatus("NEW")).toBe("text-bg-primary");
  });

  it("returns an empty string for an unknown status", () => {
    expect(getTextBackgroundByStatus("BANANA")).toBe("");
  });
});
