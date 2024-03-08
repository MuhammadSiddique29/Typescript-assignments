
function makeSandwich(...ingredients: string[]): void {
    console.log("Sandwich summary:")
    ingredients.forEach((ingredient) => {
        console.log(ingredient)
    })
}

makeSandwich("Bread", "Cheeze", "Tomato")
console.log("\n")

makeSandwich("Ham", "Lettuce", "Mayonnaise")
console.log("\n")

makeSandwich("Mustard", "Bacon", "Avocado")