//import { Caracteristiques } from "./caracteristiques";

export interface Produit {
    id?: number;
    nom: string,
    description: string,
    prix: number,
    lien: string,
    id_picsum: number,
    qteStock: number
    //caracteristiques : Caracteristiques
}

