// Configure the Mongo Client
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const dbName = "final_project_happy_hour";

const allRedWines = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    try {
        await client.connect();

        const db = client.db(dbName);

        const redWineData = await db.collection("red_wines").find().toArray();

        redWineData.length > 0
        ? res.status(200).json({ status: 200, data: redWineData, message: "Data retrieved." })
        : res.status(500).json({ status: 500, message: "Error - Data not retrieved." })
    } catch (err) {
        console.log("Error:", err);
    }
    client.close();
};

const allWhiteWines = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    try {
        await client.connect();

        const db = client.db(dbName);

        const whiteWineData = await db.collection("white_wines").find().toArray();

        whiteWineData.length > 0
        ? res.status(200).json({ status: 200, data: whiteWineData, message: "Data retrieved." })
        : res.status(500).json({ status: 500, message: "Error - Data not retrieved." })
    } catch (err) {
        console.log("Error:", err);
    }
    client.close();
};

const randomWine = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const { color, region, organic, sugar } = req.body;
    try {
        await client.connect();

        const db = client.db(dbName);

        const wineArray = await db.collection(color).find(
            { region: region, organic: organic, sugar: sugar },
        ).toArray();
        
        const arrayLength = wineArray?.length;
        const arrayPosition = Math.floor(Math.random() * arrayLength);
        const wineSelection = wineArray[arrayPosition];

        wineSelection
        ? res.status(200).json({ status: 200, data: wineSelection, message: "Data retrieved." })
        : res.status(500).json({ status: 500, message: "Error - No wine matches found." })
    } catch (err) {
        console.log("Error:", err);
    }
    client.close();
};

module.exports = { allRedWines, allWhiteWines, randomWine };