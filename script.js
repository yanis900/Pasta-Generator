const RandomNumGenerator = num => {
    return Math.floor(Math.random() * num);
}

const pastaFactory = {
    pastaType: [Lasagna, Rigatoni, Penne, Farfalle, Spaghetti],
    sauceType: [Marinara, Alfredo, Bolognese, Pesto, Bechamel],
    cheeseType: [Parmesan, Ricotta, Feta, Mozzarella, Cheddar]
}

let pastaRecipe = [];

for (let ingredient in pastaFactory) {

    switch (ingredient) {
        case 'pastaType':
            pastaRecipe.push(`You Will Make: ${} pasta`)
        case 'sauceType':
            pastaRecipe.push(`with a: ${} sauce`)
        case 'cheeseType':
            pastaRecipe.push(`Topped with some: ${} cheese`)
        // default:

    }
}