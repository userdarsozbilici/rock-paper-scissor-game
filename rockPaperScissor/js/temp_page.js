function setEnglish(){
    languageCheck = 1;
    language = "en";
    setResultText.innerText = "Set Result";
    document.title = "ROCK PAPER SCISSORS";
    document.getElementById('head').innerText = "ROCK PAPER SCISSORS GAME";
    comText.innerText = "Computer";
    claimText = "Claim Prize";
    againButton.innerText = "Play";
    drawText = "Draw";
    setWinText = "Set Winner is ";
    matchWinText = "Match Winner is ";
    claimLanguageText = "CLAIM";
    prizeLanguageText = "Your Prize:"
    connectionLanguageText = "Connect";
    disconnectionLanguageText = "Disconnect";
    adressLanguageText = "Adress: ";
    claimButton.innerText = claimLanguageText;
    prizeText.innerText = prizeLanguageText;
    userLanguageText = "Player";
    computerLanguageText = "Computer";
    walletLanguageText = "Wallet: ";
    userWallet.innerText = walletLanguageText;
    tempNameInputPlaceHolder.placeholder = "Write Your Name";
    matchResultText.innerText = "Match Result";
    englishButton.style.boxShadow = "0 0 10px red, 0 0 30px red";
    turkishButton.style.boxShadow = "";
    againButton.style.fontSize = "1.6vh";
}

function setTurkish(){
    languageCheck = 1;
    language = "tr";
    setResultText.innerText = "Set Sonucu";
    comText.innerText = "Bilgisayar";
    claimLanguageText = "TOPLA";
    prizeLanguageText = "Ödülünüz:"
    connectionLanguageText = "Bağlan";
    disconnectionLanguageText = "Bağlantıyı Kes";
    adressLanguageText = "Adres: ";
    claimButton.innerText = claimLanguageText;
    prizeText.innerText = prizeLanguageText;
    document.title = "TAŞ KAĞIT MAKAS";
    document.getElementById('head').innerText = "TAŞ KAĞIT MAKAS OYUNU";
    againButton.innerText = "Oyna";
    drawText = "Berabere";
    walletLanguageText = "Cüzdan: ";
    userWallet.innerText = walletLanguageText;
    setWinText = "Seti Kazanan: ";
    matchWinText = "Maçı Kazanan: ";
    userLanguageText = "Oyuncu";
    computerLanguageText = "Bilgisayar";
    tempNameInputPlaceHolder.placeholder = "İsminizi Girin";
    matchResultText.innerText = "Maç Sonucu";
    turkishButton.style.boxShadow = "0 0 10px red, 0 0 30px red";
    englishButton.style.boxShadow = "";
    againButton.style.fontSize = "1.3vh";
}

function submit(){
    if(languageCheck == 0 || tempNameInputPlaceHolder.value === "")
        return;
    userText.innerText = tempNameInputPlaceHolder.value;
    tempPage.remove();
    playGround.style.filter = "brightness(1)";
    setButton(false);
    prizePage.style.right = "0";
}

englishButton.addEventListener("click",setEnglish);
turkishButton.addEventListener("click",setTurkish);

submitButton.addEventListener("click",submit);
tempPage.addEventListener("keyup",function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        submitButton.click();
    }
});

mainSetEnglish.addEventListener("click",setEnglish); //That should be at main_page.js file.
mainSetTurkish.addEventListener("click",setTurkish);//However, that is here because of scoping in html file.