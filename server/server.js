const express = require('express');
const morgan = require("morgan");
const app = express();

// Configure Auth0
const { auth } = require("express-oauth2-jwt-bearer");

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
    audience: 'Final_Project_Happy_Hour',
    issuerBaseURL: `https://dev-41dcx13f.us.auth0.com/`,
});

const { allRedWines, allWhiteWines, randomWine} = require("./wineHandlers");
const { allStarters, allMains, allDesserts, randomStarter, randomMain, randomDessert } = require("./recipeHandlers");
const { allUsers, singleUser, createNewUser, userMenu, public, private  } = require("./userHandlers");

app.use(morgan("tiny"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// This route doesn't need authentication
app.get("/api/public", ((req, res) => {
    res.json({
        message: "Hello from a public endpoint! You don't need to be authenticated to see this."
    })
}));

// This route needs authentication
app.get("/api/private", checkJwt, ((req, res) => {
    res.json({
        message: "Hello from a private endpoint! You need to be authenticated to see this."
    })
}));

// 1. Wines
app.get("/wines/red", allRedWines) // Fetch all red wines data
app.get("/wines/white", allWhiteWines) // Fetch all white wines data

app.post("/wines", randomWine)

// 2. Recipes
app.get("/recipes/starters", allStarters) // Fetch all starters recipes data
app.get("/recipes/mains", allMains) // Fetch all mains recipes data
app.get("/recipes/desserts", allDesserts) // Fetch all desserts recipes data

app.post("/recipes/starters", randomStarter)
app.post("/recipes/mains", randomMain)
app.post("/recipes/desserts", randomDessert)


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