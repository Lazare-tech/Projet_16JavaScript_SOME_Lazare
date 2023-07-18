/*console.log("Hello");
let variable= "coucou";
console.log(variable);

let maVariableSuperCool="kamelCase"
console.log(maVariableSuperCool);

var unTexte="Voici un texte";
console.log(unTexte);

unTexte ="Nouveau texte...";
console.log(unTexte ); */

/*const variable umuable qui ne change jamais
const prenom= "Justine";
console.log(prenom);*/

/*variable qui bouge est definit avec let ou var
var unChiffre= 24;
unChiffre=12;
console.log(unChiffre);*/

/*definir une chaine de caractere avec des guillemets
concatenation avec signe +
let chaine= 24;
let nouvelleChaine= "Le chiffre atendu est "+ chaine +" degrees";
console.log(nouvelleChaine);*/

/*..concatenation avec signe dollar $ et quotes................
let chaine= 24;
let nouvelleChaine= `Le chiffre attendu est : ${chaine} degrees`;
console.log(nouvelleChaine);*/

// .................................TYPE DE DONNEE
/*chaine de caractere entre guillemets
let string = "Je suis une chaine";
chiffre
let number= 24;
boolean
let boolean= True
tableau
let array=["Je","suis",24,false]
les objects
let object ={
    prenom:"audrey",
    age:24,
    ville:"Bordeaux"
};

//........................TYPE DE VARIABLE
console.log(typeof number);
console.log(typeof array);

deux autres types null et undefined
let arbre;
console.log(arbre); sortie undefined
let arbre= null;
console.log(arbre);sortie null */

/*les operateurs
let total= 2;
total= total+1;
total +=1;
total++;
total +=5
let x=4 ;
total = ++x
console.log(total);*/

//...................STRUCTURE DE CONTROLE
/*let x= 2;
let y=5;
if (x<y){
    console.log("x est inferieur a y ");
} else{
    console.log("x est superieur a y ");
}

on teste si x est false
if(!x){
    console.log("x existe");
}
double egale,tester les valeurs
if(x == y){
    console.log("True !");
} else{
    console.log("false !");
}

triple egale,tester les types et les valeurs
if(x === y){
    console.log("True !");
} else{
    console.log("false !");
}
comparaison avec le OU et &&
if(x === y || x > 3){
    console.log("True !")
} else{
    console.log("false !")
}

if(x === y && x > 3){
    console.log("True !")
} else{
    console.log("false !")
}

if(x === y ){
    console.log("True !")
} else if(x==y){
    console.log("x et y egaux en valeur")
} else{
    console.log(x+" et "+ y+" ne sont pas egaux");
    console.log(`${x} et ${y} ne sont pas egaux`);

}
les ternaires
x==y ? console.log("True !") : console.log("false !")
*/

// ....................LES FONCTIONS
/*DeCLARER UNE FONCTION
function faireQuelqueChose(){
    console.log("je fais un truc ");
    console.log("Trop cool!");
}
 APPEL DE LA FONCTION
faireQuelqueChose();
 FONCTION FLECHEE
const faireUneTache = (tache) => {
    console.log("je fais :"+ tache);
}
faireUneTache("Les courses")

LE RETURN
function calc(x ,y){
    return x+y;
}
calc(4,9);

(function maFonction() {
    console.log("je me joue tout seule");
})();*/

// CALCULATRICE
let total =0 ;
    function addition(x){
        total += x;
        return total;
    }
    
    function soustraction(x){
        total -= x;
        return total;
    }
    function division(x){
        if(total == 0){
            return (total= x);
        } else{
        total /= x;
        return total;
        }
    }
    function multiplication(x){
        if(total === 0){
            return (total= x);
        } else{
        total *=x;
        return total;
        }
    }
    
    function reset(){
        total = 0;
    }