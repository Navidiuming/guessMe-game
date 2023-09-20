let wordHolder = document.getElementById("wordHolder");
let usedLetterHolder = document.getElementById("usedLettersBox");
let resultPage = document.getElementById("resultPage");
let restartBtn = document.getElementById("restartBtn");
let keyboardBtn = document.getElementsByClassName('alphabet');
let mistakeCounter = 0;
let words = ["ریحانه","نیلوفر","نازنین","کیمیا","شهرزاد","فرناز","مهرناز","مژگان","معصومه","رومینا","گلچهره","دلاویز","سمانه","پریناز","بهنوش","سپیده","سعیده","سمیرا","گلشیفته","گلناز","بارانا","علیرضا","رادوین","ارشیا","امیرعلی","سامیار","عرفان","ماکان","سیروان","زانیار","ابوالفضل","ارسلان","بهزاد","سامان","شاهین","کیارش","حمیدرضا","کیکاوس","کوروش","کاوه"]
let wordToFind = "";

// alert(words.length);
// for(i =0 ; i<wordToFind.length;i++){
//     wordHolder.appendChild(addNewLetterToCreateTheWord(wordToFind.substring(i,i+1)));
//     usedLetterHolder.appendChild(addNewLetterToCreateTheWord(""));
// }

setNewWord();
restartBtn.addEventListener("click",restartThegame);

function addNewLetterToCreateTheWord(letter){
    const box = document.createElement("p");
    box.innerHTML=letter;
    box.classList.add("letterToFind");
    return box;
}

function myFunction(el){
        let counter = 0;
        // alert(el.innerHTML);
        for(i=0;i<wordToFind.length;i++){
            if(el.innerHTML == wordHolder.children[i].innerHTML){
                // alert(el.innerHTML + "==" + wordHolder.children[i].innerHTML);
                wordHolder.children[i].style.color = "blue";
                counter++;
            }
        }
        el.disabled = true;
        if(counter == 0){
            usedLetterHolder.children[mistakeCounter].innerHTML = el.innerHTML;
            mistakeCounter++;
        }
        TestWinPossibility();
        TestLose();
}

function TestWinPossibility(){
    let isWinner = true;
    for(i = 0 ; i < wordToFind.length ; i++){
        if(window.getComputedStyle(wordHolder.children[i]).color == "rgb(222, 222, 222)"){
            // alert('you are not the isWinner yet');
            isWinner = false;
            break;
        }
    }
    if(isWinner == true){
            // alert("you won the game!!");
            resultPage.children[0].innerHTML = `دمت گرم گل کاشتی ، زدی به هدف، حدس زدن ${wordToFind} کار سختی بود ولی از پسش براومدی.`;
            resultPage.children[1].innerHTML = `برای بازی بعدی دکمه ی زیر رو فشار بده`;

            resultPage.style.display = "flex";
    }
}

function TestLose(){
    let isLosser = true;
    for(i = 0 ; i < wordToFind.length ; i++){
        if(usedLetterHolder.children[i].innerHTML == ""){
            // alert('you are not the a losser yet');
            isLosser = false;
            break;
        }
    }
    if(isLosser == true){
    // alert("you losed the game");
    resultPage.children[0].innerHTML = `متاسفانه با وجود تلاش خوبت نتونستی کلمه درست رو حدس بزنی کلمه درست ${wordToFind} بود`;
    resultPage.children[1].innerHTML = `برای بازی بعدی دکمه ی زیر رو فشار بده`;

    resultPage.style.display = "flex";
    }
}

function restartThegame(){

    for(i=0; i< keyboardBtn.length; i++){
        keyboardBtn[i].disabled = false;
    }
    setNewWord();
    mistakeCounter = 0;
    resultPage.style.display = "none";
}

function setNewWord(){
    let randNum = Math.random() * words.length;
    wordToFind = words[Math.round(randNum)];
    while(wordHolder.firstChild){
        wordHolder.removeChild(wordHolder.firstChild);
        usedLetterHolder.removeChild(usedLetterHolder.firstChild);
    }
    for(i =0 ; i<wordToFind.length;i++){
        wordHolder.appendChild(addNewLetterToCreateTheWord(wordToFind.substring(i,i+1)));
        usedLetterHolder.appendChild(addNewLetterToCreateTheWord(""));
    }
}