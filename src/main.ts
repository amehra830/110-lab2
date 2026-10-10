import { print_drinks } from "./drinks";
import { printFeature } from "./animation";
import { printMusic } from "./music";

function main(){
	printFeature("DRINKS");
	
	const drink_list: string[] = ["coke", "lemonade", "fruit punch"];
	print_drinks(drink_list);

	printMusic();
}

main();

