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

module.exports = { allStarters, allMains, allDesserts };