const heart = document.getElementsByClassName("heart");

const heartpoint = document.getElementById("heartpoint");
let heartValue = parseInt(heartpoint.innerText);

for (let hearts of heart) {
  hearts.addEventListener("click", function () {
    // console.log("hearts cliked");

    let heartValue = parseInt(heartpoint.innerText) + 1;
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
    const phone = cartButton.childNodes[1].src;

    // console.log(phone)

    let coinValue = parseInt(coin.innerText) - 20;
    coin.innerText = coinValue;
    // console.log(coinValue);

    if (coinValue < 0) {
      alert("You don't have enough coins.It costs 20 coins to make a call.");
      coin.innerText = 0;
    //   return;
    }else{
      alert(`Calling ${name} ${phoneNumber}.`);
    //   return;

       const cartcontainer = document.getElementById("cart-container");

    const newCart = document.createElement("div")
    newCart.innerHTML = `
          <div
            class="card w-ful shadow-xl round-4xl bg-gray-100 flex flex-row justify-between items-center max-lg:flex-col p-4 mb-4"
          >
            <div class="card-body">
              <p class="font-bold">${name}</p>
              <p>${phoneNumber}</p>
            </div>
            <p class="text-xs">11:36:58 AM</p>
          </div>

    `;
// console.log("newCar");
cartcontainer.append(newCart);

    }


    // const call time = cartButton.;



  });
}

// const coin = document.getElementById("coin");
// let coinValue = parseInt(coin.innerText);
// console.log(coinValue);

// const heartpoint = document.getElementById("heartpoint");
// let heartValue = parseInt(heartpoint.innerText);
