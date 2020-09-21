console.log(38);
console.log(52);
console.log(Math.random()*100); // número aleatorio entre cero y uno que se multiplica por 100
console.log(Math.floor(Math.random()*100));// floor se redondea
console.log(Math.ceil(43.8));// redondea al entero más cercano hacia arriba
console.log(Number.isInteger(2017)); //evalúa si es entero

let myName="Camilo";
let myCity="Medellin";
console.log(`My name is ${myName}. My favorite city is ${myCity}`); // template para escribir frases usando variables. 

let newVariable = 'Playing around with typeof.'; // typeof para conocer el tipo de dato en una variable.

console.log(typeof newVariable);

newVariable=1;
console.log(typeof newVariable);

//Sentencia if

let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
}
else{
  console.log('Time to wait for a sale.');
}

