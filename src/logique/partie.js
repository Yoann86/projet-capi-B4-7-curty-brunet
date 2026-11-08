import { afficherFonctionnalite } from "../interface/console.js";

export class Partie 
{
    joueurs;
    backlog;
    fCourante = 0;

    constructor(joueurs, backlog) {
        this.joueurs = joueurs;
        this.backlog = backlog;
    }

    fonctionnaliteSuivante(){
        this.fCourante++;
        afficherFonctionnalite(this.backlog.fonctionnalites[this.fCourante]);
    }
}