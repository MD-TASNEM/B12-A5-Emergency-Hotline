const copys = document.getElementsByClassName("copys");

const copyTimes = document.getElementById("copyTimes");
let copyValue = parseInt(copyTimes.innerText);

// console.log(copyValue);

for (let copy of copys) {
  copy.addEventListener("click", function () {
    let copyValue = parseInt(copyTimes.innerText) + 1;
    copyTimes.innerText = copyValue;
    console.log(copyValue);
  });
}

// heart Selection

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

// call btn Selection

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
    } else {
      alert(`Calling ${name} ${phoneNumber}.`);
      //   return;

      const cartcontainer = document.getElementById("cart-container");

      const newCart = document.createElement("div");
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

// clear Selection

const clearButtons = document.getElementsByClassName("Clear");
for (const btn of clearButtons) {
  btn.addEventListener("click", function () {
    console.log("Clear button clicked");
    const cartcontainer = document.getElementById("cart-container");
    cartcontainer.innerHTML = "";
  });
}


// copy Selection

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".copy-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".card");
      const textElement = card.querySelector(".hotline-number");
      if (!textElement) return;

      const text = textElement.innerText;

      navigator.clipboard.writeText(text)
        .then(() => {
          alert("Hotline number কপি হয়েছে!");
        })
        .catch(err => {
          console.error("কপি করতে সমস্যা হয়েছে:", err);
        });
    });
  });
});
