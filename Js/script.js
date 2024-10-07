var tabla = document.getElementById("board");
var reset = document.getElementById("reset");
var kocke = tabla.querySelectorAll("div");
var moveC = document.getElementById("movesCount");
var value = document.getElementById("scoreCount");
var vrijednosti = [];
reset.addEventListener("click",()=>{ 
    vrijednosti = [];
    var randombroj = generate();
    var drugiBroj = generate();
    for(var i = 0; i < kocke.length; i++){
       if(i === randombroj  ||  i === drugiBroj){
          kocke[i].innerHTML = 2;
           vrijednosti.push(2);
       }
      else{
        kocke[i].innerHTML ="";
       vrijednosti.push(0);
      }
   }
   moveC.innerHTML = 0;
   value.innerHTML = 0;

}
)


document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
            moveLeft();
            updateTable();
            CalculateScore();
            Move();
            break;
        case 38:
           moveUp();
           updateTable();
           CalculateScore();
           Move();
           break;
        case 39:
            moveRight();
            updateTable();
            CalculateScore();
            Move();
            break;
        case 40:
            moveDown();
            updateTable();
            CalculateScore();
            Move();
            break;
    }
});










function moveLeft(){    
    for(var i = 0; i < vrijednosti.length;i++){
        if(i % 4 === 0){
            var j = 3;
            while( j != 0){
            if(vrijednosti[i+j] === vrijednosti[i+(j-1)]){
                vrijednosti[i+(j-1)] *= 2;
                vrijednosti[i+j] = 0;
            }
            else if(vrijednosti[i+(j-1)] === 0){
                vrijednosti[i+(j-1)] = vrijednosti[i+j];
                vrijednosti[i+j] = 0;
            }
            j--;
        }
   
        }
    }
    var koef = dodaj();
    vrijednosti[4*koef-1] = 2;
}


function moveUp(){
        for(var i = vrijednosti.length-1 ; i >=0 ; i--){
            if(vrijednosti[i] === vrijednosti[i-4]){
                vrijednosti[i-4] *= 2;
                vrijednosti[i] = 0;
            }
            else if(vrijednosti[i-4] === 0){
                vrijednosti[i-4] = vrijednosti[i];
                vrijednosti[i] = 0;
            }
            if(i === 3){
                break;
            }
    }
    
    var koef = dodaj();
    vrijednosti[15-koef] = 2;
}

function moveRight(){
    for(var i = 0; i < vrijednosti.length;i++){
        if(i % 4 === 0){
            var j = 0;
            while( j != 3){
            if(vrijednosti[i+j] === vrijednosti[i+(j+1)]){
                vrijednosti[i+(j+1)] *= 2;
                vrijednosti[i+j] = 0;
            }
            else if(vrijednosti[i+(j+1)] === 0){
                vrijednosti[i+(j+1)] = vrijednosti[i+j];
                vrijednosti[i+j] = 0;
            }
            j++;
        }
   
        }
    }
    var koef = dodaj();
    vrijednosti[4*(koef-1)] = 2;
}

function moveDown(){
    for(var i = 0 ; i <vrijednosti.length ; i++){
        if(vrijednosti[i] === vrijednosti[i+4]){
            vrijednosti[i+4] *= 2;
            vrijednosti[i] = 0;
        }
        else if(vrijednosti[i+4] === 0){
            vrijednosti[i+4] = vrijednosti[i];
            vrijednosti[i] = 0;
        }
        if(i === vrijednosti.length-4){
            break;
        }
}

var koef = dodaj();
vrijednosti[koef-1] = 2;
}

function updateTable(){
   for(var i = 0; i < kocke.length; i++){
       if(vrijednosti[i] === 0){
           kocke[i].innerHTML=" ";
       }
       else{
            kocke[i].innerHTML = vrijednosti[i];
       }
       
        if(vrijednosti[i] === 2){
            kocke[i].style.backgroundColor= "rgb(238, 228, 218)";
            kocke[i].style.color="black";
        }
        else if(vrijednosti[i] === 0){
            kocke[i].style.backgroundColor ="rgb(238, 228, 218)";
        }
        else if(vrijednosti[i] === 4){
            kocke[i].style.backgroundColor ="rgb(238, 225, 206)";
            kocke[i].style.color="black"; 
        }
        else if(vrijednosti[i] === 8){
            kocke[i].style.backgroundColor ="rgb(244, 178, 126)";
            kocke[i].style.color="white";
        }
        else if(vrijednosti[i] === 16){
            kocke[i].style.backgroundColor ="rgb(245, 151, 107)";
            kocke[i].style.color="white";
        }
        else if(vrijednosti[i] === 32){
            kocke[i].style.backgroundColor ="rgb(247, 126, 105)";
            kocke[i].style.color="white";
        }
        else if(vrijednosti[i] === 64){
            kocke[i].style.backgroundColor ="rgb(247, 97, 72)";
            kocke[i].style.color="white";
        }
        else if(vrijednosti[i] === 128){
            kocke[i].style.backgroundColor ="rgb(237, 207, 114)";
            kocke[i].style.color="white";
        }
        else if(vrijednosti[i] === 256){
            kocke[i].style.backgroundColor ="rgb(237, 203, 96)";
            kocke[i].style.color="white";
        }
        else if(vrijednosti[i] === 512){
            kocke[i].style.backgroundColor ="rgb(237, 200, 80)";
            kocke[i].style.color="white";
        }
        else if(vrijednosti[i] === 1024){
            kocke[i].style.backgroundColor ="rgb(237, 198, 66)";
            kocke[i].style.color="white";
        }
        else if(vrijednosti[i] === 2048){
            kocke[i].style.backgroundColor ="rgb(237, 194, 46)";
            kocke[i].style.color="white";
        }

   }
}




function generate(){
    return Math.floor(Math.random() * 16);
}

function dodaj(){
    return Math.floor(Math.random() * 4);
}

function CalculateScore(){

    var sum = 0;
    for(var i = 0 ; i < vrijednosti.length;i++){
        sum = sum+vrijednosti[i];
    }
    value.innerHTML = sum;
}
function Move(){
    
    moveC.innerHTML = parseInt(moveC.innerHTML) + 1;
}