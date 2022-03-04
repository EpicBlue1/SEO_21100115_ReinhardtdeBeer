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

//first search block

// Card Compare page
// add and remove cards
// grab everything
const search = document.querySelector('.SearchOne');

search.addEventListener("click", () => {
    //get value from input
	const searchQuery = document.querySelector('input').value;

	// search result
    //insert value from input into url
	const coinSearch = "https://api.coingecko.com/api/v3/search?query=" + searchQuery;

	$.getJSON(coinSearch, function(result) {

//loop through results and add to html
		for (var i = 0; i < result.coins.length; i++) {

			//variable for html
			var searchRes = `
            <Button class="w-full h-16 p-1 bg-gray-800 rounded Option Selector grid grid-cols-3 text-left mb-2">
                <img src="` + result.coins[i].large + `" class="h-14 w-14 rounded-full bg-white">
                    <div>` + result.coins[i].name + `</div>
                <div>
                    <div>Market Cap Rank</div>
                    <div>` + result.coins[i].market_cap_rank + `</div>
                </div>
            </Button>
            `;
			//add html to dom
            $(".SearchRes").append(searchRes);


            //open result   
			$(".Option").click(function(){
			    $(".Selector").addClass("hidden");
                $(this).closest(".DisplayOption").toggle("hidden");
                $(".Search").addClass("hidden");
                console.log("CLicked on a result")
            })

            //close result
            $(".close").click(function(){
			    $(".Selector").removeClass("hidden");
                $(this).closest(".DisplayOption").toggle("hidden");
                $(".Search").removeClass("hidden");
                console.log("Closed result")
            })

            //clear results when new search
            $(".SearchOne").click(function(){
			    $(".SearchRes").empty();
                $(".DisplayOption").empty();
            });

		};
	});
});

//first search block

// Card Compare page
// add and remove cards
// grab everything
// const searchtwo = document.querySelector('.SearchOne');

// searchtwo.addEventListener("click", () => {
//     //get value from input
// 	const searchQuery = document.querySelector('input').value;

// 	// search result
//     //insert value from input into url
// 	const coinSearch = "https://api.coingecko.com/api/v3/search?query=" + searchQuery;

// 	$.getJSON(coinSearch, function(result) {

// //loop through results and add to html
// 		for (var i = 0; i < result.coins.length; i++) {

// 			//variable for html
// 			var searchRes = `
//             <Button class="w-full h-16 p-1 bg-gray-800 rounded Option Selector grid grid-cols-3 text-left mb-2">
//                 <img src="` + result.coins[i].large + `" class="h-14 w-14 rounded-full bg-white">
//                     <div>` + result.coins[i].name + `</div>
//                 <div>
//                     <div>Market Cap Rank</div>
//                     <div>` + result.coins[i].market_cap_rank + `</div>
//                 </div>
//             </Button>
//             `;
// 			//add html to dom
//             $(".SearchRes").append(searchRes);


//             //open result   
// 			$(".Option").click(function(){
// 			    $(".Selector").addClass("hidden");
//                 $(".DisplayOption").removeClass("hidden");
//                 $(".Search").addClass("hidden");
//                 console.log("CLicked on a result")
//             })

//             //close result
//             $(".close").click(function(){
// 			    $(".Selector").removeClass("hidden");
//                 $(".DisplayOption").addClass("hidden");
//                 $(".Search").removeClass("hidden");
//                 console.log("Closed result")
//             })

//             //clear results when new search
//             $(".SearchOne").click(function(){
// 			    $(".SearchRes").empty();
//             })

// 		};
// 	});
// });
