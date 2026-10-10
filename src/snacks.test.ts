import { describe, it, expect } from "vitest";
import { snacks } from "./snacks";
import { music } from "./music";

describe("snacks", () => {
	it("should have at least 3 items", () => {
		expect(snacks.length).toBeGreaterThanOrEqual(3);
	});

	it("should include 'chips'", () => {
		expect(snacks).toContain("chips");
	});

	it("should include 'crackers'", () => {
		expect(snacks).toContain("crackers");
	});
});

describe("music", () => {
	it("should have at leat 2 songs", () => {
		expect(music.length).toBeGreaterThanOrEqual(2);
	});
});
