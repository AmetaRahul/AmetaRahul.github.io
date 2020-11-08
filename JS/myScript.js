function handleClick(event){
  var cols = document.getElementsByClassName('card-flex-box');
  var card = document.getElementsByClassName('slds-card_width');
  var main=document.getElementById('main-content');
  main.style.display='flex';
  main.style.flexWrap='wrap';
  for(i = 0; i < cols.length; i++) {
    cols[i].style.flexDirection ='column';
     cols[i].style.alignItems="center";
    cols[i].style.flexWrap ='wrap';
    card[i].style.width='30%';
  }
}


function toogleNavBar(){
	var element = document.getElementById("side-bar");
    element.classList.toggle("slds-show_medium");


}