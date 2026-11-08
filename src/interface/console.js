import readline from 'readline';
import { chargerBacklog } from '../logique/backlog.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const poserQuestion = (question) => {
    return new Promise((resolve) => rl.question(question, resolve));
};

export async function initialiserPartie(){
    const joueurs = [];

    const reponseNb = await poserQuestion('Saisissez le nombre de joueurs : ');
    const nbJoueur = parseInt(reponseNb, 10);

    for (let i = 0; i < nbJoueur; i++) {
        const pseudo = await poserQuestion(`Saisissez le pseudo du joueur ${i + 1} : `);
        joueurs.push(pseudo);
    }

    console.log('\nListe des joueurs enregistrés :', joueurs);
    rl.close();

    const backlog = await chargerBacklog("./src/exemples/backlog-example.json");

    return {joueurs, backlog};
}

export function afficherFonctionnalite(fonctionnalite){
    console.log("--- Fonctionnalité à estimer --- \n")
    console.log(`${fonctionnalite.id} : ${fonctionnalite.titre} \n`);
    console.log("--- Ouverture des votes ---")
}