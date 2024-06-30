var randomNumber1 = Math.floor(Math.random() * 6 )+1;

var randomImage = "dice" + randomNumber1 + ".png";

var randomSource = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" ,randomSource);


var randomNumber2 = Math.floor(Math.random() * 6 )+1;

var randomImage1 = "dice" + randomNumber2 + ".png";

var randomSource1 = "images/" + randomImage1;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" ,randomSource1);


if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Dice two is winner";
}else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Dice one is winner";
}

else{
    document.querySelector("h1").innerHTML = "MAtch is tie";
}

 