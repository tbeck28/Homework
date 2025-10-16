

let pizzaPlace = 'The Pizzaria';
let numberOfToppings = 5;

console.log(pizzaPlace);
console.log(typeof pizzaPlace);

console.log(numberOfToppings);
console.log(typeof numberOfToppings);

let message = `Welcome to my place, ${pizzaPlace}, how many toppings do you like on your pizza!? I usually have about ${numberOfToppings}`;

if (numberOfToppings >= 10) {
    console.log('Quality, not quantity');
} else {
    console.log('A whole log of pizza');
}
