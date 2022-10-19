
increaseButton.addEventListener("click",function(){
    betAmount += 5;
    if(betAmount === 50)
        estPrizeAmountText.style.width = "12vh";

    if(betAmount === 100)
        betAmountText.style.width = "12vh";
    
    betAmountText.innerText = `${betAmount}`;
    estPrizeAmountText.innerText = `${betAmount * 2}`;
});

decreaseButton.addEventListener("click",function(){
    if(betAmount === 0)
        return;

    betAmount -= 5;

    if(betAmount < 50)
        estPrizeAmountText.style.width = "8vh";

    if(betAmount < 100)
        betAmountText.style.width = "8vh";
    
    betAmountText.innerText = `${betAmount}`;
    estPrizeAmountText.innerText = `${betAmount * 2}`;
});

betApproveButton.addEventListener("click",async function(){
    await console.log(globalUserBalance);
    if(globalUserBalance < betAmount){
        betApproveButton.innerText = "Yetersiz Bakiye";
        setTimeout(() => {
            betApproveButton.innerText = "Bahsi Onayla";
        },2000);
    }
    else if(betAmount === 0){
        betApproveButton.innerText = "Bahsi Artırın";
        setTimeout(() => {
            betApproveButton.innerText = "Bahsi Onayla";
        },2000);
    }
    else {
        prizeAmount = betAmount * 2;
        await prizeTransaction(betAmount);
        setWallet("d");
        userWallet.innerText += ` ${globalUserBalance-betAmount}` + ' SRD';
        betPage.style.visibility = "hidden";
        estPrizeAmountText.style.visibility = "hidden";
        betAmountText.style.visibility = "hidden";
        increaseButton.style.visibility = "hidden";
        decreaseButton.style.visibility = "hidden";
        playGround.style.filter = "brightness(1)";
    }
})