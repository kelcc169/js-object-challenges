//make a menu with names, toppings, and price

var menu = {
    Olympia: {
        toppings: ['chicken', 'garlic', 'onions'],
        price: '$16.95'
    },
    Spiro: {
        toppings: ['canadian bacon', 'green peppers', 'mushrooms'],
        price: '$15.95'
    },
    Special: {
        toppings: ['salami', 'pepperoni', 'olives'],
        price: '$16'
    },
    Greek: {
        toppings: ['feta', 'garlic', 'spinach'],
        price: '$15'
    },
    BBQ: {
        toppings: ['chicken', 'bbq sauce', 'onion'],
        price: '$17'
    }
};


//list all pizzas

console.log(Object.keys(menu));

//see if a pizza is on the menu
var pizzaQuest = 'banana';

if (menu.hasOwnProperty(pizzaQuest)) {
    console.log("We have that!");
} else {
    console.log("Sorry! Choose something else!")
}

//create a for...in loop that displays names and prices
for (var key in menu) {
    console.log(key + " " + menu[key].price);
};

// create a for...in loop that displays names, prices, and toppings
for (var key2 in menu) {
    console.log(key2 + " " + menu[key2].price);
    console.log(menu[key2].toppings.join(', '))
}