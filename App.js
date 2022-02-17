// calculator screens
let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");

let ac = document.querySelector(".AC");
let change = document.querySelector(".change");
let modulus = document.querySelector(".modulus");
let divide = document.querySelector(".divide");
let button7 = document.querySelector(".button7");
let button8 = document.querySelector(".button8");
let button9 = document.querySelector(".button9");
let multiply = document.querySelector(".multiply");
let button4 = document.querySelector(".button4");
let button5 = document.querySelector(".button5");
let button6 = document.querySelector(".button6");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button0 = document.querySelector(".button0");
let minus = document.querySelector(".minus");
let add = document.querySelector(".add");
let comma = document.querySelector(".comma");
let equal = document.querySelector(".equal");

let number1 = [];
let number2 = [];

button0.addEventListener("click", ()=>{
    number1.push(button0.innerText)
    screen2.innerText = Number(number1.join(""));
})

button1.addEventListener("click", ()=>{
    number1.push(button1.innerText)
    screen2.innerText = Number(number1.join(""));
})

button2.addEventListener("click", ()=>{
    number1.push(button2.innerText)
    screen2.innerText = Number(number1.join(""));
})

button3.addEventListener("click", ()=>{
    number1.push(button3.innerText)
    screen2.innerText = Number(number1.join(""));
})

button4.addEventListener("click", ()=>{
    number1.push(button4.innerText)
    screen2.innerText = Number(number1.join(""));
})

button5.addEventListener("click", ()=>{
    number1.push(button5.innerText)
    screen2.innerText = Number(number1.join(""));
})

button6.addEventListener("click", ()=>{
    number1.push(button6.innerText)
    screen2.innerText = Number(number1.join(""));
})

button7.addEventListener("click", ()=>{
    number1.push(button7.innerText)
    screen2.innerText = Number(number1.join(""));
})

button8.addEventListener("click", ()=>{
    number1.push(button8.innerText)
    screen2.innerText = Number(number1.join(""));
})

button9.addEventListener("click", ()=>{
    number1.push(button9.innerText)
    screen2.innerText = Number(number1.join(""));
})
comma.addEventListener("click", ()=>{
    number1.push('.')
    screen2.innerText = Number(number1.join(""));
})

ac.addEventListener("click", ()=>{
    screen2.innerText = 0;
    let number1 = 0;
    let number2 = 0;
});