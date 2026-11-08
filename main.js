import { initialiserPartie } from "./src/interface/console.js";
import { Partie } from "./src/logique/partie.js";

async function main(){
    const {joueurs} = await initialiserPartie();
    const partie = new Partie(joueurs, "backlog");
    console.log(partie.joueurs);
}

main();
