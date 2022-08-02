const player = require("./db.json")

module.exports = {
    getHighScore: (req, res) => res.status(200).send(player),

    updateHighScore: (req, res) => {
        console.log("ENDPOINT HIT")
        console.log(req.body)
        
        // player.username = req.body.newUsername
        player[0].score = req.body.newScore
        console.log(player)
        console.log(player[0])
        
        res.status(200).send(player[0])
    }
}