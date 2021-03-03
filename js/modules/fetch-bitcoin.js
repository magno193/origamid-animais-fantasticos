export default function fetchBitcoin(url, target) {
  const btcPrice = document.querySelector(target);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      btcPrice.innerText = (1000 / data.BRL.sell).toFixed(4);
    }).catch((err) => console.log(Error(err)));
}
