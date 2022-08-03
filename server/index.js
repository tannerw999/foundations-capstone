const express = require("express")
const cors = require("cors")
const path = require('path')

const app = express()


app.use(express.json())
app.use(cors())

const port = process.env.PORT || 4004

const {getHighScore, updateHighScore} = require("./controller.js")


app.get("/highScore", getHighScore) 
app.put("/updateHighScore", updateHighScore)


app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, '../client/index.html')) 
})

app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/styles.css'))
})

app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/main.js'))
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// app.listen(4004, () => console.log("Docked at port 4004"))