const coffeeMenu = require('./coffee_data2.js');

/*
Use .map() to print all drinks on menu
Use .filter() to find [i].price<=5
Use .filter() to find [i].price%2
Use .reduce() to find sum of [i].price
Use .map() to print all seasonal drinks
Use .forEach() to add ' with imported beans' to seasonal drinks
*/
// let drinkNames;
// let drinksLessThan5;
// let evenDrinks;
let totalPrice = 0;
let seasonalDrinks =[];
let newMenu = coffeeMenu;


seasonalDrinks = coffeeMenu.map(isSeasonal)

function isSeasonal(drink){
  if (drink.seasonal === true){
    drink.name = `${drink.name} with imported beans`;
    seasonalDrinks = seasonalDrinks.push(drink.name);
    return seasonalDrinks;
  }
}

console.log(seasonalDrinks);

// -----IGNORE, this is just practice using arrow functions with methods-----
// const nums = [1,2,3,4,5];
// const doubled = nums.map((num) => num * 2);
// const odds = nums.filter((num) => num % 2);
// const mergedArr = [...doubled, ...odds].sort((num1, num2) => num1 - num2);
// console.log(mergedArr);
