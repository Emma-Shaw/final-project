const express = require('express');
const morgan = require("morgan");
const app = express();

const { allRedWines, allWhiteWines } = require("./wineHandlers");

const { allStarters, allMains, allDesserts } = require("./recipeHandlers");

const { allUsers, singleUser, createNewUser, userMenu } = require("./userHandlers");

app.use(morgan("tiny"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// 1. Wines
app.get("/wines/red", allRedWines) // Fetch all red wines data
app.get("/wines/white", allWhiteWines) // Fetch all white wines data

// 2. Recipes
app.get("/recipes/starters", allStarters) // Fetch all starters recipes data
app.get("/recipes/mains", allMains) // Fetch all mains recipes data
app.get("/recipes/desserts", allDesserts) // Fetch all desserts recipes data

// 3. Users
app.get("/users", allUsers) // Fetch all users
app.get("/users/:userEmail", singleUser) // Fetch specific user based on userId
app.post("/users/create-user", createNewUser) // Create a new user when user signs-up

// 4. Menus
app.get("/menus/:menuId", userMenu) // Fetch specific menu by menuId

app.get("*", (req, res) => {
    res.status(404).json({
        status: 404,
        message: "Oops - are you lost?", 
    })
})

app.listen(8000, () => console.log("Listening on port 8000 🚀✨"))