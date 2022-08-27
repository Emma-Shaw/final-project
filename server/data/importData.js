// Configure the Mongo Client
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const dbName = "final_project_happy_hour";

const { redWines, whiteWines } = require("./wines");
const { starters, mains, desserts } = require("./recipes");

const batchImportWines = async () => {
    const client = new MongoClient(MONGO_URI, options);
    try {
        await client.connect();

        const db = client.db(dbName);

        const addRedWines = await db.collection("red_wines").insertMany(redWines);
        const addWhiteWines = await db.collection("white_wines").insertMany(whiteWines);

        const redWineData = await db.collection("red_wines").find().toArray();
        const whiteWineData =await db.collection("white_wines").find().toArray();

        if (redWineData.length > 0 && whiteWineData.length > 0) {
            console.log("Red Wines :", addRedWines);
            console.log("White Wines :", addWhiteWines);
            console.log("Success")
        } else {
            console.log("Something went wrong")
        }
    } catch (err) {
        console.log("Error:", err);
    }
    client.close();
};

// batchImportWines();

const batchImportRecipes = async () => {
    const client = new MongoClient(MONGO_URI, options);
    try {
        await client.connect();

        const db = client.db(dbName);

        const addStarters = await db.collection("starters").insertMany(starters);
        const addMains = await db.collection("mains").insertMany(mains);
        const addDesserts = await db.collection("desserts").insertMany(desserts);

        const startersData = await db.collection("starters").find().toArray();
        const mainsData =await db.collection("mains").find().toArray();
        const dessertsData =await db.collection("desserts").find().toArray();

        if (startersData.length > 0 && mainsData.length > 0 && dessertsData.length > 0) {
            console.log("Starters :", addStarters);
            console.log("Mains :", addMains);
            console.log("Desserts :", addDesserts);
            console.log("Success")
        } else {
            console.log("Something went wrong")
        }
    } catch (err) {
        console.log("Error:", err);
    }
    client.close();
};

// batchImportRecipes();

