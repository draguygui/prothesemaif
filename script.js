
function myFunction(){ // Fonction appelée sur le bouton
let choix = document.forms[0]; 
let txt = ""; // va devenir " amov, fixe ou audi"
let age = document.querySelector(".age"); // choix de l'ancienneté
let devis = document.querySelector(".devis"); // devis validé
let taux;
let tauxResult = document.querySelector(".tauxResult");
let pec = document.querySelector(".pec");
let i; 


for(i=0; i<choix.length ; i++){
    if (choix[i].checked){
        txt = txt + choix[i].value + ""; // définit la valeur du choix : audi; amov; fixe 
    }
}

///// FIXE TAUX 
if(txt== "fixe" && age.value <2){ // 
    taux= 1;
    console.log(taux*devis.value);
    tauxResult.innerText = "100";
    let num = taux*devis.value;  // je crée num et une autre variable n limitant cette sommme à deux décimales
    let n = num.toFixed(2); 
    pec.innerText = n;
   
} else if ( txt == "fixe" && age.value >=2 && age.value<=5){
    taux = 0.75;
    console.log(taux*devis.value);
    tauxResult.innerText = "75";
    let num = taux*devis.value; 
    let n = num.toFixed(2);
    pec.innerText = n;
}
 else if ( txt == "fixe" && age.value >=6 && age.value<=9){
    taux = 0.50;
    console.log(taux*devis.value);
    tauxResult.innerText = "50";
    let num = taux*devis.value; 
    let n = num.toFixed(2);
    pec.innerText = n;
}
 else if ( txt == "fixe" && age.value >9){
    taux = 0.25;
    console.log(taux*devis.value);
    tauxResult.innerText = "25";
    let num = taux*devis.value; 
    let n = num.toFixed(2);
    pec.innerText = n;
}

///// AMOVIBLE TAUX 

if(txt== "amov" && age.value <1){ // 
    taux= 1;
    console.log(taux*devis.value);
    tauxResult.innerText = "100";
    let num = taux*devis.value; 
    let n = num.toFixed(2);
    pec.innerText = n;
} else if ( txt == "amov" && age.value >=1 && age.value<=3){
    taux = 0.75;
    console.log(taux*devis.value);
    tauxResult.innerText = "75";
    let num = taux*devis.value; 
    let n = num.toFixed(2);
    pec.innerText = n;
}
 else if ( txt == "amov" &&  age.value >=4 && age.value<=6){
    taux = 0.50;
    console.log(taux*devis.value);
    tauxResult.innerText = "50";
    let num = taux*devis.value; 
    let n = num.toFixed(2);
    pec.innerText = n;
}
 else if ( txt == "amov" && age.value >=7){
    taux = 0.25;
    console.log(taux*devis.value);
    tauxResult.innerText = "25";
    let num = taux*devis.value; 
    let n = num.toFixed(2);
    pec.innerText = n;

 }

 ///// AUDITIVE TAUX 

 if(txt== "audi" && age.value <1){ // 
    taux= 0.80;
    console.log(taux*devis.value);
    tauxResult.innerText = "80";
    let num = taux*devis.value; 
    let n = num.toFixed(2);
    pec.innerText = n;
} else if ( txt == "audi" && age.value >=1 && age.value<=2){
    taux = 0.60;
    console.log(taux*devis.value);
    tauxResult.innerText = "60";
    let num = taux*devis.value; 
    let n = num.toFixed(2);
    pec.innerText = n;
}
 else if ( txt == "audi" &&  age.value ==3){
    taux = 0.40;
    console.log(taux*devis.value);
    tauxResult.innerText = "40";
    let num = taux*devis.value; 
    let n = num.toFixed(2);
    pec.innerText = n;
}
 else if ( txt == "audi" && age.value >=4){
    taux = 0.20;
    console.log(taux*devis.value);
    tauxResult.innerText = "20";
    let num = taux*devis.value; 
    let n = num.toFixed(2);
    pec.innerText = n;
 } ;






console.log(txt + " " + age.value); // age.value=   ancienneté 



}