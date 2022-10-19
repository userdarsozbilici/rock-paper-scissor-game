prizePage.style.visibility = "hidden";

function getResult(choice,computerChoicef){
    if(choice === computerChoicef)
        return 0;
    else if(choice === "tas" && computerChoicef === "makas")
        return 1;
    else if(choice === "tas" && computerChoicef === "kagit")
        return 2;
    else if(choice === "kagit" && computerChoicef === "makas")
        return 2;
    else if(choice === "kagit" && computerChoicef === "tas")
        return 1;
    else if(choice=== "makas" && computerChoicef === "tas")
        return 2;
    else if(choice === "makas" && computerChoicef === "kagit")
        return 1; 
}

metamaskAdressText.innerText = "Adress: ";
function convertToString(number){
    switch(number){
        case 1:
            return "1";
        break;
        case 2:
            return "2";
        break;
        case 3:
            return "3";
        break; 
    }
}

function setImagesNormal(){
    computerImage.style.backgroundImage = "url('images/com.png')";
    userImage.style.backgroundImage = "url('images/oyuncu.png')";
}

function setComputerImage(choice){
    if(choice === "tas")
        computerImage.style.backgroundImage = "url('images/tas2.png')";
    else if(choice === "kagit")
        computerImage.style.backgroundImage = "url('images/kagit2.png')";
    else if(choice === "makas")
         computerImage.style.backgroundImage = "url('images/makas2.png')";
}

setButton(true);

function setButton(boolean){
    tas.disabled = boolean;
    kagit.disabled = boolean;
    makas.disabled = boolean;
    giveUpButton.disabled = boolean;
}

function getNormal(){
    secondText.style.transition = "0.5s";
    secondText.style.borderRadius = "5px";
    secondText.style.backgroundColor = "#0B111B";
    secondText.style.height = "30px";
    secondText.style.fontWeight = "normal";
    secondText.style.color = "#152132";
    secondText.style.border = "none";
    secondText.style.boxShadow = "none";
    secondText.value = "";
    secondText.style.textAlign = "center";
    secondText.style.fontSize = "1.8vh";
    if(winner === "computer")
    computerPointImage.style.boxShadow = "";
    else if(winner === "user")
        userPointImage.style.boxShadow = "";
    setImagesNormal();
    setButton(false);
}

function winnerAnimation(){
    secondText.style.transition = "0.5s";
    secondText.style.borderRadius = "30px";
    secondText.style.backgroundColor = "white";
    secondText.style.color = "#0B111B";
    secondText.style.height = "50px";
    secondText.style.fontWeight = "bold";
    secondText.style.color = "#152132";
    secondText.style.border = "none";
    secondText.style.boxShadow = "0 0 10px white, 0 0 40px white, 0 0 80px white";
    secondText.style.textAlign = "center";
    secondText.style.fontSize = "1.8vh";
    if(winner === "computer"){
        computerPointImage.style.boxShadow = "0 0 1.5vh rgb(204, 221, 230), 0 0 2vh rgb(197, 220, 235) , 0 0 3vh rgb(197, 220, 235), 0 0 4vh rgb(197, 220, 235), 0 0 6vh rgb(197, 220, 235)";
    }
    else if(winner === "user"){
        userPointImage.style.boxShadow = "0 0 1.5vh rgb(204, 221, 230), 0 0 2vh rgb(197, 220, 235), 0 0 4vh rgb(197, 220, 235),0 0 4vh rgb(197, 220, 235), 0 0 6vh rgb(197, 220, 235)";
    }   
 
    setButton(true);
    setTimeout(getNormal,3000);
}

function getMatchWinnerNormal(){
    matchResult.style.transition = "0.5s";
    matchResult.style.borderRadius = "5px";
    matchResult.style.backgroundColor = "#0B111B";
    matchResult.style.height = "30px";
    matchResult.style.fontWeight = "normal";
    matchResult.style.color = "#152132";
    matchResult.style.border = "none";
    matchResult.style.boxShadow = "none";
    matchResult.value = "";
    matchResult.style.textAlign = "center";
    matchResult.style.fontSize = "1.8vh";
    if(winner === "computer"){
        computerPointImage.style.boxShadow = "";
    }
    else if(winner === "user"){
        userPointImage.style.boxShadow = "";
    }
        
    setImagesNormal();
    setButton(false);
}

function matchWinnerAnimation(){
    giveUpButton.disabled = true;
    matchResult.style.transition = "0.5s";
    matchResult.style.borderRadius = "30px";
    matchResult.style.backgroundColor = "white";
    matchResult.style.color = "#0B111B";
    matchResult.style.height = "50px";
    matchResult.style.fontWeight = "bold";
    matchResult.style.color = "#152132";
    matchResult.style.border = "none";
    matchResult.style.boxShadow = "0 0 10px white, 0 0 40px white, 0 0 80px white";
    matchResult.style.textAlign = "center";
    matchResult.style.fontSize = "1.8vh";
    if(winner === "computer")
        computerPointImage.style.boxShadow = "0 0 1.5vh rgb(204, 221, 230), 0 0 2vh rgb(197, 220, 235) , 0 0 3vh rgb(197, 220, 235), 0 0 4vh rgb(197, 220, 235), 0 0 6vh rgb(197, 220, 235)";
    else if(winner === "user")
        userPointImage.style.boxShadow = "0 0 1.5vh rgb(204, 221, 230), 0 0 2vh rgb(197, 220, 235), 0 0 4vh rgb(197, 220, 235),0 0 4vh rgb(197, 220, 235), 0 0 6vh rgb(197, 220, 235)";
    setButton(true);
}

function getWait(){
    computerImage.style.backgroundImage = "url('images/com.png')";
    userImage.style.backgroundImage = "url('images/oyuncu.png')";
}

function playGame(){
    computerChoice = getComputerChoice();
    setComputerImage(computerChoice);
    const result = getResult(userChoice,computerChoice);
    switch(result){
        case 0:
            secondText.value = drawText;
            winner = "draw";
            winnerAnimation();
        break;
        case 1:
            secondText.value = setWinText + userLanguageText;
            winner = "user";
            winnerAnimation();
            userPoint += 1;
            userPointImage.innerText = convertToString(userPoint);
        break;
        case 2:
            secondText.value = setWinText + computerLanguageText;
            winner = "computer";
            winnerAnimation();
            computerPoint += 1;
            computerPointImage.innerText = convertToString(computerPoint);
        break;
    }

    if(computerPoint == 3){
        finishGame("computer");
    }
        
    else if(userPoint == 3){
        finishGame("user");
        setTimeout(runPrizePage,6000);
    }
        
}

function finishGame(winner){
    
    if(winner === "computer")
        setTimeout(function(){
            matchResult.value = matchWinText + computerLanguageText;
    },3400);

    if(winner === "user")
        setTimeout(function(){
            matchResult.value = matchWinText + userLanguageText;
        },3400);
    
    setTimeout(matchWinnerAnimation,3400);

    tas.disabled = true;
    kagit.disabled = true;
    makas.disabled = true;
    giveUpButton.disabled = true;
    setTimeout(getWait,3000);
}

function getComputerChoice(){
    const computerChoiceNumber = Math.floor(Math.random() * 3);
    const computerChoice = elements[computerChoiceNumber];
    return computerChoice;
}

function setUserImage(choice){
    if(choice === "tas")
        userImage.style.backgroundImage = "url('images/tas2.png')";
    else if(choice === "kagit")
        userImage.style.backgroundImage = "url('images/kagit2.png')";
    else if(choice === "makas")
        userImage.style.backgroundImage = "url('images/makas2.png')";
}

tas.addEventListener("click",function(){
    if(userPoint == 3 || computerPoint == 3 || finishCheck == 1){
        setButton(true);
        againButton.disabled = false;
        return;
    }
    userChoice = "tas";
    setUserImage(userChoice);
    playGame();

});

kagit.addEventListener("click",function(){
    if(userPoint == 3 || computerPoint == 3 || finishCheck == 1){
        setButton(true);
        againButton.disabled = false;
        return;
    }
    userChoice = "kagit";
    setUserImage(userChoice);
    playGame();
});

makas.addEventListener("click",function(){
    if(userPoint == 3 || computerPoint == 3 || finishCheck == 1){
        setButton(true);
        againButton.disabled = false;
        return;
    }
    userChoice = "makas";
    setUserImage(userChoice);
    playGame();
});

giveUpButton.addEventListener("click",function(){
    finishCheck = 1;
    computerImage.style.backgroundImage = "url('images/com.png')";
    userImage.style.backgroundImage = "url('images/pes.png')";
    tas.disabled = true;
    kagit.disabled = true;
    makas.disabled = true;
    giveUpButton.disabled = true;
    computerPointImage.innerText = "3";
    winner = "computer";
    matchResult.value = matchWinText + computerLanguageText;
    matchWinnerAnimation();
    runPrizePage();
});

againButton.addEventListener("click",function(){
    finishCheck = 0;
    tas.disabled = false;
    kagit.disabled = false;
    makas.disabled = false;
    giveUpButton.disabled = false;
    secondText.value = null;
    secondText.placeholder = "";
    matchResult.value = null;
    userPoint = 0;
    computerPoint = 0;
    computerImage.style.backgroundImage = "url('images/com.png')";
    userImage.style.backgroundImage = "url('images/oyuncu.png')";
    userPointImage.innerText = "0";
    computerPointImage.innerText = "0";
    getMatchWinnerNormal();
    betAmount = 0;
    betAmountText.innerText = `0`;
    estPrizeAmountText.innerText = `0`;
    betPage.style.visibility = "";
    estPrizeAmountText.style.visibility = "";
    betAmountText.style.visibility = "";
    increaseButton.style.visibility = "";
    decreaseButton.style.visibility = "";
    if(isWalletConnected == false ){
        console.log(isWalletConnected);
        return;
    }
        
    betPage.style.opacity = "1";
    playGround.style.filter = "brightness(0.6)";
});
