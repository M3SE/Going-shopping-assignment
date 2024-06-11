let shoppingList = [
    ["Ramen Noodles", "Rice", "Beans", "Fair Trade Coffee"]
];

let shoppingCart = [
    ["Fruit Loops", "Pop Tarts"]
];
console.log("Shopping List:", shoppingList);
console.log("Shopping cart:", shoppingCart);
// The while loop //
while (shoppingList.length > 0) {
    let item = shoppingList.pop();
    shoppingCart.push(item);
}
// Sorts and reverses shoppingCart // 
shoppingCart.sort();
shoppingCart.reverse();

console.log("Shopping Cart:", shoppingCart.join(","));