//variables
let pantalla = document.getElementById("pantalla");
let tablero = document.getElementById("tablero");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");

let btnMas = document.getElementById("btnMas");
let btmMenos = document.getElementById("btnMenos");
let btnMul = document.getElementById("btnMul");
let btnDivir = document.getElementById("btnDividir");

let btnPotencia = document.getElementById("btnPotencia");
let btnPotenciaN = document.getElementById("btnPotenciaN");
let btnRaiz = document.getElementById("btnRaiz")

let btnC = document.getElementById("btnC");
let btnIgual = document.getElementById("btnIgual");
let btnDecimal = document.getElementById("btnDecimal");

let primerNumero = 0;
let segundoNumero = 0;
let operacion = "";
let historial = 0;

//Funciones
const mas = () => {
  if (pantalla.innerHTML === "") {
    console.log(operacion);
    tablero.innerHTML = "";
  } else {
    if (operacion === "") {
      if (historial === 1) {
        tablero.innerHTML = pantalla.innerHTML;
        pantalla.innerHTML = "";
        tablero.innerHTML += "+";
        operacion = "+";
      } else {
        primerNumero = pantalla.innerHTML;
        pantalla.innerHTML = "";
        tablero.innerHTML += "+";
        operacion = "+";
      }
    }
  }
};

const menos = () => {
  if (pantalla.innerHTML === "") {
    console.log(operacion);
  } else {
    if (operacion === "") {
      if (historial === 1) {
        tablero.innerHTML = pantalla.innerHTML;
        pantalla.innerHTML = "";
        tablero.innerHTML += "-";
        operacion = "-";
      } else {
        primerNumero = pantalla.innerHTML;
        pantalla.innerHTML = "";
        tablero.innerHTML += "-";
        operacion = "-";
      }
    }
  }
};

const mul = () => {
  if (pantalla.innerHTML === "") {
    console.log(operacion);
  } else {
    if (operacion === "") {
      if (historial === 1) {
        tablero.innerHTML = pantalla.innerHTML;
        pantalla.innerHTML = "";
        tablero.innerHTML += "x";
        operacion = "*";
      } else {
        primerNumero = pantalla.innerHTML;
        pantalla.innerHTML = "";
        tablero.innerHTML += "x";
        operacion = "*";
      }
    }
  }
};

const dividir = () => {
  if (pantalla.innerHTML === "") {
    console.log(operacion);
  } else {
    if (operacion === "") {
      if (historial === 1) {
        tablero.innerHTML = pantalla.innerHTML;
        pantalla.innerHTML = "";
        operacion = "/";
        tablero.innerHTML += "÷";
      } else {
        primerNumero = pantalla.innerHTML;
        pantalla.innerHTML = "";
        operacion = "/";
        tablero.innerHTML += "÷";
      }
    }
  }
};

const potenciaN = () => {
  if (pantalla.innerHTML === "") {
    console.log(operacion);
  } else {
    if (operacion === "") {
      if (historial === 1) {
        tablero.innerHTML = pantalla.innerHTML;
        pantalla.innerHTML = "";
        operacion = "n";
        tablero.innerHTML += "^";
      } else {
        primerNumero = pantalla.innerHTML;
        pantalla.innerHTML = "";
        operacion = "n";
        tablero.innerHTML += "^";
      }
    }
  }
};

const potencia = () => {
  if (pantalla.innerHTML === "") {
  } else {
    let resultado = 0;
    if (historial === 1) {
      tablero.innerHTML = pantalla.innerHTML;
      primerNumero = pantalla.innerHTML;
      console.log(primerNumero);
      resultado = Math.pow(parseFloat(primerNumero), 2);
      tablero.innerHTML += "²";
      pantalla.innerHTML = resultado;
    } else {
      primerNumero = pantalla.innerHTML;
      console.log(primerNumero);
      resultado = Math.pow(parseFloat(primerNumero), 2);
      tablero.innerHTML += "²";
      pantalla.innerHTML = resultado;
    }
  }

  primerNumero = pantalla.innerHTML;
};

const operar = () => {
  if (pantalla.innerHTML === "") {
  } else {
    segundoNumero = pantalla.innerHTML;
    if (operacion === "+") {
      let resultado = 0;
      resultado = parseFloat(primerNumero) + parseFloat(segundoNumero);
      pantalla.innerHTML = resultado;
    }
    if (operacion === "-") {
      let resultado = 0;
      resultado = parseFloat(primerNumero) - parseFloat(segundoNumero);
      pantalla.innerHTML = resultado;
    }
    if (operacion === "*") {
      let resultado = 0;
      resultado = parseFloat(primerNumero) * parseFloat(segundoNumero);
      pantalla.innerHTML = resultado;
    }

    if (operacion === "/") {
      let resultado = 0;
      resultado = parseFloat(primerNumero) / parseFloat(segundoNumero);
      pantalla.innerHTML = resultado;
    }

    if (operacion === "n") {
      let resultado = 0;
      resultado = Math.pow(parseFloat(primerNumero), parseFloat(segundoNumero));
      pantalla.innerHTML = resultado;
    }
    historial = 1;
    tablero.innerHTML += "=";
    operacion = "";
    primerNumero = parseFloat(pantalla.innerHTML);
  }
};

const fnbtnDecimal = () => {
    if(pantalla.innerHTML===""){
        pantalla.innerHTML += "0.";
        tablero.innerHTML += "0.";
    }else{
        pantalla.innerHTML += ".";
        tablero.innerHTML += ".";
    }
    
  };

const fnbtn1 = () => {
  pantalla.innerHTML += 1;
  tablero.innerHTML += 1;
};

const fnbtn2 = () => {
  pantalla.innerHTML += 2;
  tablero.innerHTML += 2;
};

const fnbtn3 = () => {
  pantalla.innerHTML += 3;
  tablero.innerHTML += 3;
};

const fnbtn4 = () => {
  pantalla.innerHTML += 4;
  tablero.innerHTML += 4;
};

const fnbtn5 = () => {
  pantalla.innerHTML += 5;
  tablero.innerHTML += 5;
};

const fnbtn6 = () => {
  pantalla.innerHTML += 6;
  tablero.innerHTML += 6;
};

const fnbtn7 = () => {
  pantalla.innerHTML += 7;
  tablero.innerHTML += 7;
};

const fnbtn8 = () => {
  pantalla.innerHTML += 8;
  tablero.innerHTML += 8;
};

const fnbtn9 = () => {
  pantalla.innerHTML += 9;
  tablero.innerHTML += 9;
};

const fnbtn0 = () => {
  if (pantalla.innerHTML === "") {
    if (tablero.innerHTML === "") {
    } else {
      pantalla.innerHTML += 0;
      tablero.innerHTML += 0;
    }
  } else {
    pantalla.innerHTML += 0;
    tablero.innerHTML += 0;
  }
};

const fnbtnc = () => {
  pantalla.innerHTML = "";
  tablero.innerHTML = "";
  hisorail = 0;
};

//Eventos
btnDecimal.onclick = function () {
    fnbtnDecimal();
};

btn1.onclick = function () {
  fnbtn1();
};

btn2.onclick = function () {
  fnbtn2();
};

btn3.onclick = function () {
  fnbtn3();
};

btn4.onclick = function () {
  fnbtn4();
};

btn5.onclick = function () {
  fnbtn5();
};

btn6.onclick = function () {
  fnbtn6();
};

btn7.onclick = function () {
  fnbtn7();
};

btn8.onclick = function () {
  fnbtn8();
};

btn9.onclick = function () {
  fnbtn9();
};

btn0.onclick = function () {
  fnbtn0();
};

btnC.onclick = function () {
  fnbtnc();
};

btnMas.onclick = function () {
  mas();
};

btnMenos.onclick = function () {
  menos();
};

btnMul.onclick = function () {
  mul();
};

btnDivir.onclick = function () {
  dividir();
};

btnIgual.onclick = function () {
  operar();
};

btnPotencia.onclick = function () {
  potencia();
  historial=1;
};

btnPotenciaN.onclick = function () {
  potenciaN();
};
