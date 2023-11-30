const emojis = [
    "🤢",
    "🤢",
    "😍",
    "😍",
    "😒",
    "😒",
    "😎",
    "😎",
    "😴",
    "😴",
    "😝",
    "😝",
    "😡",
    "😡",
    "🤑",
    "🤑",
];

let openCards = [];

/*se esse número aleatório for maior que 0.5*/
/*vai pegar o peso de 2 ou -1. Quem estiver com peso de -1 vai para trás e quem estiver com peso de 2 vai para frente */

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i=0; i < emojis.length; i++)
{
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if(openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    } 
    if(openCards.length == 2) {
        setTimeout(checkMatch, 500); 
     }
}

function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch"); //se os dois forem iguais coloca o match
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen"); //se não for igual, remove
        openCards[1].classList.remove("boxOpen");
    }

    openCards = []; //resetar as cartas que tem na memória

     /*pegar todo mundo que tem a classe match. Se forem iguais ao tamanho que tem no 'emojis', 
    significa que todos têm o mesmo tamanho e que já virou todas as cartas*/

    if (document.querySelectorAll("boxMatch").length === emojis.length) {
        alert("Você venceu!");
    }
}