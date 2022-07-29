// STEP 1: GRAB ELEMENT
const targetButton = document.getElementById("targetButton")

const baseUrl = "http://localhost:4004"
// STEP 2: WRITE FUNCTION FOR ELEMENT
const getHighScore = () => {
    console.log("highscore hit")
    axios.get(`${baseUrl}/highScore`)
        .then(res => {
            console.log(res.data)
            let highScore = document.querySelector('#highScore')
            let username = document.querySelector('#username')
            const scoreData = res.data[0].score;
            const usernameData = res.data[0].username;
            highScore.textContent = scoreData;
            username.textContent = usernameData;
        }).catch(err => console.log(err));
};//hfhgf

getHighScore()
// STEP 3: COMBINE FUNCTION WITH ELEMENT
// targetButton.addEventListener("click", getHighScore)