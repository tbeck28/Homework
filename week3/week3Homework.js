
// 1
let pizzaTopping = ['tomatoes', 'onions', 'olives', 'steak']

// 2
function greetCustomer () {
    let greeting = "Hello and welcome to Your mom's Pizzeria, here are our toppings: "
    for (let x = 0; x < pizzaTopping.length; x++) {
        greeting += pizzaTopping[x]
    }
    console.log(greeting)
}

// 3
function getPizzaOrder (size, crust, ...toppings) {
    let order = `So you want a ${size} pizza with ${crust} crust, and ${toppings}, I'll get that started for you! `
    console.log(order)
    return [size, crust, toppings]
    }


// 4

function getPizzaOrder(size, crust, ...toppings) {
    console.log(`One ${size} pizza with ${crust} crust and ${toppings}`)
    let array2 = [size, crust, toppings];
    return array2;
}


function preparePizza([size, crust, ...toppings]) {
    console.log('cooking pizza!')
    return {
        size: size,
        crust: crust,
        toppings: toppings
        }
}



function servePizza(x) {
    let order = `the ${x.size} pizza with ${x.crust} and ${x.toppings} is done`
    for(let topping of x.toppings) {
        order += `${topping}`;
    }
    console.log(`${order}`)
    return x;
}


greetCustomer();
let order = getPizzaOrder('large', 'thin', 'tomates');
let pizza = preparePizza(order);
servePizza(pizza);