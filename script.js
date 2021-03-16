var name ="Yu";
var age ="18";
var isBoy = "true";
var fruits = ["apple","banana","peach"];


lert(name)
alert(age)
alert(isBoy)
alert(fruits[2]);

function addition(num){
return num+10;
 }
 var age = 28;
var trueage= addition(age);
alert(trueage);

age2=15;
var trueage2= addition(age2);
alert(trueage2);

(function(){
 	alert("Hello World!");

 })();
document.getElementById("byid").innerHTML="我來自ID";
document.getElementById("byid").style.color ="blue";

document.getElementsByClassName("byClass")[0].innerHTML="我來自Class";
document.getElementsByClassname("byClass")[0].style.fontsize="large";

document.getElementsByTagname("div")[2].innerHTML="我來自Tag";
document.getElementsByTagname("div")[2].style.fontFamily="微軟正黑體";

document.getElementsByTagname("p")[0].innerHTML="aaa";
document.getElementsByTagname("p")[0].style.fontSize="30px";
document.getElementsByTagname("p")[0].style.color="red";
