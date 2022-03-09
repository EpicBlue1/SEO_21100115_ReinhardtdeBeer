

//grab everything
const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

//add event listings
btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});



// //generate random words
const words = "https://random-word-api.herokuapp.com/word?number=5";
    $.getJSON(words, function(result){

        for(var i = 0; i < result.length; i++){

            var str = result[i];
            var strFirstThree = str.substring(0,3);

            const search = "https://api.coingecko.com/api/v3/search?query="+ strFirstThree +"";
            $.getJSON(search, function(result){

                var len = result.coins.length;

                    var random = Math.floor(Math.random() * len);
                    var priceNull = Math.floor(Math.random() * 50) * Math.floor(Math.random() * 50);


                    if(result.coins[random].market_cap_rank === null){
                        result.coins[random].market_cap_rank = 0;
                    }

                    //variable for html
                    var Card = `
                    <div class="bg-cover col w-32 h-48 md:w-64 md:h-96 pt-6 md:pt-12" style="background-image: url('../img/Card\ Front.png')">
                    <div class="cardplay bg-cover bg-white w-10 h-10 md:w-24 md:h-24 rounded-full mx-auto cursor-pointer" style="background-image: url('`+ result.coins[random].large + `')"></div>
                    <h2 class="w-24 md:w-40 text-center truncate mx-auto md:text-2xl py-4">`+ result.coins[random].name + `</h2>
                    <p class="text-center text-white font-bold text-xs md:text-lg">Price: `+ priceNull + `</p>
                    <p class="text-center text-white font-bold text-xs md:text-lg">MarketCap: `+ result.coins[random].market_cap_rank +`</p>
                    </div>
                    `;
                //add html to dom
                $(".cards").append(Card);

                
                
            });

        }
});

const opponentInfo = []

//opponent
// //generate random words
const oppWords = "https://random-word-api.herokuapp.com/word?number=5";
    $.getJSON(oppWords, function(result){

        for(var i = 0; i < result.length; i++){

            var str = result[i];
            var strFirstThree = str.substring(0,3);

            const search = "https://api.coingecko.com/api/v3/search?query="+ strFirstThree +"";
            $.getJSON(search, function(result){

                var len = result.coins.length;

                    var random = Math.floor(Math.random() * len);
                    var priceNull = Math.floor(Math.random() * 50) * Math.floor(Math.random() * 50);


                    if(result.coins[random].market_cap_rank === null){
                        result.coins[random].market_cap_rank = 0;
                    }

                    opponentInfo.push({name: result.coins[random].name, marketCap: result.coins[random].market_cap_rank, price: priceNull, img: result.coins[random].large})
                    
            });    

        }
});