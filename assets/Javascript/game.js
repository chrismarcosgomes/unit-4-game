var myNumber = Math.floor(Math.random()*101)+19
$("#myNumber").text(myNumber)
var counter=0;

var red =Math.floor(Math.random()*11)+1
var blue =Math.floor(Math.random()*11)+1
var green =Math.floor(Math.random()*11)+1
var yellow =Math.floor(Math.random()*11)+1

$("#myScore").text(counter);

$("#blue").on("click",function(){
    counter+=blue;
    $("#myScore").text(counter);
    
})

$("#green").on("click",function(){
    counter+=green;
    $("#myScore").text(counter);
})
$("#red").on("click",function(){
    counter+=red;
    $("#myScore").text(counter);
})
$("#yellow").on("click",function(){
    counter+=yellow;
    $("#myScore").text(counter);
})