import { printFeature } from "./animation.ts";


const music = ["Jingle Bells", "Silent Night"];

export function printMusic(): void {
        printFeature("music");
        for (const song of music) {
            console.log(song);
        }
}

