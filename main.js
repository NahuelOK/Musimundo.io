    document.getElementById("climaButton").addEventListener("click", function(){
    let grados = parseInt(prompt("Cual es la temperatura de hoy")) 
    console.log(grados)
    
    if(grados >= 25){
        alert("Hace calor")
    }
    else if (grados >= 16){
        alert("Esta lindo")
    }
    else if (grados >= 8){
        alert("Esta frescoo!")
    }
    else if(grados <= 7) {
        alert("Hermano me congelo")
    }
    else{
        alert("hermano pone un numero")
    }
});

document.getElementById("imcButton").addEventListener("click", function(){
    let peso = parseInt(prompt("¿Cual es tu peso? (en kilos)")) 
    let altura = parseFloat(prompt("¿Cual es tu altura? (en metros)"))
    let imc =  (peso / (altura * altura)) .toFixed(2)
    
    if(imc >= 30){
        alert("obeso, tu imc es de:" + imc)
    }
    else if (imc >= 25){    
        alert("Tu imc es mayor al normal, es de: " + imc)
    }
    else if (imc >= 18.5){
        alert("Tu imc es normal, es de: "+ imc)
    }
    else if (imc >= 1){
        alert("Desnutrido tu imc es de: " + imc)
    }
    else{
        alert("Hermano pone bien los numeros")
    }
});