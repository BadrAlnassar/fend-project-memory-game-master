/*
 * Create a list that holds all of your cards
 */
let list = ['fa-bolt','fa-bolt'
        ,   'fa-cube','fa-cube'
        ,   'fa-anchor','fa-anchor'
        ,   'fa-leaf', 'fa-leaf'
        ,   'fa-bicycle','fa-bicycle'
        ,   'fa-diamond', 'fa-diamond'
        ,   'fa-bomb'   , 'fa-bomb'
        ,   'fa-paper-plane-o' , 'fa-paper-plane-o'
        ];

        function makecard(c){
            return `<li class='card' data-card="${c}"><i class='fa ${c}'></i></li>`
        }
 


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function start(){
    let getdeckposition = document.querySelector('.deck');
    let  putcards =shuffle(list).map(function(el){
        return makecard(el);
    });
   getdeckposition.innerHTML=putcards.join('');

}
start();
let timer=0;
let getdeckposition1 = document.querySelector('.deck');
 let getmove= document.querySelector(".moves")
 let movescounter=1;
 let getCards = document.querySelectorAll('.card');
 let cheak = [];
 let counter=0;
 let getstar= document.querySelectorAll(".fa-star")
 let arrstar=[];
 //push into an array to use ti for remove star
 getstar.forEach(el =>{
    arrstar.push(el)
 })
 var Timer = new Date();
 function startgame(){
     getdeckposition1.addEventListener('click',function(){
        function x(){
            var startTime=  new Date();
        document.getElementById('timer').innerHTML = Math.abs(Timer.getMinutes() - startTime.getMinutes()) + " mins:" + Math.abs(Timer.getSeconds() - startTime.getSeconds()) +" secs";
        }        
    timer=window.setInterval(x,10)
     })
 }
 startgame();
   getCards.forEach(el =>{
        el.addEventListener('click', function(d){     
// to remove start after numbers of moves
            if(movescounter> 15 && movescounter <20){   
         arrstar[0].classList.remove("fa-star")      
            }
            if(movescounter> 20 ){   
                arrstar[1].classList.remove("fa-star")      
                   }
            if (!el.classList.contains('show') && !el.classList.contains('open') && !el.classList.contains('match'))
            cheak.push(el);
            el.classList.add('open','show');
            if (cheak.length ==2){
                getmove.innerHTML=movescounter++;
                if (cheak[0].dataset.card == cheak[1].dataset.card){
                    counter++;
                    cheak[0].classList.add('match');
                    cheak[0].classList.add('open');
                    cheak[0].classList.add('show');
                    cheak[1].classList.add('match');
                    cheak[1].classList.add('open');
                    cheak[1].classList.add('show');
                    cheak=[];
                } else{
                setTimeout(function(){
                    cheak.forEach(el => {
                        el.classList.remove('open' , 'show');
                    });
                    cheak=[];
                } , 600)
                }
            }
            if(counter==8){
                let get= document.querySelector("#timer")
                swal({
                    title: "CONGRATS!!",
                    text: `you finish the game in :${get.innerHTML}`,
                    icon: "success",
                    button: "Play agin",
                  })
.then((value) => {
    document.location.reload("true");
});
            }
        });
 });
 function reload(){
 let getretartbuuton = document.querySelector("#bt1")
 getretartbuuton.addEventListener('click',function(){
    document.location.reload("true");
 })
}
reload();

 

    
 
 