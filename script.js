const heart = document.getElementsByClassName("heart");

const heartpoint = document.getElementById("heartpoint");
let heartValue = parseInt(heartpoint.innerText);

for (let hearts of heart) {
  hearts.addEventListener("click", function () {
    // console.log("hearts cliked");

    let heartValue = parseInt(heartpoint.innerText)+1;
    heartpoint.innerText = heartValue;
    console.log(coinValue);
  });
}

const cartBtns = document.getElementsByClassName("cart-btn");

const coin = document.getElementById("coin");
let coinValue = parseInt(coin.innerText);

for (let cartButton of cartBtns) {
  cartButton.addEventListener("click", function () {
    const name = cartButton.parentNode.parentNode.childNodes[1].innerText;
    const phoneNumber =
      cartButton.parentNode.parentNode.childNodes[5].innerText;

    let coinValue = parseInt(coin.innerText) - 20;
    coin.innerText = coinValue;
    // console.log(coinValue);

    if (coinValue < 0) {
      alert("You don't have enough coins. Please recharge.");
      coin.innerText = 0;
      return;
    }

    // const call time = cartButton.;
  });
}

// const coin = document.getElementById("coin");
// let coinValue = parseInt(coin.innerText);
// console.log(coinValue);

// const heartpoint = document.getElementById("heartpoint");
// let heartValue = parseInt(heartpoint.innerText);
