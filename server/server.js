const express = require('express')
const app = express()

const { allRedWines, allWhiteWines } = require("./wineHandlers");

const { allRecipes, singleRecipe } = require("./recipeHandlers");

const { allUsers, singleUser, createNewUser, userMenu } = require("./userHandlers");

// 1. Wines
app.get("/wines/red", allRedWines) // Fetch all red wines data
app.get("/wines/white", allWhiteWines) // Fetch all white wines data

// 2. Recipes
app.get("/recipes", allRecipes) // Fetch all recipes data
app.get("/recipes/:recipeId", singleRecipe) // Fetch specific recipe by recipeId

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