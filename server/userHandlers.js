// Configure the Mongo Client
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const dbName = "final_project_happy_hour";

const allUsers = async (req, res) => {
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

const singleUser = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const { userEmail } = req.params;
    try {
        await client.connect();

        const db = client.db(dbName);

        const findUser = await db.collection("users").findOne({ email: userEmail });

        findUser
        ? res.status(200).json({ status: 200, data: findUser, message: "Success: user exists." })
        : res.status(500).json({ status: 500, message: "Error: user does not exist." })
    } catch (err) {
        console.log("Error:", err);
    }
    client.close();
};

const createNewUser = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const { givenName, surname, email, password } = req.body;
    try {
        await client.connect();

        const db = client.db(dbName);

        const newUser = {
            givenName: givenName,
            surname: surname,
            email: email,
            password: password,
        };

        // To add - functionality to check if user has already signed-up with same email before processing sign-up.

        const addNewUser = await db.collection("users").insertOne(newUser);

        addNewUser
        ? res.status(200).json({ status: 200, data: newUser, message: "User has successfully signed-up." })
        : res.status(500).json({ status: 500, data: newUser, message: "Error - Something went wrong." })
    } catch (err) {
        console.log("Error:", err);
    }
    client.close();
};

const userMenu = async (req, res) => {
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

module.exports = { allUsers, singleUser, createNewUser, userMenu };