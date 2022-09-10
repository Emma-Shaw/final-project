const express = require('express');
const morgan = require("morgan");
const app = express();

// Configure Auth0
const { auth } = require("express-oauth2-jwt-bearer");
const bodyParser = require("body-parser");

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
    audience: 'Final_Project_Happy_Hour',
    issuerBaseURL: `https://dev-41dcx13f.us.auth0.com/`,
});

const { allRedWines, allWhiteWines, randomWine} = require("./wineHandlers");
const { allStarters, allMains, allDesserts, generateMenu } = require("./recipeHandlers");
const { specificUser, createNewUser, authenticateUser  } = require("./userHandlers");

app.use(morgan("tiny"))
app.use(express.json())
app.use(bodyParser.json({ type: "application/json" }))
app.use(express.urlencoded({ extended: false }))

// Route authentication
app.get("/", ((req, res) => { res.status(200).json({ message: "No authentication required." }) }));
app.post("/private", checkJwt, authenticateUser);

// Wines routes
app.get("/wines/red", allRedWines) // Fetch all red wines data
app.get("/wines/white", allWhiteWines) // Fetch all white wines data

app.post("/wines", randomWine)

// Recipe routes
app.get("/recipes/starters", allStarters) // Fetch all starters recipes data
app.get("/recipes/mains", allMains) // Fetch all mains recipes data
app.get("/recipes/desserts", allDesserts) // Fetch all desserts recipes data
app.post("/recipes", generateMenu)

// User routes
app.get("/users/:userEmail", specificUser) // Fetch specific user based on userId
app.post("/users/create-user", createNewUser) // Create a new user when user signs-up

app.get("*", (req, res) => { res.status(404).json({ status: 404, message: "Oops - are you lost?" }) })

app.listen(8000, () => console.log("Listening on port 8000 🚀✨"))