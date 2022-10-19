
function runPrizePage(){
    prizePage.style.opacity = "100";
    playGround.style.filter = "brightness(0.3)";
    prizePage.style.visibility = "";
    prizeAmountText.innerText = prizeAmount + " $BLA";

    claimButton.addEventListener("click",function(){
        prizePage.style.opacity = "0";
        userPrize += prizeAmount;
        userWallet.innerText = walletLanguageText + userPrize + "$BLA";
        prizeAmount = 0;
        playGround.style.filter = "brightness(1)";
        prizePage.style.visibility = "hidden";
    });
}


