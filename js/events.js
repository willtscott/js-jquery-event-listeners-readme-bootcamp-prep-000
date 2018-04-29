
//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function(){
    this.classList.add("tasty");
  });
}

$(document).ready(function(){

// call functions here
  getIt();

});
