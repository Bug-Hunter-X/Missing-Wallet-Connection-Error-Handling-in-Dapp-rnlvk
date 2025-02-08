function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('Make sure you have metamask!');
    return;
  } else if (!ethereum.selectedAddress) {
    console.log('Connect to MetaMask!');
    return;
  } else {
    console.log('Wallet is connected!', ethereum.selectedAddress);
  }
}