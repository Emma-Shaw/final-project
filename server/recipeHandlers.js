// Configure the Mongo Client
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const dbName = "final_project_happy_hour";

const allStarters = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    try {
        await client.connect();

        const db = client.db(dbName);

        const starters = await db.collection("starters").find().toArray();

        starters.length > 0
        ? res.status(200).json({ status: 200, data: starters, message: "Data retrieved." })
        : res.status(500).json({ status: 500, message: "Error - Data not retrieved." })
    } catch (err) {
        console.log("Error:", err);
    }
    client.close();
};

const allMains = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    try {
        await client.connect();

        const db = client.db(dbName);

        const mains = await db.collection("mains").find().toArray();

        mains.length > 0
        ? res.status(200).json({ status: 200, data: mains, message: "Data retrieved." })
        : res.status(500).json({ status: 500, message: "Error - Data not retrieved." })
    } catch (err) {
        console.log("Error:", err);
    }
    client.close();
};

const allDesserts = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    try {
        await client.connect();

        const db = client.db(dbName);

        const desserts = await db.collection("desserts").find().toArray();

        desserts.length > 0
        ? res.status(200).json({ status: 200, data: desserts, message: "Data retrieved." })
        : res.status(500).json({ status: 500, message: "Error - Data not retrieved." })
    } catch (err) {
        console.log("Error:", err);
    }
    client.close();
};

const generateMenu = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    // const { season, allergens, sweetness, email } = req.body;
    const { season, sweetness, email } = req.body;
    try {
        await client.connect();

        const db = client.db(dbName);

        // 1. STARTERS
        const starters = await db.collection("starters").find(
            {season: season}
        ).toArray();

        // b. Filter allergens / Not working well
        // for (let s = 0; s < temporaryStartersList?.length; s++) {
        //     for (let a = 0; a < temporaryStartersList[s].allergens?.length; a++) {
        //         console.log("TEST :", a);
        //         if (temporaryStartersList[a].allergens === allergens) {
        //             temporaryStartersList.splice(s, 1);
        //         }
        //     }
        // };

        const startersArrayLength = starters?.length;
        const startersArrayPosition = Math.floor(Math.random() * startersArrayLength);
        const randomStarterChoice = starters[startersArrayPosition];

        // 2. MAINS
        const mains = await db.collection("mains").find(
            {season: season}
        ).toArray();

        const mainsArrayLength = mains?.length;
        const mainsArrayPosition = Math.floor(Math.random() * mainsArrayLength);
        const randomMainChoice = mains[mainsArrayPosition];

        // 3. DESSERTS
        const desserts = await db.collection("desserts").find(
            {season: season, sweetness: sweetness}
        ).toArray();

        const dessertsArrayLength = desserts?.length;
        const dessertsArrayPosition = Math.floor(Math.random() * dessertsArrayLength);
        const randomDessertChoice = desserts[dessertsArrayPosition];

        const newMenu = {
            starter: randomStarterChoice,
            main: randomMainChoice,
            dessert: randomDessertChoice
        }

        const addNewUserMenu = await db.collection("users").updateOne(
            { email: email },
            { $set: {"menu": newMenu} }
        );

        addNewUserMenu
        ? res.status(200).json({ status: 200, menu: newMenu, message: "Data retrieved." })
        : res.status(500).json({ status: 500, message: "Error - Data not retrieved." })
    } catch (err) {
        console.log("Error:", err);
    }
    client.close();
};

module.exports = { allStarters, allMains, allDesserts, generateMenu };