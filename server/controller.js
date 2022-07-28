const player = require("./db.json")

module.exports = {
    getHighScore: (req, res) => res.status(200).send(highScore),

    updateHighScore: (req, res) => {
        console.log("ENDPOINT HITHTHTIIHTHTHITTHHT")
        console.log(req.player)
        if(player.score > highScore)
        res.status(200).send(player)
    }
}