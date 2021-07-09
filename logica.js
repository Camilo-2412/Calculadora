//variables
let pantalla = document.getElementById("pantalla");

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

let btnMas = document.getElementById("bntMas");
let btmMenos = document.getElementById("btnMenos");
let btnMul = document.getElementById("btnMul");
let btnDivir = document.getElementById("btnDividir");

let btnC = document.getElementById("btnC");
let btnIgual= document.getElementById("btnIgual");


//Funciones
const fnbtn1 = () =>{
    pantalla.innerHTML += 1;
}

const fnbtn2 = () =>{
    pantalla.innerHTML += 2;
}

const fnbtn3 = () =>{
    pantalla.innerHTML += 3;
}

const fnbtn4 = () =>{
    pantalla.innerHTML += 4;
}

const fnbtn5 = () =>{
    pantalla.innerHTML += 5;
}

const fnbtn6 = () =>{
    pantalla.innerHTML += 6;
}

const fnbtn7 = () =>{
    pantalla.innerHTML += 7;
}

const fnbtn8 = () =>{
    pantalla.innerHTML += 8;
}

const fnbtn9 = () =>{
    pantalla.innerHTML += 9;
}

const fnbtn0 = () =>{
    if (pantalla.innerHTML==="") {
            
    } else {
        pantalla.innerHTML += 0;
    }
    
}

const fnbtnc = () => {
    pantalla.innerHTML = ""

}

//Eventos
btn1.onclick= function(){
    fnbtn1();
};

btn2.onclick= function(){
    fnbtn2();
};

btn3.onclick= function(){
    fnbtn3();
};

btn4.onclick= function(){
    fnbtn4();
};


btn5.onclick= function(){
    fnbtn5();
};

btn6.onclick= function(){
    fnbtn6();
};

btn7.onclick= function(){
    fnbtn7();
};

btn8.onclick= function(){
    fnbtn8();
};

btn9.onclick= function(){
    fnbtn9();
};

btn0.onclick= function(){
    fnbtn0();
};

btnC.onclick=function(){
    fnbtnc();
};