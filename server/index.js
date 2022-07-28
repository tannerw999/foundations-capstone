const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

const {getHighScore, updateHighScore} = require("./controller.js")


app.get("/highScore", getHighScore) 
app.put("/updateHighScore", updateHighScore)
// app.post("/api/houses", createHouse) Put will be fine but make a post request too if have time.


app.listen(4004, () => console.log("Docked at port 4004"))