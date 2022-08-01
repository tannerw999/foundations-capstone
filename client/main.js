// STEP 1: GRAB ELEMENT
// const targetButton = document.getElementById("targetButton")
const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

const baseUrl = "http://localhost:4004"

const colors = ['#1abc9c', '#4efc53', '#3498db', '#9b59b6', '#ff3f34', '#f1c40f', '#f57e33', '#48dbfb']
let currentHighScore = undefined
let time = 10

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
            currentHighScore = scoreData
        }).catch(err => console.log(err));
};
getHighScore()

const updateHighScore = () => {
    console.log
    const putBody = {
        newScore: editScore.value,
        newUsername: editUsername.value
    }
    console.log("new high score")
    axios.put(`${baseUrl}/updateHighScore`, putBody)
        .then((res) => {
            alert(res.data);
        })
};

function startGame () {
    setInterval(decreaseTime, 1000)
    setTime(time)
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}






// STEP 3: COMBINE FUNCTION WITH ELEMENT
startBtn.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up')
  if (event.target.classList.contains('startBtn')) {
    startGame()
  }
})

    
