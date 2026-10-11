export const snacks = ["veggies", "snacks", "chips", "popcorn", "chocolate chip cookies", "crackers", "hummus"];

export function printSnacks(): void {
	for (const snack of snacks) {
            console.log(snack);

        }
}

printSnacks();
