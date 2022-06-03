let d1=document.querySelector(".dice");
let image1=document.querySelector(".img1");
let image2=document.querySelector(".img2");

let randomNum1=Math.floor(Math.random()*6)+1; //numbers between 1-6
let randomImage1="dice"+randomNum1+".png";  //dice1-dice6
let randomImageSource1="../The_Dice_Game/Image/"+randomImage1;

image1.setAttribute("src",randomImageSource1);

let randomNum2=Math.floor(Math.random()*6)+1;
let randomImage2="dice"+randomNum2+".png";
let randomImageSource2="../The_Dice_Game/Image/"+randomImage2;
image2.setAttribute("src",randomImageSource2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player 1 wins.";
}
else if(randomNum2>randomNum1){
    document.querySelector("h1").innerHTML="Player 2 wins.";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}