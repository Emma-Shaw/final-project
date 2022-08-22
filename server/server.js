const express = require('express')
const app = express()

const { allRedWines, allWhiteWines } = require("./handlers");

// REST Endpoints
app.get("/wines/red", allRedWines) // Fetch red wine data
app.get("/wines/white", allWhiteWines) // Fetch white wine data

app.get("*", (req, res) => {
    res.status(404).json({
        status: 404,
        message: "Oops - are you lost?", 
    })
})

app.listen(8000, () => console.log("Listening on port 8000 🚀✨"))