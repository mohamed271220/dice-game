randomNumber1=Math.floor(Math.random()*6)+1;
randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber1)

rand1= "images/"+"dice"+ randomNumber1+".png"

document.querySelector(".img1").setAttribute("src",rand1)
rand2= "images/"+"dice"+ randomNumber2+".png"

document.querySelector(".img2").setAttribute("src",rand2)

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 won"

}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 won"
}
else {
    document.querySelector("h1").innerHTML="draw"
}