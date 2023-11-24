let data = [];
let cardContainer = document.getElementById("card-container");
console.log(cardContainer);
document.addEventListener("DOMContentLoaded", function (event) {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  )
    .then((res) => res.json())
    .then((res) => {
      data = res;
      console.log(
        data[0].price_change_percentage_24h < 0 ? "color:red;" : "color:green;"
      );
      for (let i = 0; i < data.length; i++) {
        cardContainer.innerHTML += `
        <div id="card-container" class="card-container">
        <div class="card">
            <div class="image">
                <img src=${data[i].image} class="img" alt="">
            </div>
            <div class="details">
                <div class="row"> 
                    <span class="name">${data[i].name}</span>
                    <span>${data[i].current_price}</span>
                </div>
                <div class="row">
                    <span>${data[i].symbol}</span>
                    <span class="change-price" style=${
                      data[i].price_change_percentage_24h < 0
                        ? "background-color:#f39b9b;"
                        : "background-color:lightgreen;"
                    }> 
                    ${data[i].price_change_percentage_24h.toFixed(2)}%</span>
                </div>
            </div>
        </div>
    </div>
        `;
      }
    });
});
