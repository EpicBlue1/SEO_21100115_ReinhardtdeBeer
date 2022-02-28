console.log("Workiing");

//grab everything
const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

//add event listings
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

//all coins
// const coins = "https://api.coingecko.com/api/v3/coins";
//     $.getJSON(coins, function(result){
//         console.log("Coins");
//         console.log(result);
//     });


//search
// const coinSearch = "https://api.coingecko.com/api/v3/search?query=bitcoin";
//     $.getJSON(coinSearch, function(result){
//         console.log("Coins");
//         console.log(result);
//     });

//7 top trending last 24 hours
// const coinTrending = "https://api.coingecko.com/api/v3/search/trending";
//     $.getJSON(coinTrending, function(result){
//         console.log("Local Time");
//         console.log(result);
//     });