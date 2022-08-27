const starters = [
    {
        "name": "Cured salmon with prawns, pickled salad & dill lime crème fraîche",
        "description": "Make this cured salmon and prawn dish as a classy starter for a dinner party.",
        "season": "winter",
        "allergens": ["shellfish", "dairy"],
    },
    {
        "name": "Baked feta with burst tomatoes & chilli honey",
        "description": "Enjoy baked feta with roasted cherry tomatoes and honey.",
        "season": "winter",
        "allergens": ["dairy"],
    },
    {
        "name": "Halloumi, carrot & orange salad",
        "description": "Serve this halloumi, carrot, orange and watercress salad with a mustard and honey dressing for an easy lunch or starter.",
        "season": "spring",
        "allergens": [],
    },
    {
        "name": "Caprese salad",
        "description": "Incredibly simple but, when made with perfectly ripe tomatoes, is a real delight.",
        "season": "summer",
        "allergens": ["dairy"],
    },
    {
        "name": "Fig, burrata & prosciutto tartine",
        "description": "Slices of sourdough, figs, burrata and prosciutto tartines.",
        "season": "fall",
        "allergens": ["dairy", "gluten"],
    },
    {
        "name": "Smoked salmon with prawns, horseradish cream & lime vinaigrette",
        "description": "This stunning starter can be assembled ahead, then topped with dressed leaves just before serving.",
        "season": "spring",
        "allergens": ["shellfish", "dairy"],
    },
    {
        "name": "Grilled lobster tails with lemon & herb butter",
        "description": "Grilled lobster tails served with a lemon, garlic and parsley butter.",
        "season": "summer",
        "allergens": ["shellfish", "dairy"],
    },
    {
        "name": "Miso & butternut soup",
        "description": "Silky and deeply savoury miso and butternut soup.",
        "season": "fall",
        "allergens": ["dairy"],
    },
    {
        "name": "Buffalo cauliflower",
        "description": "Served with a ranch dip, it makes an excellent Friday night sharing treat.",
        "season": "winter",
        "allergens": [],
    },
    {
        "name": "Sweetcorn fritters with avocado & crispy chorizo",
        "description": "Top with creamy avocado and crispy chorizo.",
        "season": "summer",
        "allergens": [],
    },
    {
        "name": "Cucumber soup",
        "description": "The refreshing cucumber soup is served cold, so it will go down well on a summer’s day.",
        "season": "summer",
        "allergens": [],
    },
    {
        "name": "Creamy carrot soup",
        "description": "Easy creamy carrot soup, topped with garlicky seeded croutons.",
        "season": "fall",
        "allergens": ["dairy"],
    },
    {
        "name": "Truffled mushroom pâté",
        "description": "A great partner to toast, mini crispbreads and cornichons.",
        "season": "fall",
        "allergens": [],
    },
    {
        "name": "Roasted purple sprouting broccoli with feta & preserved lemon",
        "description": "This broccoli and feta dish makes a great vegetarian starter with a pinch of warming chilli.",
        "season": "winter",
        "allergens": ["dairy"],
    },
    {
        "name": "Charred leeks with anchovy dressing",
        "description": "Hazelnuts add crucial crunch and the anchovy dressing gives the dish an umami depth of flavour.",
        "season": "spring",
        "allergens": ["nuts"],
    },
    {
        "name": "Chicken liver & pineau pâté",
        "description": "A rich, sweet pâté recipe using pineau - a sherry-like aperitif.",
        "season": "winter",
        "allergens": [],
    },
    {
        "name": "Creamy mushroom soup",
        "description": "Use porcini and wild mushrooms to make this rich and creamy soup that makes a filling yet light supper for cold nights.",
        "season": "winter",
        "allergens": ["dairy"],
    },
    {
        "name": "Roasted cauliflower steaks",
        "description": "Unlock the flavours of cauliflower with a red pepper, olive and caper salsa, topped with almonds.",
        "season": "spring",
        "allergens": ["nuts"],
    },
    {
        "name": "Twice-baked goat’s cheese soufflés with apple & walnut salad",
        "description": "These fabulous soufflés are not as nervewracking to cook and serve as traditional ones, and can be prepared ahead.",
        "season": "winter",
        "allergens": ["nuts", "dairy"],
    },
    {
        "name": "Stuffed mushrooms",
        "description": "Serve these easy stuffed mushrooms with melted cheese, bacon lardons and breadcrumbs alongside a simple salad and crusty bread.",
        "season": "fall",
        "allergens": ["gluten", "dairy"],
    },
];

const mains = [
    {
        "name": "Cedar-Plank Salmon",
        "description": "Cooking the salmon on a cedar grilling plank gives it a whisper of smoky flavor.",
        "season": "summer",
        "pairings": ["salmon"],
    },
    {
        "name": "Braised Chicken Legs With Grapes and Fennel",
        "description": "Sweet-and-spicy braise, made with ribbons of fennel and juicy table grapes.",
        "season": "summer",
        "pairings": ["chicken", "vegetables"]
    },
    {
        "name": "Seared Scallops With Brown Butter and Lemon Pan Sauce",
        "description": "Scallops are always a stunner, but these are dead simple to make.",
        "season": "spring",
        "pairings": []
    },
    {
        "name": "Grilled Pizza",
        "description": "This dough is designed for the grill—you can get creative with your toppings, or let your guests go wild.",
        "season": "summer",
        "pairings": ["pizza"]
    },
    {
        "name": "Caesar Salad Roast Chicken",
        "description": "This isn't your typical chicken Caesar.",
        "season": "spring",
        "pairings": ["chicken", "vegetables"]
    },
    {
        "name": "Seared Scallops With Basil Risotto",
        "description": "Are there two dishes that are more dinner-party worthy than risotto and scallops? We think not.",
        "season": "fall",
        "pairings": []
    },
    {
        "name": "Braised Chile-Marmalade Duck Legs With Brussels Sprouts",
        "description": "Simmered duck legs in a chile-infused, maramalade-based braise.",
        "season": "fall",
        "pairings": ["duck", "vegetables"]
    },
    {
        "name": "Instant Pot Lamb Haleem",
        "description": "Pakistani haleem is a warmly spiced, satisfyingly thick stew made from long-simmered lentils, barley, and bone-in chunks of lamb or goat.",
        "season": "winter",
        "pairings": ["lamb", "vegetables"]
    },
    {
        "name": "Pork Chops with Fig and Grape Agrodolce",
        "description": "Fresh figs and grapes cooked in balsamic vinegar and honey make a fantastic sweet and sour sauce for pork chops.",
        "season": "fall",
        "pairings": ["pork", "vegetables"]
    },
    {
        "name": "Spicy Lobster Pasta",
        "description": "Finishing this luxe pasta with a bit of freshly grated lemon zest helps tie together and round out its flavors.",
        "season": "spring",
        "pairings": ["lobster", "pasta"]
    },
    {
        "name": "Roasted Zucchini Lasagna",
        "description": "Finishing this luxe pasta with a bit of freshly grated lemon zest helps tie together and round out its flavors.",
        "season": "spring",
        "pairings": ["vegetables", "pasta", "cheese"]
    },
    {
        "name": "Rib eye with chimichurri",
        "description": "This light chimichurri pairs delightfully with this mid-week beef rib-eye hit.",
        "season": "summer",
        "pairings": ["steak"]
    },
    {
        "name": "Venison wellington",
        "description": "Serve up a game version of the classic dinner party puff pastry parcel with mushroom duxelles, prosciutto and mustard.",
        "season": "winter",
        "pairings": ["venison"]
    },
    {
        "name": "Veal chops with spinach & green pepper salsa",
        "description": "Marinate rose veal chops in a zesty mix of lemon, garlic and rosemary then serve with the salsa.",
        "season": "summer",
        "pairings": ["veal"]
    },
    {
        "name": "Turkey and Quinoa Meatloaf",
        "description": "The secret to this recipe is the quinoa, which adds wonderful texture and is much nuttier than breadcrumbs.",
        "season": "fall",
        "pairings": ["turkey"]
    },
    {
        "name": "Deluxe poutine with beef ribeye steak, bacon and beer",
        "description": "Enjoy this decadent, flavorful take on a classic Quebec dish.",
        "season": "fall",
        "pairings": ["steak", "poutine"]
    },
    {
        "name": "Spicy squid ragu with pasta & clams",
        "description": "Enjoy this spicy squid ragu on its own like a tapa or with chips.",
        "season": "winter",
        "pairings": ["calamari"]
    },
    {
        "name": "Cod With Scallion-Sesame Butter",
        "description": "White fish bathed in a silky scallion-ginger sauce that uses both butter and olive oil.",
        "season": "spring",
        "pairings": ["cod", "vegetables"]
    },
    {
        "name": "Grilled shrimp tacos with avocado salsa",
        "description": "Stuffed with plump grilled shrimp and spicy avocado salsa, these tacos make a delicious, fun, and healthy meal.",
        "season": "summer",
        "pairings": ["shrimp", "vegetables"]
    },
    {
        "name": "Slow-Cooker French Dip Sandwiches",
        "description": "These slow-cooker French dip sandwiches make a standout addition to any buffet line.",
        "season": "winter",
        "pairings": ["sandwich", "beef", "cheese"]
    },
];

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
    {
        "name": "Citrus Cranberry Pie",
        "description": "Beautiful lattice-topped cranberry pie. A dollop of orange cream complements the slightly tart flavor.",
        "season": "fall",
        "sweetness": "medium",
        "allergens": ["gluten"],
    },
    {
        "name": "Bread Pudding",
        "description": "Incredible bread pudding with a soft middle and crisp edges.",
        "season": "winter",
        "sweetness": "high",
        "allergens": ["gluten", "dairy"],
    },
    {
        "name": "Chocolate Cookie Cheesecake",
        "description": "A simple but special cookie-topped version of a classic dessert.",
        "season": "spring",
        "sweetness": "high",
        "allergens": ["gluten", "dairy"],
    },
    {
        "name": "Peaches ‘n’ Cream Raspberry Tart",
        "description": "Fresh peach slices and big, juicy raspberries crown this beautiful tart. The almond-flavored cream filling and macaroon crust complement the fruits.",
        "season": "summer",
        "sweetness": "medium",
        "allergens": ["gluten", "dairy"],
    },
    {
        "name": "Thumbprint Butter Cookies",
        "description": "These buttery little rounds add beautiful color to a platter of treats.",
        "season": "winter",
        "sweetness": "low",
        "allergens": ["gluten", "dairy"],
    },
    {
        "name": "Lemon Ricotta Cake",
        "description": "Garnished with shaved lemon zest, the moist four-layer cake is the perfect dessert when you want to impress.",
        "season": "spring",
        "sweetness": "medium",
        "allergens": ["gluten", "dairy"],
    },
    {
        "name": "Blueberry & Blackberry Rustic Tart",
        "description": "Wild berries baked into a cornmeal crust make this an especially homey tart.",
        "season": "summer",
        "sweetness": "low",
        "allergens": ["gluten", "dairy"],
    },
    {
        "name": "Mocha Truffle Cheesecake",
        "description": "Its brownie-like crust and creamy mocha layer really hit the spot.",
        "season": "winter",
        "sweetness": "high",
        "allergens": ["gluten", "dairy"],
    },
    {
        "name": "Pear Tart",
        "description": "Truly scrumptious pastry.",
        "season": "fall",
        "sweetness": "medium",
        "allergens": ["gluten", "dairy"],
    },
    {
        "name": "Lemon Tea Cookies",
        "description": "These sandwich cookies taste rich and buttery and have a lovely lemon filling.",
        "season": "spring",
        "sweetness": "low",
        "allergens": ["gluten", "dairy"],
    }
];

module.exports = { starters, mains, desserts };