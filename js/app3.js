window.onload = function(){
    var board = document.querySelector('.board-js');
    
    /*board.addEventListener('click',function(event){
        event.target.style.backgroundColor = 'red';
    });
    board.addEventListener('dblclick',addBgc,false);*/

    board.addEventListener('click',addX);

    /*
    board.addEventListener('dblclick',function(event){
        event.target.style.backgroundColor = 'blue';
    });
    board.addEventListener('mouseover',function(event){
        event.target.style.backgroundColor = 'yellow';
    });
    board.removeEventListener('click',addBgc);*/
};
/*
function addBgc(event){
    event.target.style.backgroundColor = "aqua";
}*/
var centinel = true;

function addX(event){

  if(event.target.matches('td')&&event.target.textContent===''){
    if(centinel){
    event.target.textContent = 'x';
    }else{ 
    event.target.textContent = 'o';
    }
    centinel = !centinel;
    }
  }



