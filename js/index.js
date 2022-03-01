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

// Card Compare page
// add and remove cards
// grab everything

const clickDiv = document.querySelector('Selector');
const changeInfo = document.querySelector('.Option');
const changeInfoTwo = document.querySelector('.DisplayOption');
const removeButton = document.querySelector('.DisplayOption');
const search = document.querySelector('.Search');
const topText = document.querySelector('.HeadingCrypto');

search.addEventListener("click", () => {
    const searchQuery = document. querySelector('input'). value;
    console.log(searchQuery);
    
    // search result
    const coinSearch = "https://api.coingecko.com/api/v3/search?query=" + searchQuery;
    $.getJSON(coinSearch, function(result){
        console.log(result.coins);

        for(var i = 0; i < result.coins.length; i++){

            //variable for html
            var searchRes = `
            <Button class="w-full h-16 p-1 bg-gray-800 rounded Option Selector grid grid-cols-3 text-left mb-2">
                <img src="`+result.coins[i].large+`" class="h-14 w-14 rounded-full bg-white">
                    <div>`+result.coins[i].name+`</div>
                <div>
                    <div>Market Cap Rank</div>
                    <div>`+result.coins[i].market_cap_rank+`</div>
                </div>
            </Button>
            `;
            //add html to dom
            $(".SearchRes").append(searchRes);
        
        };
    });
});

//add event listings
clickDiv.addEventListener("click", () => {
    changeInfo.classList.toggle("hidden");
    changeInfoTwo.classList.toggle("hidden");
    search.classList.toggle("hidden");
    topText.textContent = "Selected Currency";
});

removeButton.addEventListener("click", () => {
    changeInfo.classList.toggle("hidden");
    changeInfoTwo.classList.toggle("hidden");
    search.classList.toggle("hidden");
    topText.textContent = "Select an Option";
});

