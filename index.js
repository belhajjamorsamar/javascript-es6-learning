// Déclaration de variables pour le prénom et le nom de famille
let Firstname = "samar";
let Lastname = "belhajj amor";

// Déclaration de variables pour les valeurs numériques
let a = 5;
let b = 18;

// Utilisation d'un emoji dans une chaîne de caractères
const smiley = `😊`;
const message = `Have a nice day ${smiley}`; // Insertion de l'emoji dans le message
console.log(message); // Affiche le message avec l'emoji

{/* Multi-lignes sans caractère d'échappement */}
const paragraph = ` hello
im samar belhajj amor a fullstack developer and
a students at unbiversites of sfax 
on master resarche en data science`; // Déclaration d'un paragraphe multi-lignes

console.log(paragraph); // Affiche le paragraphe

// Déclaration d'une constante pour le nom complet avec calcul de l'âge
const FullName = `hello, My name is ${Firstname} ${Lastname} and my age is ${a + b} years old`; // Calculer l'âge en additionnant a et b
const FullNamee = Firstname + '' + Lastname; // Concaténation des chaînes de caractères pour obtenir le nom complet
console.log(FullName); // Affiche le nom complet avec l'âge
console.log(FullNamee); // Affiche le nom complet sans l'âge

// Utilisation de la concaténation pour créer une chaîne avec un saut de ligne
let example = "Hello \n" + "world"; // Utilisation de \n pour un saut de ligne
console.log(example); // Affiche "Hello" suivi de "world" sur la ligne suivante

// Affichage du contenu de la variable 'example' dans l'élément avec l'ID 'example'
document.getElementById('example').innerText = example; // Affecte le texte à un élément HTML

// Déstructuration avec renommage
const mypersonalInformation={
    name: "dooudi",
    city: "Tunisia",
}
const{name:nom, city:madina} =mypersonalInformation ;
console.log(nom);
console.log(madina);


//Déstructuration avec valeur par défaut
const object ={
    name:"khouloud",
}
const {name ,age=30} =object;
console.log (name, age);

//Déstructuration imbriqué 
const object2 ={
    namee :"moez",
    agee:22,
    adresse :{
        capital:"tunis",
        ville:"sfax"
    },
}
const {namee, agee, adresse:{capital,ville}}=object2;

console.log(capital);
console.log(ville);