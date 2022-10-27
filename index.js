const uno = document.getElementById("1");
const dos = document.getElementById("2");
const tres = document.getElementById("3");
const cuatro = document.getElementById("4");
const cinco = document.getElementById("5");
const seis = document.getElementById("6");
const siete = document.getElementById("7");
const ocho = document.getElementById("8");
const nueve = document.getElementById("9");
const cero = document.getElementById("0");
const mas = document.getElementById("mas");
const clr = document.getElementById("clr");
const menos = document.getElementById("menos");
const por = document.getElementById("por");
const division = document.getElementById("division");
const igual = document.getElementById("igual");
const result = document.getElementById("result");


uno.onclick = () =>{
    result.value = result.value + "1";
}
dos.onclick = () =>{
    result.value = result.value + "2";
}
tres.onclick = () =>{
    result.value = result.value + "3";
}
cuatro.onclick = () =>{
    result.value = result.value + "4";
}
cinco.onclick = () =>{
    result.value = result.value + "5";
}
seis.onclick = () =>{
    result.value = result.value + "6";
}
siete.onclick = () =>{
    result.value = result.value + "7";
}
ocho.onclick = () =>{
    result.value = result.value + "8";
}
nueve.onclick = () =>{
    result.value = result.value + "9";
}
cero.onclick = () =>{
    result.value = result.value + "0";
}
clr.onclick = () => {
    result.value = "";
}
