// Recipe inspo (to match wine pairings):
// ["lamb", "venison", "vegetables", "chicken", "pasta", "cheese", "veal", "calamari", "cod", "sandwich", "spanakopita",
//  "pizza", "pork", "turkey", "beef", "duck", "poutine", "shrimp", "salmon", "lobster", "chowder"];

const starters = [];
const mains = [];

const desserts = [
    {
        "name": "Pineapple Carrot Cake",
        "description": "Moist cake with cream cheese frosting.",
        "season": "fall",
        "sweetness": "high",
        "allergens": ["dairy", "nuts", "gluten"],
    },
    {
        "name": "Triple-Chocolate Cheesecake Bars",
        "description": "Brownie crust layered with chocolate cheesecake and topped with chocolate ganache.",
        "season": "winter",
        "sweetness": "high",
        "allergens": ["dairy", "gluten"],
    },
    {
        "name": "Olive Oil Cake",
        "description": "It can just as easily be a breakfast treat or an afternoon snack as a dessert.",
        "season": "spring",
        "sweetness": "low",
        "allergens": ["gluten"],
    },
    {
        "name": "Lemon Berry Dump Cake",
        "description": "A pretty, delicious sweet-tart cake.",
        "season": "summer",
        "sweetness": "medium",
        "allergens": [],
    },
    {
        "name": "Purple-Ribbon Pumpkin Cake",
        "description": "The perfect thanksgiving dessert.",
        "season": "fall",
        "sweetness": "medium",
        "allergens": ["gluten", "nuts", "dairy"],
    },
    {
        "name": "Lemon Ginger Icebox Cake",
        "description": "A lemony ginger icebox cake that is easy and minimal effort to make.",
        "season": "summer",
        "sweetness": "medium",
        "allergens": ["gluten", "dairy"],
    },
    {
        "name": "Cheesecake with Berry Sauce",
        "description": "Creamy cheesecake that is an excellent dessert any time of year.",
        "season": "spring",
        "sweetness": "high",
        "allergens": ["gluten", "dairy"],
    },
    {
        "name": "Pistachio Tube Cake",
        "description": "Fluffy pistachio cake, perfect for any holiday.",
        "season": "spring",
        "sweetness": "low",
        "allergens": ["gluten", "dairy"],
    },
    {
        "name": "Black Forest Tart",
        "description": "Cherry pie filling and a melted chocolate drizzle top a rich, fudgy cake made from chocolate cookie crumbs.",
        "season": "winter",
        "sweetness": "high",
        "allergens": ["gluten", "dairy"],
    },
    {
        "name": "Coconut Cream Pie",
        "description": "Creamy toasted coconut cream pie.",
        "season": "summer",
        "sweetness": "high",
        "allergens": ["gluten", "dairy"],
    },
];

module.exports = { starters, mains, desserts };