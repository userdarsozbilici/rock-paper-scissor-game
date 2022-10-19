let userAdress = null;
let globalUserBalance;
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

const token_ABI = [
    "function approve(address spender, uint256 amount) external returns (bool)",
    "function balanceOf(address account) external view returns (uint256)",
    "function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)",
    "function transfer(address recipient, uint256 amount) external returns (bool)"
]
const treasuryAdress = '0xB68f6cbA00A14B23af04EF4820F8028Bc60da406';
const contractAdress = '0x8780da3d80069e50b2ceb2dcb5d7bd8db1eb21b9';

const contract = new ethers.Contract(contractAdress, token_ABI, provider);

metamaskButton.addEventListener("click", loginMetamask);
async function loginMetamask() {

    if (!window.ethereum) {
        console.log("Metamask is not installed!");
        return false;
    }
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    userAdress = await signer.getAddress();
    console.log(userAdress);
    isWalletConnected = true;
    metamaskAdressText.innerText += truncateAddress(userAdress);
    metamaskButton.innerText = disconnectionLanguageText;
    setWallet("c");
    metamaskButton.removeEventListener("click", loginMetamask);
    setTimeout(function () {
        metamaskButton.addEventListener("click", signOutMetamask);
    }, 200)
}

async function signOutMetamask() {
    metamaskAdressText.innerText = adressLanguageText;
    window.userWAlletAdress = "";
    metamaskButton.innerText = connectionLanguageText;
    setWallet("d");
    isWalletConnected = false;
    metamaskButton.removeEventListener("click", signOutMetamask);
    setTimeout(function () {
        metamaskButton.addEventListener("click", loginMetamask);
    }, 200);
}

function truncateAddress(address) {
    if (!address) {
        return "";
    }
    return `${address.substr(0, 5)}...${address.substr(
        address.length - 5,
        address.length
    )}`;
}

console.log(provider);

async function transfer() {
    const transitionParams = {
        to: '0x724D14e91bFD717D98d47fEDCA07752FBFA75106',
        from: '0x724D14e91bFD717D98d47fEDCA07752FBFA75106',
        chainId: '0x1'
    }
    const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transitionParams]
    });

}

async function getUserBalance() {
    let balance = await contract.balanceOf(userAdress);
    //console.log(`Balance : ${ethers.utils.formatEther(balance)}`);
    balance = Math.floor(ethers.utils.formatEther(balance));
    return balance;
}

async function setWallet(operation) {
    if (operation === "c") {
        let balance = await contract.balanceOf(userAdress);
        //console.log(`Balance : ${ethers.utils.formatEther(balance)}`);
        balance = Math.floor(ethers.utils.formatEther(balance));
        globalUserBalance = balance;
        userWallet.innerText += ` ${balance}` + ' SRD';
        console.log(userWallet);
    }
    else if (operation === "d") {
        userWallet.innerText = walletLanguageText;
    }
}

async function prizeTransaction(prizeAmount){
    const signer = await provider.getSigner();
    await contract.connect(signer).approve(userAdress,"1000000000000000000000000");
    /*console.log(signer);
    console.log(userAdress," " , treasuryAdress);
    prizeAmount = await ethers.utils.parseEther(`${prizeAmount}`);*/
    await contract.connect(signer).transferFrom(userAdress,treasuryAdress,ethers.utils.parseEther(`${prizeAmount}`));
    //contract.connect(signer).transfer(userAdress,ethers.utils.parseEther("100"));
}



