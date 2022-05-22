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
    { id: 0, tag: TAG.BANNIERE, description: "", url: "https://drscdn.500px.org/photo/101577319/m%3D900/v2?sig=3972e8661c4c8d8df25699cbf8e6d3aaac5aa5bb4b2e11d661e16c3de42d3c72"},
    { id: 1, tag: TAG.LOGO, description: "", url: "lien vers le logo de bas de page"},
    { id: 2, tag: TAG.PAO, description: "Une description de ma 1re création. <b>ça c'est en gras</b>, et ça, <i>en italique</i>, tu peux <b><i>combiner les deux</i></b>. Et les retours à la ligne, c'est comme ça :<br>Hope je suis à la ligne !<br>Au fait, pour les guillemets doubles, faut rajouter un anti-slash devant : \"entre guillemets\" voiliiii ^^", url: "https://drive.google.com/uc?id=1HGRoMsjwoxPUU5Zis7NJraJk8WhbNNLC"},
    { id: 3, tag: TAG.PERSO, description: "Un petit texte, mais j'aimerais vraiment avoir quelque chose de plus concret...<br><b>PINKUUU!!!</b>", url: "https://drive.google.com/uc?id=1_CkWYxXihDtLZEW5TRqboJ76BiCVtq2a"},
    { id: 4, tag: TAG.PAO, description: "Un autre texte !!! Vraiment riquiqui celui-là <i>Comme ma ... !</i>", url: "https://drive.google.com/uc?id=1ZdoQF5itQlFMXRLnAKNlgyOh6UzZpIlT"},
    { id: 5, tag: TAG.PHOTO, description: "Encore un texte, purement pour faire de la volumétrie de données...", url: "https://drive.google.com/uc?id=1_R_3whHp6bUsN9uZN_2IQYKQdh3NltVl"},
    { id: 6, tag: TAG.PHOTO, description: "Aller, c'est le dernier.<br>Et désolé pour le manque d'inspiration :/", url: "https://drive.google.com/uc?id=1_9xI145QeMyvnoiB1VlFxL-sLVMLHMu8"},
    { id: 7, tag: TAG.PAO, description: "Ah bah non, <i>rip</i>...", url: "https://drive.google.com/uc?id=1awnRmm5jtqA7cJGGoyYZXOR-VOiKgQra"},
    { id: 8, tag: TAG.PAO, description: "Il y a d'autres <u>images</u> encore, tant mieux !", url: "https://drive.google.com/uc?id=1abAys3Rya25PbI8eUS9zNS-N8179h7If"},
    { id: 9, tag: TAG.PAO, description: "Aller, cette fois-ci, c'est la bonne ! <b>Der des der !</b>", url: "lien 8"}
]

export const CITATION: string = "Citation de bas de page"
