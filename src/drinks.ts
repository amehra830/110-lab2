function print_drinks(drinks: string[]): void{
        for(const drink of drinks){
                console.log(drink);
        }
}

const drink_list: string[] = ["coke", "lemonade", "fruit punch"];
print_drinks(drink_list);
