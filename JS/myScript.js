function handleClick_card(event){
  var cardFlexBoxes = document.getElementsByClassName('card-flex-box');
  var cards = document.getElementsByClassName('card'); 

  var card_element = document.getElementsByClassName('show-in-card');
  var table_element = document.getElementsByClassName('show-in-table');
  var headshots = document.getElementsByClassName('headshot');

  var table_icon = document.getElementById("table_view");
  table_icon.style.backgroundColor='white';
  event.target.style.backgroundColor='#00a0ff';


  for(i=0;i<card_element.length;i++){
  	card_element[i].classList.add('show');
  } 

  for(i=0;i<table_element.length;i++){
  	table_element[i].classList.add('hide');
  }

  for(i=0;i<headshots.length;i++){
  	headshots[i].classList.add('headshot-size_large');
  }
   
  
  for(i = 0; i < cards.length; i++) {
    cards[i].classList.add('slds-medium-size_1-of-5');
    cards[i].classList.add('slds-m-horizontal_medium');
    cards[i].classList.remove('table-spacing');
  }

 for(i=0;i < cardFlexBoxes.length; i++ ){
  	cardFlexBoxes[i].classList.add('vertical-flex');
  }
}   




function handleClick_table(event){
  var cardFlexBoxes = document.getElementsByClassName('card-flex-box');
  var cards = document.getElementsByClassName('card');

   var card_element = document.getElementsByClassName('show-in-card');
  var table_element = document.getElementsByClassName('show-in-table');
  var headshots = document.getElementsByClassName('headshot');

   var card_icon = document.getElementById("card_view");
  card_icon.style.backgroundColor='white';
  event.target.style.backgroundColor='#00a0ff';

  for(i=0;i<card_element.length;i++){
  	card_element[i].classList.remove('show');
  } 

  for(i=0;i<table_element.length;i++){
  	table_element[i].classList.remove('hide');
  }


  for(i=0;i<headshots.length;i++){
  	headshots[i].classList.remove('headshot-size_large');
  }

  for(i = 0; i < cards.length; i++) {
    cards[i].classList.remove('slds-medium-size_1-of-5');
    cards[i].classList.remove('slds-m-horizontal_medium');
    cards[i].classList.add('table-spacing');
  }

  for(i=0;i < cardFlexBoxes.length; i++ ){
  	cardFlexBoxes[i].classList.remove('vertical-flex');
  }
}


function toogleNavBar(){
	var element = document.getElementById("side-bar");
	element.style.height='600px';
    element.classList.toggle("slds-show_medium");

}
