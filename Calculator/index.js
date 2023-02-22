
var  inputElement  = document.querySelector('input');
var  sliceElement  = document.getElementsByTagName('input')[2];
  var  btnElement = document.getElementById('btn')
 function handelClick(){

    inputElement.value = " ";
 
 }
 function stringClick(){
   
 }
 sliceElement.addEventListener('click',stringClick)
  btnElement.addEventListener('click',handelClick)