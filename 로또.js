const startBtn = document.querySelector(".start");
let stopClick = false;

function makeNumber() {
    const numberArray = Array(45)
        .fill()
        .map((v, i) => i + 1);
    const numberShuffle = [];
    for (let i = 0; 0 < numberArray.length; ) {
        const randomNum = numberArray.splice(
            Math.floor(Math.random() * numberArray.length),
            1
        )[0];
        numberShuffle.push(randomNum);
    }
    const choiceNumbers = numberShuffle.splice(0, 7);

    return choiceNumbers;
}

function paintingBall(ballNumber, ballColor) {
    if (ballNumber < 10) {
        ballColor.style.background = "tomato";
    } else if (ballNumber < 20) {
        ballColor.style.background = "orange";
    } else if (ballNumber < 30) {
        ballColor.style.background = "green";
    } else if (ballNumber < 40) {
        ballColor.style.background = "blue";
    } else {
        ballColor.style.background = "purple";
    }
}

function gameStart() {
    const ball = document.querySelector(".ball");
    const choiceNumbers = makeNumber();

    if (stopClick) {
        return;
    }
    stopClick = true;
    ball.innerHTML = "";

    for (let i = 0; i < 6; i++) {
        function makeBall(j) {
            setTimeout(function () {
                const number = document.createElement("div");
                number.className = "number";
                number.textContent = choiceNumbers[j];
                paintingBall(number.textContent, number);
                ball.appendChild(number);
            }, j * 1000);
        }
        makeBall(i);
    }

    setTimeout(function () {
        const plus = document.createElement("div");
        plus.className = "plus";
        plus.textContent = "+";
        ball.appendChild(plus);
        const bonusNumber = document.createElement("div");
        bonusNumber.className = "bonusNumber";
        bonusNumber.textContent = choiceNumbers[6];
        paintingBall(bonusNumber.textContent, bonusNumber);
        ball.appendChild(bonusNumber);
        stopClick = false;
    }, 6000);
}

startBtn.addEventListener("click", gameStart);
