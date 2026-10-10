import { print_drinks } from "./drinks";
import { printFeature } from "./animation";

function main(){
	printFeature("DRINKS");
	
	const drink_list: string[] = ["coke", "lemonade", "fruit punch"];
	print_drinks(drink_list);
}

main();
