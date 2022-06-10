const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const youSelect = document.querySelector('.you-select');
const computerSelect = document.querySelector('.computer-select');
const result = document.querySelector('.result');


let characters = ['✋','✊','✌'];
let resultArr = [];

rock.addEventListener('click', handle = () => {
    let random = Math.floor(Math.random() * 3);
    let gameResult = '';
    if(random === 0) {
        gameResult = 'lose'
    } else if (random === 1) {
        gameResult = 'draw';
    } else {
        gameResult = 'win';
    }
    resultArr = [{you: rock.innerHTML, computer: characters[random], gameResult}, ...resultArr]
    display()
})

paper.addEventListener('click', handle = () => {
    let random = Math.floor(Math.random() * 3);
    let gameResult = '';
    if(random === 0) {
        gameResult ='draw'
    } else if (random === 1) {
        gameResult = 'win';
    } else {
        gameResult = 'lose';
    }
    resultArr = [{you: paper.innerHTML, computer: characters[random], gameResult}, ...resultArr]
    display()
})

scissor.addEventListener('click', handle = () => {
    let random = Math.floor(Math.random() * 3);
    let gameResult = '';
    if(random === 0) {
        gameResult = 'win'
    } else if (random === 1) {
        gameResult = 'lose';
    } else {
        gameResult = 'draw';
    }
    resultArr = [{you: scissor.innerHTML, computer: characters[random], gameResult}, ...resultArr]
    display()
})

const display = () => {

    youSelect.innerHTML = '';
    computerSelect.innerHTML = '';
    result.innerHTML = '';  
    resultArr.map(el => {
        let you = document.createElement("p");
        let computer = document.createElement("p");
        let resultText = document.createElement("p");
        you.textContent = el.you;
        computer.textContent = el.computer;
        resultText.textContent = el.gameResult;

        if(el.gameResult === 'win') {
            resultText.style.color = '#32ff7e';
        } else if (el.gameResult === 'lose') {
            resultText.style.color = '#ff4d4d';
        } else {
            resultText.style.color = '#ffaf40';

        }

        youSelect.appendChild(you);
        computerSelect.appendChild(computer)
        result.appendChild(resultText)
    })
}





