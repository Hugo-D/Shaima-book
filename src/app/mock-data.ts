import { Type } from "@angular/core"

export enum TAG {
    LOGO,
    BANNIERE,
    PAO = "Réalisations PAO",
    PERSO = "Réalisations personnelles",
    PHOTO = "Photos"
}

export interface IImage {
    id: number;
    tag: TAG;
    description: string
    url: string
}

export interface ICategorie {
    tag: TAG;
    description: string;
}

export interface ICollection {
    categorie: ICategorie,
    images: IImage[]
}

export const CATEGORIE: ICategorie[] = [
    {tag: TAG.PAO, description: "Blah blah PAO cé trop cool"},
    {tag: TAG.PERSO, description: "Autre blah blah sur les réalisations personnelles"},
    {tag: TAG.PHOTO, description: "Dernier blah blah pour les photos !"}
]

export const IMAGE: IImage[] = [
    { id: 0, tag: TAG.BANNIERE, description: "", url: "https://drive.google.com/uc?id=1JoQlE6VFaqp3MnrnKZrggmUSotA3C7sy"},
    { id: 1, tag: TAG.LOGO, description: "", url: "https://drive.google.com/uc?id=1_IR3Bo8mx5IO6ucDq5Z8untV-RlktoGV"},
    { id: 2, tag: TAG.PAO, description: "Realisation d'une affiche sur le theme de la répétition.", url: "https://drive.google.com/uc?id=1eWOnfQCKpVCBW62cJcU3CrWdbLhQ1ppm"},
    { id: 3, tag: TAG.PERSO, description: "Réalisation d'un logo pour la commande d'une cliente.", url: "https://drive.google.com/uc?id=1eWOnfQCKpVCBW62cJcU3CrWdbLhQ1ppm"},
    { id: 4, tag: TAG.PAO, description: "Réalisation d'une couverture de livre pour un travail effectuer en classe", url: "https://drive.google.com/uc?id=1eWOnfQCKpVCBW62cJcU3CrWdbLhQ1ppm"},
]

export const CITATION: string = "Citation de bas de page"
