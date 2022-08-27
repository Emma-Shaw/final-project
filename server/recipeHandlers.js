// Configure the Mongo Client
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const dbName = "final_project_happy_hour";

const { starters, mains, desserts } = require("./data/recipes");

const allRecipes = async (req, res) => {
    // const client = new MongoClient(MONGO_URI, options);
    // try {
    //     await client.connect();

    //     const db = client.db(dbName);

    //     // ? res.status(200).json({ status: 200, message: "Data retrieved." })
    //     // : res.status(500).json({ status: 500, message: "Error - Data not retrieved." })
    // } catch (err) {
    //     console.log("Error:", err);
    // }
    // client.close();
};

const singleRecipe = async (req, res) => {
    // const client = new MongoClient(MONGO_URI, options);
    // try {
    //     await client.connect();

    //     const db = client.db(dbName);

    //     // ? res.status(200).json({ status: 200, message: "Data retrieved." })
    //     // : res.status(500).json({ status: 500, message: "Error - Data not retrieved." })
    // } catch (err) {
    //     console.log("Error:", err);
    // }
    // client.close();
};

module.exports = { allRecipes, singleRecipe };