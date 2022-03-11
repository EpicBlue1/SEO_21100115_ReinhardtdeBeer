//grab everything
const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

//add event listings
btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});

const YourInfo = []


const words = "https://random-word-api.herokuapp.com/word?number=5";
    $.getJSON(words, function(result){

        for(var i = 0; i < result.length; i++){

            var str = result[i];
            var strFirstThree = str.substring(0,3);

            const search = "https://api.coingecko.com/api/v3/search?query="+ strFirstThree +"";
            $.getJSON(search, function(result){

                var len = result.coins.length;

                    // var random = Math.floor(Math.random() * len);
                    // var priceNull = result.coins[random].market_cap_rank * 2;


                    if(result.coins[i].market_cap_rank === "null"){
                        result.coins[i].market_cap_rank = 0;
                    }

                    YourInfo.push({name: result.coins[i].name, marketCap: result.coins[i].market_cap_rank, price: 100, img: result.coins[i].large})
                    
            });  
        }
    });

setTimeout(function() {
    $(".Generate").removeClass("hidden");
 

    $(".loadCat").addClass("hidden");
        //your code to be executed after 1 second
    }, 3000);


$(".Generate").on("click", function(){
        $(this).addClass("hidden");
        $(".Selection").removeClass("mt-20");
        $(".Selection").removeClass("hidden");
        $(".AllIn").removeClass("hidden");

        //generate random words
for(var i = 0; i < YourInfo.length; i++){
            var priceNull = YourInfo[i].marketCap * 2;

            //variable for html
            var Card = `
            <div class="bg-cover col w-32 h-48 md:w-64 md:h-96 pt-6 md:pt-12" style="background-image: url('../img/Card\ Front.png')">
            <div id="lol"  class="cardplay bg-cover bg-white w-10 h-10 md:w-24 md:h-24 rounded-full mx-auto cursor-pointer" style="background-image: url('`+ YourInfo[i].img + `')"></div>
            <h2 class="w-24 md:w-40 text-center truncate mx-auto md:text-2xl py-4">`+ YourInfo[i].name + `</h2>
            <p class="text-center text-white font-bold text-xs md:text-lg">Price: `+ priceNull + `</p>
            <p class="text-center text-white font-bold text-xs md:text-lg">MarketCap: `+ YourInfo[i].marketCap +`</p>
            </div>

            `;
        //add html to dom
        $(".cards").append(Card);
    }
    
    
})

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


                    if(result.coins[i].market_cap_rank === null){
                        result.coins[i].market_cap_rank = 0;
                    }

                    opponentInfo.push({name: result.coins[i].name, marketCap: result.coins[i].market_cap_rank, price: priceNull, img: result.coins[i].large})
                    
            });  
        }
});

$(".AllIn").on("click", function(){

    var myFinal = 0;
    for (var i = 0; i < YourInfo.length; i++) {
    myFinal += YourInfo[i].price + YourInfo[i].marketCap;
}

    var myOpp = 0;
    for (var i = 0; i < opponentInfo.length; i++) {
    myOpp += opponentInfo[i].price + opponentInfo[i].marketCap;
}
    
    console.log(myFinal);
    console.log(myOpp);


    if(myFinal > myOpp){
        $(".wonPop").removeClass("hidden");
    } else {

        $(".lostPop").removeClass("hidden");

        for(var i = 0; i < opponentInfo.length; i++){

           //variable for html
           var OppCards = `
           <div class="bg-contain h-56 py-8" style="background-image: url('../img/Card\ Front.png'); background-position: center; background-repeat: no-repeat;">
				<div class="bg-cover bg-white w-10 h-10 rounded-full mx-auto" style="background-image: url('`+ opponentInfo[i].img + `')"></div>
				<h2 class="w-24 text-center truncate mx-auto py-4">`+ opponentInfo[i].name + `</h2>
				<p class="w-24 mx-auto text-center truncate text-white font-bold text-xs">Price: `+ opponentInfo[i].price + `</p>
				<p class="w-24 mx-auto text-center truncate text-white font-bold text-xs">MarketCap: `+ opponentInfo[i].marketCap +`</p>
			</div>

           `;
       //add html to dom
       $(".OppCards").append(OppCards);
    }
}
})

//links
//grab everything
const btnOn = document.querySelector('.linkbutton');
const menuOn = document.querySelector('.links');

//add event listings
btnOn.addEventListener("click", () => {
    menuOn.classList.toggle("hidden");
});
