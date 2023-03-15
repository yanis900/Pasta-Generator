const RandomNumGenerator = num => {
    return Math.floor(Math.random() * num);
}

const pastaFactory = {
    pastaType: ['Lasagna', 'Rigatoni', 'Penne', 'Farfalle', 'Spaghetti'],
    sauceType: ['Marinara', 'Alfredo', 'Bolognese', 'Pesto', 'Bechamel'],
    cheeseType: ['Parmesan', 'Ricotta', 'Feta', 'Mozzarella', 'Cheddar']
}

let pastaRecipe = [];

for (let ingredient in pastaFactory) {
    const ingredientIndex = RandomNumGenerator(pastaFactory[ingredient].length)

    switch (ingredient) {
        case 'pastaType':
            pastaRecipe.push(`You Will Make: ${pastaFactory[ingredient][ingredientIndex]} pasta`)
            break
        case 'sauceType':
            pastaRecipe.push(`with a: ${pastaFactory[ingredient][ingredientIndex]} sauce`)
            break
        case 'cheeseType':
            pastaRecipe.push(`Topped with some: ${pastaFactory[ingredient][ingredientIndex]} cheese`)
            break
        // default:

    }
}
console.log("hi hamzah")
console.log(pastaRecipe)