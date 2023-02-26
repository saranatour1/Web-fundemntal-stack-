function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;

  return pizza;
}
var pizza1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
var pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);

/* Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"] */

console.log(
  `Pizza 1 has the following inggredients: for crust type ${pizza1.crustType}, for sauceType :${pizza1.sauceType} , for cheezes : ${pizza1.cheeses} , and toppoings: ${pizza1.toppings} `
);

/* Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"] */

console.log(
  `Pizza 2 has the following inggredients: for crust type ${pizza2.crustType}, for sauceType :${pizza2.sauceType} , for cheezes : ${pizza2.cheeses} , and toppoings: ${pizza2.toppings} `
);
var mypizza = (pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella"],
  ["mushrooms", "olives", "onions"]
));
console.log(
  `my pizza has the following inggredients: for crust type ${mypizza.crustType}, for sauceType :${mypizza.sauceType} , for cheezes : ${mypizza.cheeses} , and toppoings: ${mypizza.toppings} `
);
