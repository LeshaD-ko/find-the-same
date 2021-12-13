const wrapper = document.querySelector(".wrapper");
const screens = document.querySelectorAll(".screen");
const btnStart = document.querySelector("#btn-start");
const cardAmount = 24;
// let num = 0;
let openCardsAmount = 0;
let cliksAmount = 0;
let openWin = 0;
let previousCard;
let numbers = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 3, 3, 4, 4];


btnStart.addEventListener("click", (event) => {
    screens[0].classList.add("up")

    for (let i = 0; i < cardAmount; i++) {
        const k = getRandomNumber(0, numbers.length)
        createCard(numbers[k]);
        dosmth(numbers);
        numbers.splice(k, 1);
    }

})

function createCard(num) {
    const card = document.createElement("div");
    const cardFrSide = document.createElement("div");
    const cardBkSide = document.createElement("div");
    card.classList.add("card");
    wrapper.append(card);
    card.appendChild(cardFrSide).classList.add("front")
    card.appendChild(cardBkSide).classList.add("back")
    cardBkSide.style.backgroundImage = `url(./img/kitten${num}.png)`;
}

wrapper.addEventListener("click", (event) => {
    if (event.target.classList.contains("front")) {
        cliksAmount++;
        doOpenCard(event)
        openCardsAmount++;
        if (openCardsAmount === 1) {
            previousCard = event;
        } else if (isCardsSame(previousCard, event)) {
            openCardsAmount = 0;
            openWin += 2;
            if (openWin === cardAmount) {
                setTimeout(() => {
                    alert(`Congradulation! You win!!! You clicked ${cliksAmount} times`)
                }, 1500)
            }

        } else {
            doCloseCard(previousCard);
            doCloseCard(event);
            openCardsAmount = 0;
        }

    }
});

function isCardsSame(first, second) {
    const fir = first.target.nextElementSibling.style.backgroundImage;
    const sec = second.target.nextElementSibling.style.backgroundImage;
    return fir === sec;
}

// element = document.getElementById('foo');
// color = element.style.backgroundColor;

function doOpenCard(event) {
    event.target.style.transform = "rotateY(180deg)"
    event.target.nextElementSibling.style.transform = "rotateY(0deg)"
}

function doCloseCard(event) {
    setTimeout(() => {
        event.target.style.transform = "";
        event.target.nextElementSibling.style.transform = "";
    }, 2000);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function dosmth(msg = "something doing") {
    console.log(msg);
}