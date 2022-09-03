// Configure Auth0
const { auth } = require("express-oauth2-jwt-bearer");

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
    audience: 'Final_Project_Happy_Hour',
    issuerBaseURL: `https://dev-41dcx13f.us.auth0.com/`,
});

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
    let clientExistsAlready = false;
    try {
        await client.connect();

        const db = client.db(dbName);

        const newUser = {
            givenName: givenName,
            surname: surname,
            email: email,
            password: password,
        };

        const checkForUser = await db.collection("users").findOne({ email: email });

        if (checkForUser) {
            clientExistsAlready = true;
        } else {
            await db.collection("users").insertOne(newUser);
        };

        clientExistsAlready === false
        ? res.status(201).json({ status: 201, data: newUser, message: "User has successfully signed-up." })
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

module.exports = { allUsers, singleUser, createNewUser, userMenu, auth, config, configAuth };