const express = require('express')
const app = express()

app.get("/hello-world", (req, res) => {
    res.status(200).json({ status: 200, message: 'Hello World' })
})

app.get("*", (req, res) => {
    res.status(404).json({
        status: 404,
        message: "Oops - are you lost?", 
    })
})

app.listen(8000, () => console.log("Listening on port 8000 🚀✨"))