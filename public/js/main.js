// EXO 1

class Personne {
    constructor (nom, prenom, age, taille) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.taille = taille
        this.bonjour = () => {
            return `Bonjour je suis ${this.prenom} ${this.nom}, j'ai ${age} ans et je mesure ${taille} cm.`
        }
    }
}

let maxence = new Personne('Lemaire', 'Maxence', 25, 195)
console.log(maxence.bonjour());

let adrien = new Personne('Vervekken', 'Adrien', 25, 193)
console.log(adrien.bonjour());

let sebastien = new Personne('Nothomb', 'Sebastien', 25, 180)
console.log(sebastien.bonjour());

// EXO 2

console.log("_____2_____");

class Personnage {
    constructor (nom, age, ville) {
        this.nom = nom
        this.age = age
        this.ville = ville
        this.sePresenter = () => {
            console.log(`Bonjour, je m'appelle ${this.nom}`);
        }
    }
}

let nicolas = new Personnage('Barriol', 24, 'Marseille')
let simon = new Personnage('Lesens', 25, 'Beersel')

nicolas.sePresenter();
simon.sePresenter();

// EXO 3

console.log("_____3_____");

class Lieux {
    constructor (nom, contenu, ingredients) {
        this.nom = nom
        this.contenu = [contenu]
        this.ingredients = [ingredients]
    }
}

let maison = new Lieux('maison', '')
let epicerie = new Lieux('epicerie', '', '')
let cuisine = new Lieux('cuisine', '', '')

class Ingrediens {
    constructor (nom, etat, prix) {
        this.nom = nom
        this.etat = etat
        this.prix = prix
    }
}

let poivron = new Ingrediens('poivron', 'entier', 1)
let oignon = new Ingrediens('oignon', 'entier', 2)
let oeuf = new Ingrediens('oeuf', 'entier', 4)
let epice = new Ingrediens('epice', 'moulu', 3.25)
let paprika = new Ingrediens('paprika', 'moulu', 1.5)
let fromage = new Ingrediens('fromage', 'coupé', 1.6)

class Personne {
    constructor (nom, lieu, argent, panier) {
        this.nom = nom
        this.lieu = lieu
        this.argent = argent
        this.panier = panier
        this.se_deplacer = (x) => {
            
        }
        this.payer = (x) => {
            
        }
        this.couper = (x, y) => {
            
        }
    }
}

// EXO 4

console.log("_____4_____");

class Objet {
    constructor (nom, prix) {
        this.nom = nom
        this.prix = prix
    }
}

let horloge = new Objet('horloge', 30)
let porte = new Objet('porte', 50)
let boite = [horloge, porte]

class Peronnage {
    constructor (nom, sac, argent) {
        this.nom = nom
        this.sac = [sac]
        this.argent = argent
        this.prendre = () => {
            
        }
        this.acheter = () => {

        }
    }
}

let alex = new Personnage 
let louise = new Personnage 