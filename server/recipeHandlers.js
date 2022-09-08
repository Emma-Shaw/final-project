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
    // const { season, allergens, sweetness } = req.body;
    const { season } = req.body;
    try {
        await client.connect();

        const db = client.db(dbName);

        // 1. STARTERS
        let temporaryStartersList = [];
        const starters = await db.collection("starters").find().toArray();

        // a. Filter season
        for (let s = 0; s < starters?.length; s++) {
            if (starters[s].season === season) {
                temporaryStartersList.push(starters[s]);
            }
        };

        // b. Filter allergens / Not working well
        // for (let s = 0; s < temporaryStartersList?.length; s++) {
        //     for (let a = 0; a < temporaryStartersList[s].allergens?.length; a++) {
        //         console.log("TEST :", a);
        //         if (temporaryStartersList[a].allergens === allergens) {
        //             temporaryStartersList.splice(s, 1);
        //         }
        //     }
        // };

        const startersArrayLength = temporaryStartersList?.length;
        const startersArrayPosition = Math.floor(Math.random() * startersArrayLength);

        const randomStarterChoice = temporaryStartersList[startersArrayPosition];

        // 2. MAINS
        let temporaryMainsList = [];
        const mains = await db.collection("mains").find().toArray();

        // a. Filter season
        for (let m = 0; m < mains?.length; m++) {
            if (mains[m].season === season) {
                temporaryMainsList.push(mains[m]);
            }
        };

        // b. Filter allergens / Not working well
        // for (let m = 0; m < temporaryMainsList?.length; m++) {
        //     for (let a = 0; a < temporaryMainsList[m].allergens?.length; a++) {
        //         if (temporaryMainsList[a].allergens === allergens) {
        //             temporaryMainsList.splice(m, 1);
        //         }
        //     }
        // };

        const mainsArrayLength = temporaryMainsList?.length;
        const mainsArrayPosition = Math.floor(Math.random() * mainsArrayLength);

        const randomMainChoice = temporaryMainsList[mainsArrayPosition];

        // 3. DESSERTS
        let temporaryDessertsList = [];
        const desserts = await db.collection("desserts").find().toArray();

        // a. Filter season
        for (let d = 0; d < desserts?.length; d++) {
            if (desserts[d].season === season) {
                temporaryDessertsList.push(desserts[d]);
            }
        };

        // b. Filter allergens / Not working well
        // for (let d = 0; d < temporaryDessertsList?.length; d++) {
        //     for (let a = 0; a < temporaryDessertsList[d].allergens?.length; a++) {
        //         if (temporaryDessertsList[a].allergens === allergens) {
        //             temporaryDessertsList.splice(d, 1);
        //         }
        //     }
        // };

        // c. Filter sweetness / TO DO

        const dessertsArrayLength = temporaryDessertsList?.length;
        const dessertsArrayPosition = Math.floor(Math.random() * dessertsArrayLength);

        const randomDessertChoice = temporaryDessertsList[dessertsArrayPosition];

        randomStarterChoice && randomMainChoice && randomDessertChoice
        ? res.status(200).json({ status: 200, starter: randomStarterChoice, main: randomMainChoice, dessert: randomDessertChoice, message: "Data retrieved." })
        : res.status(500).json({ status: 500, message: "Error - Data not retrieved." })
    } catch (err) {
        console.log("Error:", err);
    }
    client.close();
};

module.exports = { allStarters, allMains, allDesserts, generateMenu };