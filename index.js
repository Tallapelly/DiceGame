
var randomNumber1 =     Math.floor(Math.random()*6+1);

var randomImagesrc1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImagesrc1);

var randomNumber2 = Math.floor(Math.random()*6+1);
var randomImagesrc2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImagesrc2);

if(randomImagesrc1>randomImagesrc2){
    document.querySelector("h1").innerHTML="  🏆 Player 1 wins";
}
else if(randomImagesrc1<randomImagesrc2){
    document.querySelector("h1").innerHTML="  🏆 Player 2 wins"; 
}
else{
    document.querySelector("h1").innerHTML=" DRAW"; 
}
