import { printFeature } from "./animation";


export const music = ["Jingle Bells", "Silent Nights"];

export function printMusic(): void {
        printFeature("music");
        for (const song of music) {
            console.log(song);
        }
}

