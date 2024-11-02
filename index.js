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

{/* Déstructuration des objet */}
// Déstructuration  avec renommage
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

{/* Déstructuration des arrays */}
let [firstname,midlename, latsname]=['Samar','coding love'  ,'love'];
console.log(firstname , midlename , latsname)

const tab1 =[2,3,4,6,];
const [deuxieme,troisième,quatrième] =tab1;
console.log(deuxieme);
console.log(troisième);

//valeur par defaut 
 const nombres =[9];
 const [neufieme,dixieme=10]=nombres;
 console.log(neufieme,dixieme);

 const tab2 =[1,2,3,4,6,7,8,9];
//utilisation de la paramettres "rest "" 
 const [premier ,...reste]=tab2;
 console.log(premier);
 console.log(reste);

 //echanger des variables 
 let c=5;
 let d=6;
 [c,d]=[d,c];

 console.log(`le valeur de c est ${c}`);
 console.log(`le valeur de d est ${d}`);

 //utilisation dans des fonctions 

 function affiercordonnes ([x,y]){
    console.log(`coordonnées : (${x}, ${y})  `);
 }
const point =[5,10];
affiercordonnes(point);

{/* object leterals */}

const personee ={
    nom:"samar",
    prenom:"belhajjamor",
    ville: "Tunis"
}
console.log(personee.nom);
console.log(personee.ville);


function addressMaker(adress){
    const {city, state}=adress;
    const newadress={
        city,
        state,
        counrty:"united states"
    }
    console.log(newadress);
}

addressMaker({city:'austin' , state:"texas"});

{/* for..of loop */}
//parcour tablaux
let incomes =[62000,67000,75000];
let total = 0;
for (const income of incomes){
    total +=income ;
}
console.log(total);

//parcours chaine
 const chaine="hello ly name is samar"
  for (const ch of chaine){
    console.log(ch);
  }

  


 



