// ! das coden vom JS war für mich viel zu komplex und nicht ausreichend genug erklärt in der Aufgabe für meinen aktuellen Wissensstand

function grundumsatz(){
    
    let basalKc = document.querySelector(".table5");
    let basalKj = document.querySelector(".table6");
    let dailyKc = document.querySelector(".table7");
    let dailyKj = document.querySelector(".table8");

    let bodySize = Number(document.querySelector("#body-size").value);

    let weight= document.querySelector("#weight").valueASNumber;

    let age = document.querySelector("#age").valueAsNumber;

    let activity = document.querySelector("#activity").value;

    let gender = document.querySelector(".gender-box").value;
    
    if( gender == female){
        let gUmsatzF = ( 655.1 + (9.6 * weight) + (1.8 * bodySize) - (4.7 * age))

        basalKc.innerText = gUmsatzF;

    } else {
        let gUmsatzM = ( 66.47 + (13.7 * weight) + (5 * bodySize) - (6.8 * age))
    }
    console.log(bodySize);
}







