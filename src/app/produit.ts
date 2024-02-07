import { Caracteristiques } from "./caracteristiques";

export interface Produit {
    id?: number;
    nom: string,
    description: string,
    lien: string,
    url_image: string,
    prix: number, 
    caracteristiques : Caracteristiques
}

