export default function initFetchBitcoin() {
  const btcPrice = document.querySelector('.btc-price');
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      btcPrice.innerText = (1000 / data.BRL.sell).toFixed(4);
    }).catch((err) => console.log(Error(err)));
}
