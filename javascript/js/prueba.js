const formulario = document.getElementById("formulario");
const numero1 = formulario.elements["numero1"];
const numero2 = formulario.elements["numero2"];



const sumar = () => {
    const num1 = document.getElementById("tx1");
    const num2 = document.getElementById('tx2').value;
    const resultado = document.getElementById("salida");
    //resultado.innerHTML = numero1 + numero2 ;
    //alert (numero1 + numero2 );
    let sumita =  parseFloat(numero1.value) + parseFloat(numero2.value);
    resultado.innerText= sumita;
    console.log("Resultado ==>" + num2);
    document.getElementById('tx3').value= sumita ;

    

}
