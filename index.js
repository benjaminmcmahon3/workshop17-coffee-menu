// pulls array of all the coffee data
const coffeeMenu = require('./coffee_data.js');

// delcare an empty array for each required answer, and a variable to hold the totalPrice
const drinksOnMenu = [];
const drinksUnderFive = [];
const drinksPricedEven = [];
const seasonalDrinks = [];
let totalPrice = 0;

// create a for loop to run through the coffeeMenu array
// search for [i].name, [i].price<=5, [i].price%2, [i].seasonal===true
// include running price statement that adds [i].price to totalPrice
for (let i = 0; i < coffeeMenu.length; i++){
  if (coffeeMenu[i].seasonal){
    coffeeMenu[i].name = `${coffeeMenu[i].name} with imported beans`
    seasonalDrinks.push(coffeeMenu[i].name);
  }  
  drinksOnMenu.push(coffeeMenu[i].name);
  totalPrice += coffeeMenu[i].price
  if (coffeeMenu[i].price <= 5){
    drinksUnderFive.push(coffeeMenu[i].name);
  }
  if (!(coffeeMenu[i].price % 2)){
    drinksPricedEven.push(coffeeMenu[i].name);
  }
};

// use template literals to display the answer arrays as a string with what that grouping is 
console.log('Drinks on the Menu:', drinksOnMenu);
console.log('Drinks under $5:', drinksUnderFive);
console.log('Evenly priced drinks:', drinksPricedEven);
console.log('Price for all the drinks:', totalPrice)
console.log('Seasonal drinks:', seasonalDrinks);