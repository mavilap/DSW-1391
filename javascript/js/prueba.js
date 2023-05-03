const formulario = document.getElementById("formulario");
const numero1 = formulario.elements["numero1"].value;
const numero2 = formulario.elements["numero2"].value;

const sumar = () =>{
    alert (numero1 + numero2 );

    const  resultado = document.getElementById("salida");
    resultado.innerHTML="numero1 + numero2" ;

}
