console.log("Working");

// 7 top trending last 24 hours
const coinTrending = "https://api.coingecko.com/api/v3/search/trending";

    $.getJSON(coinTrending, function(result){
        console.log(result.coins);

        for(var i = 0; i < result.coins.length; i++){

            

            //variable for html
            var TopCur = `
            <div class="p-2 h-full bg-gray-900 py-2 px-2 grid md:grid-cols-2 grid-cols-4 text-xs justify-items-center border-2 border-y-white">
					<div class="text-center text-white text-base">`+result.coins[i].item.name+`</div>
                    <img src="`+result.coins[i].item.small+`" style="image-rendering: pixelated;" class="w-7 h-7 bg-white rounded-full"></img>
					<div class="py-2 text-white">Market Cap:</div>
					<div class="py-2 text-white">`+result.coins[i].item.market_cap_rank+`</div>
					<div class="py-2 text-right text-white">Bitcoin Price</div>
					<div class="py-2 text-left text-white">`+ roundPrice(result.coins[i].item.price_btc) + `</div>
			</div>
            `;
            //add html to dom
            $(".TopCurrencies").append(TopCur);

            //round number to display on the side
            function roundPrice(price) {
                return price.toFixed(12);
            }
        
        };
    });

//mobile menu functionality
//grab everything
const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

//add event listings
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

//links
//grab everything
const btnOn = document.querySelector('.linkbutton');
const menuOn = document.querySelector('.links');

//add event listings
btnOn.addEventListener("click", () => {
    menuOn.classList.toggle("hidden");
});