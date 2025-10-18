
// 1
let pizzaTopping = ['tomatoes', 'onions', 'olives', 'steak']

// 2
function greetCustomer () {
    let greeting = "Hello and welcome to Your mom's Pizzeria, here are our toppings: ";
    for (let x = 0; x < pizzaTopping.length; x++) {
        let top = pizzaTopping[x]
    }
    console.log(greeting + pizzaTopping)
}



// 3
function getPizzaOrder (size, crust, ...toppings) {
    let order = `So you want a ${size} pizza with ${crust} crust, and ${toppings}, I'll get that started for you! `
    const newArray = [size, crust, ...toppings]
    console.log(order)
    return newArray
}


let y

// 4
function preparePizza ([size, crust, toppings]) {
        y = {
        size: size,
        crust: crust,
        toppings: toppings
    }
    console.log(`Cooking the pizza!`)
    return y
}



// 5 

let pixxa = {
    size: 'large',
    crust: 'thin',
    toppings: 'olives',
}


let pizza;
let message;
function servePizza (obj) {
    console.log(`The ${obj.size} pizza with ${obj.crust} crust and ${obj.toppings} is done `)
}


greetCustomer('Quinn')
getPizzaOrder('large', 'thin', 'tomatoes')
preparePizza(['large', 'thin', 'olives'])
servePizza(y)
