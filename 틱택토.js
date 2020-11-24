const table = document.querySelector(".table");
const tdArray = [];
const trArray = [];
let turn = "X";

function playTurn(e) {
    let whereTr = trArray.indexOf(e.target.parentNode);
    let whereTd = tdArray[whereTr].indexOf(e.target);

    if (tdArray[whereTr][whereTd].textContent !== "") {
        return;
    } else {
        tdArray[whereTr][whereTd].textContent = turn;
    }
    let isLine = false;

    if (
        tdArray[whereTr][0].textContent === turn &&
        tdArray[whereTr][1].textContent === turn &&
        tdArray[whereTr][2].textContent === turn
    ) {
        isLine = true;
    }
    if (
        tdArray[0][whereTd].textContent === turn &&
        tdArray[1][whereTd].textContent === turn &&
        tdArray[2][whereTd].textContent === turn
    ) {
        isLine = true;
    }
    if (whereTr - whereTd === 0) {
        if (
            tdArray[0][0].textContent === turn &&
            tdArray[1][1].textContent === turn &&
            tdArray[2][2].textContent === turn
        ) {
            isLine = true;
        }
    }
    if (Math.abs(whereTr - whereTd) === 2) {
        if (
            tdArray[0][2].textContent === turn &&
            tdArray[1][1].textContent === turn &&
            tdArray[2][0].textContent === turn
        ) {
            isLine = true;
        }
    }
    if (isLine) {
        console.log(`${turn} 님이 승리`);
        turn = "x";
        tdArray.forEach((tr) => {
            tr.forEach((td) => {
                td.textContent = "";
            });
        });
    } else {
        if (turn === "X") {
            turn = "O";
        } else {
            turn = "X";
        }
    }
}

for (let i = 0; i < 3; i++) {
    const tr = document.createElement("tr");
    trArray.push(tr);
    tdArray.push([]);
    table.appendChild(tr);
    for (let j = 0; j < 3; j++) {
        const td = document.createElement("td");
        td.addEventListener("click", playTurn);
        tdArray[i].push(td);
        tr.appendChild(td);
    }
}
