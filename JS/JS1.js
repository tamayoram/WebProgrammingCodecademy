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


// El || permite evaluar si tool existe o no. Si existe se lo asigna a writingUtensil sino asigna pen. 
// En este caso sale en pantalla The pen is mightier than the sword.

let tool = '';
let writingUtensil=tool||'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// Ternary operation. Se reemplaza el if...else. 

let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

// se pregunta por una condición, sigue el verdadero y después de los : el falso.
isLocked?  console.log('You will need a key to open the door.'):console.log('You will not need a key to open the door.');


let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

// else if

let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

// switch

let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Generar números aleatorias y redondear para que de un numero entre 0 y 8

Math.floor(Math.random() * 8);

// default parameters for a function

function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

// Segunda forma de escribir funciones asignandola directamente a la variable.

const plantNeedsWater=function(day){
  if(day==="Wednesday"){
    return true;
  }
  else{
    return false;
  }
}

plantNeedsWater('Tuesday');

console.log (plantNeedsWater('Tuesday'));

// Tercera forma denominada función flecha

const plantNeedsWater = (day)=> {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// Cuarta forma, es completamente resumida 

const plantNeedsWater =  day => 
  day === 'Wednesday' ? true : false;

  