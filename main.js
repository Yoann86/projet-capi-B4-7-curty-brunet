import { initialiserPartie } from "./src/interface/console.js";
import { Partie } from "./src/logique/partie.js";

async function main(){
    const {joueurs, backlog} = await initialiserPartie();
    const partie = new Partie(joueurs, backlog);
    console.log(partie.joueurs);
    console.log(partie.backlog);
    partie.fonctionnaliteSuivante();
}

main();
