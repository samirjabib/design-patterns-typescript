console.log("hola desde typescript");

//funciones de primer ordern y superior.

//esto es una funcion de primer ordern.
function sum(a: number, b: number) {
  return a + b;
}

let res = sum(1, 2);

console.log(res);

const fSum = sum;

res = fSum(5, 6);

console.log(res);

//funcion de ordern superrior:

//una funcion de ordern superior es una funcion que puede recibir como parametros otra funcion como parametro.

function operation(fn: (a: number, b: number) => void, a: number, b: number) {
  console.log("se hace algo");
  console.log(fn(a, b));
}

operation(sum, 10, 20);

//arrow function
operation((a: number, b: number) => a * b, 5, 5);
operation(
  (a: number, b: number) => {
    const c = a + b;
    return c * 2;
  },
  1,
  2
);

//foreach

const names = ["hector", "Juan", "pablo", "ana"];
//esto es un metodo inmutable- no modifica el elemento orignal
names.forEach((name: string) => console.log(name));

//esto es un metodo mutable-modifica el elementos origial
names.sort();

//map-crea un nuevo array con valores modificados.

const namesUpper = names.map((name: string) => name.toUpperCase());

console.log(namesUpper);

//reduce- hace un acomulado de los elemtos array

const numbers = [5, 4, 7, 1, 10];

const total = numbers.reduce((ac: number, number: number) => {
  return ac + number * 2;
}, 0);

console.log(total);

//PROGRAMACION ORIENTADA A OBJETOS
//clase

class Drink {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  info() {
    return "la bebida es :" + this.name;
  }
}

const drink = new Drink("agua");

console.log(drink.name);

//herencia
class Beer extends Drink {
  alcohol: number;
  constructor(name: string, alcohol: number) {
    super(name);
    this.alcohol = alcohol;
  }

  info() {
    return super.info() + " " + this.alcohol;
  }
}

const beer = new Beer("erginer", 9.5);

console.log(beer);
