import { printFeature } from "./animation.ts";

const snacks = ["veggies", "snacks", "chips", "popcorn"];

export function printSnacks(): void {
	printFeature("snacks");
	for (const snack of snacks) {
            console.log(snack);

        }
}


